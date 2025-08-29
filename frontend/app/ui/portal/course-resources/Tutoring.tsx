import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { title } from 'process';
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

const items = [
  {
    title: "The Learning Center",
    link: "https://www.brooklyn.edu/lc/",
  },
  {
    title: "HackerRank",
    link: "https://www.hackerrank.com/",
  },
  {
    title: "LeetCode",
    link: "https://www.leetcode.com/",
  }, 
  {
    title: "W3Schools",
    link: "https://www.w3schools.com/",
  }, 
  {
    title: "edX",
    link: "https://www.edx.org/",
  }, 
  {
    title: "Coursera",
    link: "https://www.coursera.org/",
  }, 
  {
    title: "Github", 
    link: "https://www.github.com/",
  }, 
  {
    title: "Stack Overflow", 
    link: "https://stackoverflow.com/",
  }, 
  {
    title: "Geeks for Geeks", 
    link: "https://www.geeksforgeeks.org/",
  }, 
  {
    title: "freeCodeCamp",
    link: "https://www.freecodecamp.org/",
  }
]

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Tutoring Services & Helpful Resources
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

