# Upload a showcase project

The upload script sends one JSON record to the Spring API. The API writes the record to its configured PostgreSQL database. Host the media first and put its URLs in the JSON file.

1. From the repository root, run `python -m pip install -r scripts/requirements.txt`.
2. Copy [the example payload](../scripts/showcase-project.example.json) to `my-project.json` and edit it. Leave `slug` out to generate it from the title, or supply a unique lowercase slug.
3. Set `ADMIN_API_KEY` in the terminal to the same key configured on the API. For the local instance set up on this machine, use its legacy showcase-only key, stored outside the repository:

   ```powershell
   $env:SHOWCASE_ADMIN_API_KEY = Get-Content -Raw (Join-Path $env:LOCALAPPDATA 'BCCS-Showcase-Local/showcase-admin-key')
   ```

4. With the local API running, upload the record:

   ```powershell
   python scripts/add_showcase_project.py --api-url http://127.0.0.1:8090/v1/showcase/projects --json my-project.json
   ```

5. The script prints the new database ID and slug. Verify it at `http://127.0.0.1:8090/v1/showcase/projects/slug/<slug>` or reload the showcase.

## Payload fields

- Required text fields are `title`, `shortDescription`, `description`, `authorName`, and `techStack`. The stack appears on the detail page.
- `categories` is an optional JSON array of `"Web"`, `"Mobile"`, and `"Browser Extension"`. Use each category at most once. Set `featured: true` to add the **Featured Project** label. The site joins the labels with ` · `.
- For `demoVideoUrl`, use a direct, publicly accessible MP4 or WebM URL. A bundled video under `frontend/public/videos/showcase/` can use a path such as `/videos/showcase/my-demo.mp4`.
- For `presentationUrl`, copy the iframe's `src` from OneDrive or Google Slides. A publicly accessible PowerPoint file URL also works.
- `thumbnailUrl` is required. Use a publicly accessible image URL or a bundled image path such as `/images/showcase/my-project.png`. `websiteUrl` and `githubUrl` are optional.
- Set `isActive: false` to keep an entry off the showcase listing while preparing it.

The script creates one new entry per call. Use a unique title or slug for each upload.

## Example for a browser extension with no website

Save this as `my-project.json`. The cover path refers to an existing image and the video is a public sample.

```json
{
  "title": "Course Tab Organizer",
  "slug": "course-tab-organizer",
  "shortDescription": "Save browser tabs in groups for each course.",
  "description": "Restore a study session by reopening a saved course group.",
  "authorName": "Example Student",
  "techStack": "TypeScript, WebExtensions",
  "categories": ["Browser Extension"],
  "demoVideoUrl": "https://developer.mozilla.org/shared-assets/videos/flower.mp4",
  "thumbnailUrl": "/images/showcase/focusflow-study-desk.png"
}
```

Replace the sample media before publishing a real project. To add source code, set `githubUrl` to the project's repository URL. With no `websiteUrl`, the source link becomes the primary action. To add slides, copy only the iframe's `src` into `presentationUrl`.

## Check an upload

```sh
curl -f http://127.0.0.1:8090/v1/showcase/projects/slug/course-tab-organizer
curl -f "http://127.0.0.1:8090/v1/showcase/projects/browse?category=Browser%20Extension&query=tab"
```

| Response | What to check |
| --- | --- |
| 201 | The project was created. Use the returned slug for its detail URL. |
| 400 | Check the required text fields, category names, slug, and media URLs. |
| 403 | Check that the upload script and API use the same admin key. |
| 409 | Choose a unique slug or update the existing project. |

Run the frontend without `--demo` to see uploaded projects. Demo mode generates 23 records in the frontend process and uses no database connection.

To remove an uploaded project, see [delete by ID](delete-showcase-project.md).
