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
            Course Resources for Students
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore course resources to help you succeed in your tech journey. If you have any resources you would like to share with the BC tech community, we welcome your contributions on our GitHub repository.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://github.com/bc-compsci-club/bccs-club"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-bc-red hover:text-bc-yellow"
            >
              Contribute on GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


