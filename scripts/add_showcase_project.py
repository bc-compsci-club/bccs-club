"""Create one project in the BCCS project showcase API.

The endpoint deliberately requires an admin key for write operations. Pass it
with --api-key or set SHOWCASE_ADMIN_API_KEY in your environment.
"""

import argparse
import json
import os
import sys
from pathlib import Path
from urllib.parse import urlparse

import requests


REQUIRED_FIELDS = {
    "title",
    "shortDescription",
    "description",
    "authorName",
    "techStack",
    "websiteUrl",
}
VALID_THEMES = {"rose", "gold", "violet", "sky"}


def is_http_url(value: str) -> bool:
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def load_project(path: Path) -> dict:
    with path.open(encoding="utf-8") as source:
        project = json.load(source)
    if not isinstance(project, dict):
        raise ValueError("The JSON file must contain one project object.")

    missing = sorted(field for field in REQUIRED_FIELDS if not project.get(field))
    if missing:
        raise ValueError(f"Missing required fields: {', '.join(missing)}")

    for url_field in ("websiteUrl", "githubUrl", "demoUrl"):
        value = project.get(url_field)
        if value and not is_http_url(value):
            raise ValueError(f"{url_field} must be a full http(s) URL.")

    project.setdefault("coverTheme", "rose")
    if project["coverTheme"] not in VALID_THEMES:
        raise ValueError("coverTheme must be one of: " + ", ".join(sorted(VALID_THEMES)))
    project.setdefault("featured", False)
    project.setdefault("isActive", True)
    return project


def main() -> int:
    parser = argparse.ArgumentParser(description="Add a project to the BCCS showcase.")
    parser.add_argument("--api-url", required=True, help="Base projects endpoint, e.g. http://localhost:8090/v1/showcase/projects")
    parser.add_argument("--json", required=True, type=Path, help="Path to one project JSON object")
    parser.add_argument("--api-key", default=os.getenv("SHOWCASE_ADMIN_API_KEY"), help="Showcase admin key; defaults to SHOWCASE_ADMIN_API_KEY")
    args = parser.parse_args()

    if not args.api_key:
        parser.error("Provide --api-key or set SHOWCASE_ADMIN_API_KEY.")

    try:
        project = load_project(args.json)
        response = requests.post(
            args.api_url.rstrip("/"),
            json=project,
            headers={"X-Showcase-Admin-Key": args.api_key},
            timeout=15,
        )
        response.raise_for_status()
    except (OSError, ValueError, requests.RequestException) as error:
        print(f"Could not add project: {error}", file=sys.stderr)
        if isinstance(error, requests.HTTPError) and error.response is not None:
            print(error.response.text, file=sys.stderr)
        return 1

    created = response.json()
    print(f"Added '{created['title']}' (id={created['id']}, slug={created['slug']}).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
