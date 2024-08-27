import Image from 'next/image';
import teamPic from '../../../images/team/executive-board-2024-2025/executive-board-2024-2025-02.jpg';

export default function TeamSection() {
  return (
    <div className="pt-8 sm:pt-16">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="w-full flex-none lg:max-w-sm order-last lg:order-first">
              <Image
                alt="team of computer science club"
                src={teamPic}
                className="h-96 w-full rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto"
                placeholder="blur"
              />
            </div>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our team</h2>
              <p className="mt-6 text-lg leading-8">
                Get to know the awesome group behind the Computer Science Club! We are a team of dedicated and passionate students, working together to make this club the best it can be.
                <br />
                <br />
                Beyond the Executive Board, we are always looking to expand our team with talented members who want to get involved. There are open roles such as Web Developer, Event Coordinator, Graphic Designer, and more. If you are passionate about contributing to the BC tech community, we would love to have you join us!
              </p>
              <div className="mt-10 flex">
                <a href="/team" className="text-sm font-semibold leading-6 text-bc-red hover:text-bc-yellow">
                  Meet the team <span aria-hidden="true">&rarr;</span>
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
