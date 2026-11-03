## Dynamic Update Calendar Script

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

`add_showcase_project.py` validates a single project JSON file and creates it through the showcase API. Project writes require the server's `SHOWCASE_ADMIN_API_KEY` and send that value in the `X-Showcase-Admin-Key` header.

Install the script dependencies once if they are not already available:

```sh
python3 -m pip install -r requirements.txt
```

```sh
export SHOWCASE_ADMIN_API_KEY="use-the-deployment-secret"
python3 add_showcase_project.py \
  --api-url http://localhost:8090/v1/showcase/projects \
  --json showcase-project.example.json
```

The example JSON is a ready-to-edit starting point. Valid `coverTheme` values are `rose`, `gold`, `violet`, and `sky`. The website, GitHub, and optional demo links must be full `http` or `https` URLs.
