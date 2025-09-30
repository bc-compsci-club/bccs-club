import { Event } from "./types";

export type Tag =
  | "leetcode"
  | "workshop"
  | "club-hours"
  | "bloomberg"
  | "gwc"
  | "fundraiser"
  | "gdg"
  | "talk"
  | "panel"
  | "info";

export type TagMeta = {
  key: Tag;
  label: string;
  color: "purple" | "green" | "blue" | "pink" | "yellow" | "red" | "teal";
};

export function getEventTags(event: Event): Tag[] {
  const title = event.title || "";
  const desc = event.description || "";
  const haystack = `${title}\n${desc}`;
  const tags = new Set<Tag>();

  if (/club hours/i.test(title)) tags.add("club-hours");

  // LeetCode if explicitly mentioned OR it's Tuesday Club Hours
  const start = event.startTime ? new Date(event.startTime) : null;
  const isTuesday = start ? start.getDay() === 2 : false;
  const byweekday = event.rrule?.byweekday || "";
  const hasTuesdayInRule = byweekday.split(",").map(s => s.trim().toUpperCase()).includes("TU");
  if (
    /leetcode/i.test(haystack) ||
    (/club hours/i.test(title) && (isTuesday || hasTuesdayInRule))
  ) {
    tags.add("leetcode");
  }

  if (/(workshop|demo|interview\s*prep|resume)/i.test(haystack)) tags.add("workshop");
  if (/bloomberg/i.test(haystack)) tags.add("bloomberg");
  if (/(girls\s*who\s*code|\bGWC\b)/i.test(haystack)) tags.add("gwc");
  if (/(fundraiser|bake\s*sale)/i.test(haystack)) tags.add("fundraiser");
  if (/(google\s*cloud|google\s*develop(er)?\s*group|\bGDG\b)/i.test(haystack)) tags.add("gdg");
  if (/(^|\W)talk(\W|$)|speaker/i.test(haystack)) tags.add("talk");
  if (/panel/i.test(haystack)) tags.add("panel");
  // Info session: broad informational events (avoid generic 'overview' to reduce false positives)
  if (/(info\s*session|information\s*session|open\s*house|recruit(ing|er)|\bQ&A\b)/i.test(haystack)) tags.add("info");

  return Array.from(tags);
}

export function getTagMeta(tag: Tag): TagMeta {
  switch (tag) {
    case "leetcode":
      return { key: tag, label: "LeetCode", color: "green" };
    case "workshop":
      return { key: tag, label: "Workshop", color: "purple" };
    case "club-hours":
      return { key: tag, label: "Club Hours", color: "blue" };
    case "bloomberg":
      return { key: tag, label: "Bloomberg", color: "purple" };
    case "gwc":
      return { key: tag, label: "Girls Who Code", color: "pink" };
    case "fundraiser":
      return { key: tag, label: "Fundraiser", color: "yellow" };
    case "gdg":
      return { key: tag, label: "Google Develop Group", color: "blue" };
    case "talk":
      return { key: tag, label: "Tech Talk", color: "red" };
    case "info":
      return { key: tag, label: "Info", color: "teal" };
    default:
      return { key: tag, label: tag, color: "blue" } as TagMeta;
  }
}

export function tagColorClasses(color: TagMeta["color"]): string {
  switch (color) {
    case "green":
      return "bg-green-100 text-green-800 ring-1 ring-inset ring-green-200";
    case "purple":
      return "bg-purple-100 text-purple-800 ring-1 ring-inset ring-purple-200";
    case "blue":
      return "bg-blue-100 text-blue-800 ring-1 ring-inset ring-blue-200";
    case "pink":
      return "bg-pink-100 text-pink-800 ring-1 ring-inset ring-pink-200";
    case "yellow":
      return "bg-yellow-100 text-yellow-800 ring-1 ring-inset ring-yellow-200";
    case "red":
      return "bg-red-100 text-red-800 ring-1 ring-inset ring-red-200";
    case "teal":
      return "bg-teal-100 text-teal-800 ring-1 ring-inset ring-teal-200";
  }
}
