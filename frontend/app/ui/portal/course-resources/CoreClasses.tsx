import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { title } from 'process';
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

const items = [
  {
    title: "Computer Science Major",
    coreCourses: [
      "CISC 1115 Introduction to Programming with Java",
      "CISC 2210 Introduction to Discrete Structures",
      "CISC 2820W Computer Ethics",
      "CISC 3115 Introduction to Modern Programming Techniques", 
      "CISC 3130 Data Structures", 
      "CISC 3140 Design and Implementation of Large-Scale Applications",
      "CISC 3142 Programming Paradigms in C++", 
      "CISC 3220 Analysis of Algorithms or CISC 3230 Theoretical Computer Science",
      "CISC 3310 Computer Architecture",
      "CISC 3320 Operating Systems",
      "CISC 4900 Independent and Group Projects I or CISC 5001 Independent Study and Research I", 
      "Three Advanced Electives Between CISC 3000 and CISC 4899",
    ],
  },
  {
    title: "Information Systems Major",
    coreCourses: [
      "CISC 1115 Introduction to Programming with Java",
      "CISC 2820W Computer Ethics",
      "CISC 3115 Introduction to Modern Programming Techniques", 
      "CISC 3130 Data Structures", 
      "CISC 3810 Database Systems",
      "CISC 4900 Independent and Group Projects I or CISC 5001 Independent Study and Research I", 
      "CISC 2531 Operations Management or BUSN 3430 Operations Management", 
      "CISC 1590 Management Information Systems or BUSN 3420 Management Information Systems", 
      "CISC 1530/BUSN 3120 E-Commerce or CISC 2532/BUSN 3432 IS Project Management",
      "BUSN 2200 Microeconomics or ECON 2200 Microceconomics", 
      "BUSN 2100 Macroeconomics or ECON 2100 Macroeconomics",
      "BUSN 3400 Stats or ECON 3400 Stats", 
      "BUSN 3200 Intro to Management", 
      "ACT. 2001 Accounting", 
      "FINC 3310 Finance Management", 
    ],
  },
  {
    title: "Multimedia Computing Major",
    coreCourses: [
      "CISC 1115 Introduction to Programming with Java",
      "CISC 3115 Introduction to Modern Techniques",
      "CISC 3130 Data Structures",
      "CISC 3220 Analysis of Algorithms",
      "CISC 3620 Computer Graphics",
      "CISC 3630 Multimedia Computing",
      "CISC 4900 Independent and Group Projects I or CISC 5001 Independent Study and Research I",
    ],
  },
  {
    title: "Computer Science Minor", 
    coreCourses: [
      "At least one of CISC 3130 or CISC 3310",
      "Other CISC courses (2000-4899) to reach 12 credits total"
    ],
  },
  {
    title: "Cognitive Science Minor", 
    coreCourses: [
      "PHIL 3422 Philosophical Issues in Cognitive Science",
      "CISC 1115 Introduction to Programming Using Java",
      "PSYC 1000 Introductory Psychology",
      "One course from Group A (various PHIL classes)",
      "One course from Group B (various CISC, PHIL, and PSYC classes)"
    ],
  },
  {
    title: "Multimedia Computing Minor",
    coreCourses: [
      "CISC 1115 Introduction to Programming with Java",
      "CISC 1600 Introduction to Multimedia Computing",
      "CISC 3115 Introduction to Modern Techniques",
      "CISC 3130 Data Structures",
      "CISC 3620 Computer Graphics",
      "CISC 3630 Multimedia Computing"
    ],
  },
  {
    title: "Data Science Minor", 
    coreCourses: [
      "CISC 3225 Data Science",
      "CISC 3440 Machine Learning",
      "MATH 4531 Applied Intermediate Statistics",
      "One course from: MATH 2001, MATH 3501, CISC 2210, or MATH 2501"
    ],
  }
]

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Core Courses For CS & CS Related Majors and Minors
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
                <p className="text-base font-semibold leading-7 text-gray-900 mb-2">
                  Core Courses:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {item.coreCourses.map((course, index) => (
                    <li key={index} className="text-base leading-7 text-gray-700">
                      {course}
                    </li>
                  ))}
                </ul>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}