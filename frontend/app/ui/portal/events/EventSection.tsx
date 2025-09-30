"use client";
import { Event } from "@/app/utils/types";
// no tag list on detail page

export default function HeroSection({ event }: { event: Event }) {
  const isClubHours = /club hours/i.test(event.title);
  const start = event.startTime ? new Date(event.startTime) : null;
  const isTuesday = start ? start.getDay() === 2 : false; // 0=Sun, 1=Mon, 2=Tue
  const showLeetCodeNote = isClubHours && isTuesday;
  const isWorkshop = /workshop/i.test(event.title);
  const isGWC = /(girls\s*who\s*code|\bGWC\b)/i.test(`${event.title} ${event.description ?? ""}`);
  const isFundraiser = /(fundraiser|bake\s*sale)/i.test(`${event.title} ${event.description ?? ""}`);
  const isTalk = /(^|\W)talk(\W|$)/i.test(`${event.title} ${event.description ?? ""}`);
  const isGDG = /(google\s*cloud|google\s*develop(er)?\s*group|\bGDG\b)/i.test(`${event.title} ${event.description ?? ""}`);
  const isWorkshopLike = /workshop|demo|interview\s*prep|resume/i.test(`${event.title} ${event.description ?? ""}`);
  const isInfo = /(info\s*session|information\s*session|open\s*house|recruit(ing|er)|\bQ&A\b)/i.test(`${event.title} ${event.description ?? ""}`);
  // Tags are displayed only on the main events page, not on the detail page
  return (
    <main>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-bc-red/15">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {event.title}
            </h1>
            {isGWC && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-800 ring-1 ring-inset ring-pink-200">
                  Girls Who Code
                </span>
              </div>
            )}
            {isFundraiser && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 ring-1 ring-inset ring-yellow-200">
                  Fundraiser
                </span>
              </div>
            )}
            {isTalk && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 ring-1 ring-inset ring-red-200">
                  Tech Talk
                </span>
              </div>
            )}
            {isGDG && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 ring-1 ring-inset ring-blue-200">
                  Google Develop Group
                </span>
              </div>
            )}
            {(isWorkshopLike || isWorkshop) && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 ring-1 ring-inset ring-purple-200">
                  Workshop
                </span>
              </div>
            )}
            {isInfo && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 ring-1 ring-inset ring-teal-200">
                  Info Session
                </span>
              </div>
            )}
            {/* removed duplicate explicit isWorkshop badge; covered by combined condition above */}
            {showLeetCodeNote && (
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 ring-1 ring-inset ring-green-200">
                  LeetCode session
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 text-lg mb-4">{event.description}</p>
          {showLeetCodeNote && (
            <p className="text-gray-700 text-base mb-4">
              Note: Tuesday Club Hours are LeetCode sessions.
            </p>
          )}
          {/* Badge tag list intentionally omitted on detail page */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Details</h2>
            <div className="mt-2 text-gray-600">
              <p className="mb-2">
                <span className="font-semibold">Location:</span>{" "}
                {event.location}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Start Time: </span>
                <span className="ml-2">
                  {event.startTime
                    ? new Date(event.startTime).toLocaleString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                    : "N/A"}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">End Time: </span>
                <span className="ml-2">
                  {event.startTime
                    ? new Date(event.endTime).toLocaleString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })
                    : "N/A"}
                </span>
              </p>
              <p className={`mb-2 ${event.rsvpLink ? "block" : "hidden"}`}>
                <span className="font-semibold">RSVP Link: </span>
                {event.rsvpLink && (
                  <a
                    className="ml-2 text-bc-red hover:text-bc-yellow underline break-all"
                    href={/^(https?:)?\/\//i.test(event.rsvpLink) ? event.rsvpLink : `https://${event.rsvpLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.rsvpLink}
                  </a>
                )}
              </p>
            </div>
          </div>
          {event.flierLink && (
            <div className="mt-8 flex justify-center">
              {/* Use plain img to allow any absolute URL without Next image config */}
              <img
                src={event.flierLink}
                alt={`${event.title} flyer`}
                className="max-h-96 w-auto rounded-md shadow"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
