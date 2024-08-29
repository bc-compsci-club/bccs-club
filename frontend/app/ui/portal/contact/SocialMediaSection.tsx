export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between pt-8">
      <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left">
        <a
          href="https://www.linkedin.com/company/bc-compsci-club/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-bc-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find the latest news and updates on our LinkedIn.
          </p>
        </a>

        <a
          href="https://www.instagram.com/bccs.club/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-bc-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Instagram{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Follow us on Instagram for event photos and more!
          </p>
        </a>

        <a
          href="https://discord.gg/C77eXN8bHT"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-bc-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            Discord{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Join our Discord server to stay in the loop and engage with the community.
          </p>
        </a>

        <a
          href="https://chat.whatsapp.com/ISU51DWQHSL0wQ7SoEAKa0"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-bc-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            WhatsApp{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Join our WhatsApp group to chat with other members.
          </p>
        </a>

        <a
          href="https://github.com/bc-compsci-club"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-bc-yellow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-xl font-semibold">
            GitHub{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Collaborate with our developers to build open-source projects.
          </p>
        </a>
      </div>
    </div>
  );
}
