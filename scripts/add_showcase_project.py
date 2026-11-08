"""Create one project in PostgreSQL through the BCCS showcase API.

Set ADMIN_API_KEY or use the legacy SHOWCASE_ADMIN_API_KEY for showcase-only access.
"""

import argparse
import json
import os
import re
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
}
VALID_CATEGORIES = {"Web", "Mobile", "Browser Extension"}


def is_http_url(value: str) -> bool:
    if not isinstance(value, str):
        return False
    parsed = urlparse(value)
    return parsed.scheme in {"http", "https"} and bool(parsed.netloc)


def load_project(path: Path) -> dict:
    """Validate the input locally before sending an authenticated request."""
    with path.open(encoding="utf-8") as source:
        project = json.load(source)
    if not isinstance(project, dict):
        raise ValueError("The JSON file must contain one project object.")

    missing = sorted(
        field for field in REQUIRED_FIELDS
        if not isinstance(project.get(field), str) or not project[field].strip()
    )
    if missing:
        raise ValueError(f"Required non-empty text fields: {', '.join(missing)}")
    if {"id", "createdAt", "updatedAt"} & project.keys():
        raise ValueError("Remove server-assigned fields: id, createdAt, and updatedAt.")

    # The featured flag supplies the Featured Project label independently.
    categories = project.get("categories", [])
    if not isinstance(categories, list) or any(
        not isinstance(category, str) or category not in VALID_CATEGORIES
        for category in categories
    ):
        raise ValueError("categories must be an array containing Web, Mobile, or Browser Extension.")
    if len(categories) != len(set(categories)):
        raise ValueError("Do not repeat categories.")

    for url_field in ("websiteUrl", "githubUrl", "presentationUrl"):
        value = project.get(url_field)
        if value not in (None, "") and not is_http_url(value):
            raise ValueError(f"{url_field} must be a full http(s) URL.")

    demo_url = project.get("demoVideoUrl")
    if demo_url not in (None, "") and not (
        is_http_url(demo_url)
        or (isinstance(demo_url, str) and re.fullmatch(r"/videos/showcase/[a-zA-Z0-9_-]+\.(mp4|webm)", demo_url))
    ):
        raise ValueError("demoVideoUrl must be an http(s) URL or a bundled showcase video path.")

    thumbnail = project.get("thumbnailUrl")
    if thumbnail not in (None, "") and not (
        is_http_url(thumbnail)
        or (isinstance(thumbnail, str) and re.fullmatch(r"/images/showcase/[a-zA-Z0-9_-]+\.(png|jpe?g|webp)", thumbnail))
    ):
        raise ValueError("thumbnailUrl must be an http(s) URL or a bundled showcase image path.")
    project.setdefault("featured", False)
    project.setdefault("isActive", True)
    return project


def main() -> int:
    parser = argparse.ArgumentParser(description="Add a project to the BCCS showcase.")
    parser.add_argument("--api-url", required=True, help="Base projects endpoint, e.g. http://localhost:8090/v1/showcase/projects")
    parser.add_argument("--json", required=True, type=Path, help="Path to one project JSON object")
    parser.add_argument("--api-key", default=os.getenv("SHOWCASE_ADMIN_API_KEY"), help="Legacy showcase-only key")
    args = parser.parse_args()

    admin_key = os.getenv("ADMIN_API_KEY")
    if args.api_key:
        headers = {"X-Showcase-Admin-Key": args.api_key}
    elif admin_key:
        headers = {"X-Admin-Key": admin_key}
    else:
        parser.error("Set ADMIN_API_KEY or provide a legacy showcase-only key.")

    try:
        project = load_project(args.json)
        # Spring validates the request and writes the row. The script needs no database credentials.
        response = requests.post(
            args.api_url.rstrip("/"),
            json=project,
            headers=headers,
            timeout=15,
            allow_redirects=False,
        )
        response.raise_for_status()
        if response.status_code != 201:
            raise ValueError(f"Expected HTTP 201 from the project endpoint, got {response.status_code}.")
        created = response.json()
    except (OSError, ValueError, requests.RequestException) as error:
        print(f"Could not add project: {error}", file=sys.stderr)
        if isinstance(error, requests.HTTPError) and error.response is not None:
            print(error.response.text, file=sys.stderr)
        return 1

    print(f"Added '{created['title']}' (id={created['id']}, slug={created['slug']}).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
