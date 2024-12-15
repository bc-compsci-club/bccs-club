import { Event } from "@/app/utils/types";

export default function HeroSection({ event }: { event: Event }) {
  return (
    <main>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-bc-red/15">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {event.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 text-lg mb-4">{event.description}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Details</h2>
            <div className="mt-2 text-gray-600">
              <p className="mb-2">
                <span className="font-semibold">Location:</span> {event.location}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Start Time: </span>
                <span className="ml-2">
                  {event.startTime ? new Date(event.startTime).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  }) : 'N/A'}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold">End Time: </span>
                <span className="ml-2">
                  {event.startTime ? new Date(event.endTime).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  }) : 'N/A'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}