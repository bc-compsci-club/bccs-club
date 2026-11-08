## Dynamic Update Calendar Script

Set `ADMIN_API_KEY` to the API server's admin key before running the calendar script.

`dynamic_update_calendar.py` automates the creation and sending of calendar events to an API endpoint. It supports two modes:

### 1. Automated Event Generation (from date/weekdays)

Generate events for specified weekdays between a start and end date:

```sh
python3 dynamic_update_calendar.py \
	--api-url ${BACKEND_API}$/v1/calendar/events \
	--start-date 2025-09-02 \
	--end-date 2025-12-13 \
	--start-time 17:00 \
	--end-time 18:30 \
	--weekdays TU WE TH \
	--title "Club Hours" \
	--location "Room 0317, Ingersoll Hall (basement)"
```

**Arguments:**

- `--api-url` (required): API endpoint to send events
- `--start-date` (required): Start date (YYYY-MM-DD)
- `--end-date` (required): End date (YYYY-MM-DD)
- `--start-time`: Event start time (HH:MM, default 17:00)
- `--end-time`: Event end time (HH:MM, default 18:30)
- `--weekdays`: List of weekdays (e.g. TU WE TH)
- `--title`: Event title
- `--location`: Event location
- `--description`: Event description

### 2. JSON File Mode

Validate and send events from a JSON file:

```sh
python3 dynamic_update_calendar.py --api-url http://localhost:8090/v1/calendar/events --json events.json
```

**Arguments:**

- `--api-url` (required): API endpoint to send events
- `--json` (required): Path to JSON file containing event objects

**JSON Format Example:**

```json
[
  {
    "title": "Club Hours",
    "description": "Join us for coding and collaboration!",
    "location": "Room 0317, Ingersoll Hall (basement)",
    "startTime": "2025-09-02T17:00:00",
    "endTime": "2025-09-02T18:30:00",
    "isActive": true,
    "rsvpLink": "",
    "flierLink": ""
  }
]
```

### Notes

- All events are validated before sending.
- Errors and API responses are printed for each event.
- Weekdays: Use two-letter codes (MO TU WE TH FR SA SU).

---

For questions or issues, contact the BCCS Club team.

---

## Add a showcase project

See the [upload guide](../docs/upload-showcase-project.md) for the full local workflow and a description of the category and media fields.

`add_showcase_project.py` validates a single project JSON file and creates it through the showcase API. Set the server's `ADMIN_API_KEY`, or use a configured `SHOWCASE_ADMIN_API_KEY` for showcase-only access.

Install the script dependencies once if they are not already available:

```sh
python3 -m pip install -r requirements.txt
```

```sh
export ADMIN_API_KEY="use-the-deployment-secret"
python3 add_showcase_project.py \
  --api-url http://localhost:8090/v1/showcase/projects \
  --json showcase-project.json
```

The example JSON is a ready-to-edit starting point. Use `thumbnailUrl` for a public image URL or a bundled showcase image path. Website and GitHub links use full `http` or `https` URLs.

`websiteUrl`, `demoVideoUrl`, and `presentationUrl` are optional. For a demo, supply a full video URL or a bundled MP4/WebM path under `/videos/showcase/`. For a presentation, paste the iframe's `src` URL from OneDrive or Google Slides, or supply a publicly reachable `.pptx` URL for Microsoft's web viewer. If a project has source code but no website, the showcase makes **Source code** its primary action.

To preview sample projects without inserting anything into PostgreSQL, run `npm run dev --demo` from `frontend/`. See the [frontend setup guide](../frontend/README.md).
