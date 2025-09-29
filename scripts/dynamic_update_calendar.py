#!/usr/bin/env python3
import json
import sys
import os
from datetime import datetime, time
import requests
from dateutil.rrule import rrule, WEEKLY

REQUIRED_FIELDS = [
    "title",
    "description",
    "location",
    "startTime",
    "endTime",
    "isActive",
    "rsvpLink",
    "flierLink"
]

def validate_event(event):
    missing = [field for field in REQUIRED_FIELDS if field not in event]
    if missing:
        return False, f"Missing fields: {', '.join(missing)}"
    # Validate types/formats (basic)
    try:
        datetime.fromisoformat(event["startTime"])
        datetime.fromisoformat(event["endTime"])
    except Exception:
        return False, "startTime or endTime is not in ISO format"
    if not isinstance(event["isActive"], bool):
        return False, "isActive must be a boolean"
    return True, ""

def main():
    import argparse
    parser = argparse.ArgumentParser(description='Automated calendar event creation')
    parser.add_argument('--api-url', required=True, help='API endpoint URL')
    parser.add_argument('--json', help='Path to JSON file containing events')
    parser.add_argument('--title',  help='Event title')
    parser.add_argument('--description', help='Event description')
    parser.add_argument('--location', help='Event location')
    parser.add_argument('--start-date', help='Start date in YYYY-MM-DD')
    parser.add_argument('--end-date', help='End date in YYYY-MM-DD')
    parser.add_argument('--start-time', help='Event start time in HH:MM')
    parser.add_argument('--end-time', help='Event end time in HH:MM')
    parser.add_argument('--weekdays', nargs='+', default=['TU', 'WE', 'TH'], help='Weekdays for events (e.g. TU WE TH)')
    # Optional extras for automated mode
    parser.add_argument('--rsvp-link', dest='rsvp_link', default='', help='RSVP link (optional)')
    parser.add_argument('--flier-link', dest='flier_link', default='', help='Flier link (optional)')
    args = parser.parse_args()

    success = 0
    failed = 0

    if args.json:
        # Require using JSON files only in scripts/json/
        json_path = os.path.abspath(args.json)
        required_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), 'json'))
        if not json_path.startswith(required_dir + os.sep):
            print(f"Error: JSON file must be located in scripts/json/ directory.")
            sys.exit(1)
            
        if not os.path.exists(args.json):
            print(f"File not found: {args.json}")
            sys.exit(1)
        with open(args.json, "r") as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error parsing JSON: {e}")
                sys.exit(1)
        if isinstance(data, dict):
            events = [data]
        elif isinstance(data, list):
            events = data
        else:
            print("JSON must be an object or array of objects")
            sys.exit(1)
        print(f"Processing {len(events)} events from JSON file...")
        for i, event in enumerate(events, 1):
            valid, msg = validate_event(event)
            if valid:
                print(f"[{i}] ✅ Event valid: {event['title']} ({event['startTime']} - {event['endTime']}) Sending to API...")
                try:
                    resp = requests.post(args.api_url, json=event, timeout=10)
                    if resp.ok:
                        print(f"    ✅ Sent successfully.")
                        success += 1
                    else:
                        print(f"    ❌ API error: {resp.status_code} {resp.text}")
                        failed += 1
                except Exception as api_e:
                    print(f"    ❌ Exception during API request: {api_e}")
                    failed += 1
            else:
                print(f"[{i}] ❌ Invalid event: {msg}")
                failed += 1
        print(f"\nSummary: {success} events sent, {failed} failed.")
        return

    # Automated generation mode
    # Map weekday strings to dateutil constants
    weekday_map = {
        'MO': 0,
        'TU': 1,
        'WE': 2,
        'TH': 3,
        'FR': 4,
        'SA': 5,
        'SU': 6
    }
    weekday_consts = []
    for wd in args.weekdays:
        wd_upper = wd.upper()
        if wd_upper in weekday_map:
            weekday_consts.append(weekday_map[wd_upper])
        else:
            print(f"Warning: Unknown weekday '{wd}', skipping.")
    if not weekday_consts:
        print("Error: No valid weekdays specified.")
        sys.exit(1)

    # Parse dates and times
    try:
        start_date = datetime.strptime(args.start_date, '%Y-%m-%d').date()
        end_date = datetime.strptime(args.end_date, '%Y-%m-%d').date()
        start_time = datetime.strptime(args.start_time, '%H:%M').time()
        end_time = datetime.strptime(args.end_time, '%H:%M').time()
    except Exception as e:
        print(f"Error parsing date/time: {e}")
        sys.exit(1)

    # Generate all specified weekday dates
    dates = list(rrule(
        freq=WEEKLY,
        dtstart=datetime.combine(start_date, time(0, 0)),
        until=datetime.combine(end_date, time(23, 59)),
        byweekday=weekday_consts
    ))

    print(f"Preparing to create {len(dates)} events from {start_date} to {end_date} on weekdays {args.weekdays}")
    for i, dt in enumerate(dates, 1):
        start_dt = datetime.combine(dt.date(), start_time)
        end_dt = datetime.combine(dt.date(), end_time)
        event = {
            "title": args.title,
            "description": args.description,
            "location": args.location,
            "startTime": start_dt.isoformat(),
            "endTime": end_dt.isoformat(),
            "isActive": True,
            "rsvpLink": args.rsvp_link or "",
            "flierLink": args.flier_link or ""
        }
        valid, msg = validate_event(event)
        if valid:
            print(f"[{i}] ✅ Event valid: {event['title']} ({event['startTime']} - {event['endTime']}) Sending to API...")
            try:
                resp = requests.post(args.api_url, json=event, timeout=10)
                if resp.ok:
                    print(f"    ✅ Sent successfully.")
                    success += 1
                else:
                    print(f"    ❌ API error: {resp.status_code} {resp.text}")
                    failed += 1
            except Exception as api_e:
                print(f"    ❌ Exception during API request: {api_e}")
                failed += 1
        else:
            print(f"[{i}] ❌ Invalid event: {msg}")
            failed += 1
    print(f"\nSummary: {success} events sent, {failed} failed.")

if __name__ == "__main__":
    main()