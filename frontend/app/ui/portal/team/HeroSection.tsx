export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-bc-red/15">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl pointer-events-none"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-15"
        />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Meet the Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a team of dedicated and passionate students, working together to make the Computer Science Club at Brooklyn College the best it can be. There are open roles such as Web Developer, Event Coordinator, Graphic Designer, and more. If you are passionate about contributing to the BC tech community, we would love to have you join us!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-QOpqbNHQpoczTruptSHyWFzRUkj6xtIbw1kI0rSNr_rHcg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-bc-red hover:text-bc-yellow"
            >
              Join the Team <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
