import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { title } from 'process';
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import computerScienceMinorImage from '../../portal/course-resources/images/computer-science-minor.png';
import cognitiveScienceMinorImage from '../../portal/course-resources/images/cognitive-science-minor.png';
import multimediaComputingMinorImage from '../../portal/course-resources/images/multimedia-computing-minor.png';
import dataScienceMinorImage from '../../portal/course-resources/images/data-science-minor.png';

const items = [
  {
    title: "Computer Science Major",
    link: "https://brooklyncisdept.github.io/brochures/assets/img/Prerequisite_Diagram_CS_Java.jpg",
  },
  {
    title: "Information Systems Major",
    link: "https://brooklyncisdept.github.io/brochures/assets/img/Prerequisite_Diagram_IS_Java.jpg",
  },
  {
    title: "Multimedia Computing Major",
    link: "https://brooklyncisdept.github.io/brochures/assets/img/Prerequisite_Diagram_MMC_Java.jpg",
  },
  {
    title: "Computer Science Minor", 
    link: computerScienceMinorImage,
  },
  {
    title: "Cognitive Science Minor", 
    link: cognitiveScienceMinorImage
  },
  {
    title: "Multimedia Computing Minor",
    link: multimediaComputingMinorImage
  },
  {
    title: "Data Science Minor", 
    link: dataScienceMinorImage
  }
]

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Prerequisite Chart For CS & CS Related Majors & Minors
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {items.map((item) => {
            // Ensure link is always a string
            const link =
              typeof item.link === 'string'
                ? item.link
                : (item.link as { src: string }).src;

            return (
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
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base leading-7 text-bc-red hover:text-bc-yellow break-words"
                  >
                    {link}
                  </a>
                </DisclosurePanel>
              </Disclosure>
            );
          })}
        </dl>
      </div>
    </div>
  )
}

