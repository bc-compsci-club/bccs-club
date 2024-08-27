import Image from 'next/image';
import eventPic from '../../../images/club-event/project-sharing.jpg';
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Internship Experience Sharing',
  'Coffee and Code Night',
  'Hackathon',
  'Tech Trek',
  'Tech Talk Series',
  'Project Showcases',
]

export default function TeamSection() {
  return (
    <div className="pt-8 sm:pt-16">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="w-full flex-none lg:max-w-sm order-last">
              <Image
                alt="events of computer science club"
                src={eventPic}
                className="h-96 w-full rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto"
                placeholder="blur"
              />
            </div>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Club events</h2>
              <p className="mt-6 text-lg leading-8">
                At the Computer Science Club, we are committed to fostering a dynamic and engaging community through a series of events and workshops designed to enhance your learning experience and professional growth.
                Our events offer opportunities to connect, learn, and collaborate with fellow members and industry professionals.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a href="/events" className="text-sm font-semibold leading-6 text-bc-red hover:text-bc-yellow">
                  See our upcoming events <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl pointer-events-none"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>
      </div>
    </div>
  );
}
