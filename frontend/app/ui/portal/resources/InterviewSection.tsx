import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

const items = [
  {
    title: "CodePath - Technical Interview Prep course",
    link: "https://www.codepath.org/courses/tech-interview-prep",
  },
  {
    title: "Neetcode - Algorithm Interview Prep Roadmap",
    link: "https://neetcode.io/roadmap",
  },
  {
    title: "Tech Interview Handbook",
    link: "https://www.techinterviewhandbook.org/",
  },
  {
    title: "ByteByteGo - System Design Interview",
    link: "https://bytebytego.com/",
  },
  {
    title: "LeetCode - Algorithm Practices",
    link: "https://leetcode.com/",
  },
  {
    title: "Final Round - AI Mock Interview",
    link: "https://www.finalroundai.com",
  },
]

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Tech Interview Preparation
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {items.map((item) => (
            <Disclosure key={item.title} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">{item.title}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                    <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base leading-7 text-bc-red hover:text-bc-yellow break-words"
                >
                  {item.link}
                </a>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}
