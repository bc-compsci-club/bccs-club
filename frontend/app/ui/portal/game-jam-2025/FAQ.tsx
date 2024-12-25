import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
interface FAQItem {
  title: string;
  message: string;
  url?: string;
}
const items: FAQItem[] = [
  {
    title: "What is Game Jam 2025?",
    message:
      "The Game Jam is a week long beginner-friendly competition between developers on creating a game.",
  },
  {
    title: "Who can participate in Game Jam 2025?",
    message:
      "The Game Jam 2025 is open to all CSI and Brooklyn College students and majors.",
  },
  {
    title: "Is there a discord for Game Jam 2025?",
    message: "Yes, there is a discord. You can join the discord here:",
    url: "https://discord.com/invite/q4Yyx3dhJC",
  },
  {
    title: "What is the team limit for Game Jam 2025? Can I participate alone?",
    message:
      "The team limit for Game Jam 2025 is 4. You can participate alone or with a team.",
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequent Asked Questions
        </h2>
        <dl className="mt-2 space-y-6 divide-y divide-gray-900/10">
          {items.map((item) => (
            <Disclosure key={item.title} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">
                    {item.title}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <BsPlus
                      aria-hidden="true"
                      className="h-6 w-6 group-data-[open]:hidden"
                    />
                    <BsDash
                      aria-hidden="true"
                      className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12 flex items-center gap-1">
                <p className="text-lg  text-gray-600">{item.message}</p>
                {item.url && <Link className="hover:text-bc-red/70" href={item.url}>{item.url}</Link>}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
