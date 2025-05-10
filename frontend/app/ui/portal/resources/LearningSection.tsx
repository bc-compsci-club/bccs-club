import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

const items = [
  {
    title: "Forge Software Engineering Simulations",
    link: "https://www.theforage.com/career-path/software-engineering",
    description: `The Forage’s Software Engineering career path page offers free virtual job simulations, guides,
                  and resources to help you explore software engineering roles, build real-world technical skills, and prepare 
                  for a successful entry into the field.`,
  },
  {
    title: "Developer Roadmaps",
    link: "https://roadmap.sh/",
    description: `roadmap.sh is a community-driven platform offering comprehensive, actively maintained developer
                  roadmaps, guides, and resources to help learners choose and advance their software development careers.`,
  },
  {
    title: "Open Source Computer Science Degree",
    link: "https://github.com/ForrestKnight/open-source-cs",
    description: `ForrestKnight’s open-source-cs on GitHub is a curated curriculum of free, university-level computer 
                  science courses that cover core CS topics equivalent to a degree, excluding general education.`,
  },
  {
    title: "100 Days CSS Challenge",
    link: "https://100dayscss.com/",
    description: `100dayscss.com hosts a CSS challenge that encourages daily practice through templates and 
                  submissions to help users improve their CSS skills progressively.`,
    },
  {
    title: "Code Wars - Achieve Mastery Through Practice",
    link: "https://www.codewars.com/",
    description: `Codewars is an interactive coding platform where users solve community-created coding challenges ("kata") 
                  to sharpen skills, earn ranks, and engage with a global developer community across 55+ languages.`,
  },
  {
    title: "The Odin Project ",
    link: "https://www.theodinproject.com/",
    description: `The Odin Project provides a free, self-paced web development curriculum with curated tutorials and projects,
                   supported by a community to help beginners build real-world skills and portfolios.`,
  },
  {
    title: "FreeCodeCamp",
    link: "freecodecamp.org/learn",
    description: `FreeCodeCamp offers a free, self-paced curriculum with interactive coding lessons, projects, and certifications covering 
                web development, JavaScript, Python, data analysis, and full stack development to help beginners and aspiring
                 developers build real-world programming skills`,
  }
]

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      {/* TITLE OF THE SECTION */}
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Self-Learning Materials
        </h2>

      {/* FETCHING DATA FROM const items */}
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {items.map((item) => (
    // SETTING UP TITLE
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
      {/* SETTING UP DESCRIPTION   */}
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                <span className= "text-base leading-7 font-semibold "> Description: </span>
                <span
                      className="text-base leading-7 break-words">
                      {item.description}
                </span>
                <br />
                <span className= "text-base leading-7 font-semibold "> Link: </span>
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
