import TeamSection from "./ui/portal/homepage/TeamSection";
import EventsSection from "./ui/portal/homepage/EventsSection";
import ResourcesSection from "./ui/portal/homepage/ResourcesSection";

export default function Home() {
  return (
    <main>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 pt-28 sm:pt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Computer Science Club at Brooklyn College
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                By the BC tech community, for the BC tech community. The Brooklyn College Computer Science Club is a community that enables students interested in tech to learn and grow.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://www.clubs.brooklyn.cuny.edu/ComputerScienceClub/club_signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join the Club
                </a>
                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <img
              alt="Brooklyn College Library"
              src="/images/brooklyn-college/bc-library-4to3.jpg"
              className="mt-10 aspect-[3/2] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-4"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <TeamSection />
      <EventsSection />
      <ResourcesSection />
    </main>
  );
}
