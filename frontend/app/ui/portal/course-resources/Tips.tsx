import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function Page() {
  // A new array with tips and links to external resources.
  // The 'title' is the main tip, the 'content' is the description, and the 'link' is the external URL.
  const items = [
    {
      title: "Practice Consistently",
      content: "The best way to master computer science is through hands-on practice. Dedicate time to working on personal projects, solving problems on coding platforms like LeetCode or HackerRank, and even contributing to open-source software. This is how you build real-world skills and intuition.",
      link: "https://leetcode.com/",
      linkText: "Start practicing on LeetCode"
    },
    {
      title: "Build Your Portfolio",
      content: "A strong portfolio is essential for showcasing your skills to potential employers. Use platforms like GitHub to host your projects, from simple command-line tools to more complex applications like your AI-Powered Resume Analyzer. This is proof of your abilities and a major advantage.",
      link: "https://github.com/",
      linkText: "Start building your portfolio on GitHub"
    },
    {
      title: "Don't Fear Failure",
      content: "In computer science, getting errors and roadblocks is a normal part of the learning process. Instead of getting discouraged, see it as a puzzle to be solved. Learn to use online resources like Stack Overflow and don't hesitate to ask for help from a tutor or professor.",
      link: "https://stackoverflow.com/",
      linkText: "Find answers on Stack Overflow"
    },
    {
      title: "Network and Get Involved",
      content: "Your peers are one of your most valuable resources. Join the Computer Science Club or other student organizations. Networking can lead to project opportunities, valuable advice from upperclassmen, and potential job referrals after graduation.",
      link: "https://www.linkedin.com/pulse/5-things-nobody-told-you-linkedin-student-overi-ewefada-huhye",
      linkText: "Learn more about networking"
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Tips for Success
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {items.map((item) => (
            <Disclosure key={item.title} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">{item.title}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 group-data-[open]:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">
                  {item.content}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-base font-semibold leading-7 text-bc-red hover:text-bc-yellow break-words"
                  >
                    {item.linkText}
                  </a>
                )}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}