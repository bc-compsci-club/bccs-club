
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BsPlus, BsDash } from 'react-icons/bs';
import { courseResources } from '@/utils/courseResources';
import HeroSection from "@/app/ui/course-resources/HeroSection";

export default function Page() {
  return (
	<main>
	  <HeroSection />
  <div className="mx-auto max-w-4xl px-6 lg:px-8 pt-8 pb-8">
	<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mb-2 mt-6">
			Course Resources
		</h2>
		<dl className="space-y-6 divide-y divide-gray-900/10">
		  {/* Core Classes */}
		  <Disclosure as="div" className="pt-6">
			<dt>
			  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
				<span className="text-base font-semibold leading-7">CS Major Core Classes</span>
				<span className="ml-6 flex h-7 items-center">
				  <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
				  <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
				</span>
			  </DisclosureButton>
			</dt>
			<DisclosurePanel as="dd" className="mt-2 pr-12">
			  <ul className="list-disc ml-6 text-gray-800">
				{courseResources.csMajorCore.map((c, i) => (
				  <li key={c + i}>{c}</li>
				))}
			  </ul>
			</DisclosurePanel>
		  </Disclosure>
		  {/* Requirements */}
		  <Disclosure as="div" className="pt-6">
			<dt>
			  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
				<span className="text-base font-semibold leading-7">CS Major Requirements & Prerequisites</span>
				<span className="ml-6 flex h-7 items-center">
				  <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
				  <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
				</span>
			  </DisclosureButton>
			</dt>
			<DisclosurePanel as="dd" className="mt-2 pr-12">
			  <div className="mb-2">
				<strong>Prerequisites:</strong>
				<ul className="list-disc ml-6">
				  {courseResources.csMajorRequirements.prerequisites.map((p, i) => (
					<li key={p + i}>{p}</li>
				  ))}
				</ul>
			  </div>
			  <div>
				<strong>Core:</strong>
				<ul className="list-disc ml-6">
				  {courseResources.csMajorRequirements.core.map((c, i) => (
					<li key={c + i}>{c}</li>
				  ))}
				</ul>
			  </div>
			</DisclosurePanel>
		  </Disclosure>
		  {/* Degree Map */}
		  <Disclosure as="div" className="pt-6">
			<dt>
			  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
				<span className="text-base font-semibold leading-7">CS Four-Year Degree Map</span>
				<span className="ml-6 flex h-7 items-center">
				  <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
				  <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
				</span>
			  </DisclosureButton>
			</dt>
			<DisclosurePanel as="dd" className="mt-2 pr-12">
			  {courseResources.csFourYearDegreeMap.years.map((y) => (
				<div key={y.year} className="mb-4">
				  <div className="font-semibold">Year {y.year}</div>
				  <div className="ml-4">
					<div>
					  <strong>Fall:</strong>
					  <ul className="list-disc ml-6">
						{y.fall.map((c, idx) => (
						  <li key={c + '-' + idx}>{c}</li>
						))}
					  </ul>
					</div>
					<div>
					  <strong>Spring:</strong>
					  <ul className="list-disc ml-6">
						{y.spring.map((c, idx) => (
						  <li key={c + '-' + idx}>{c}</li>
						))}
					  </ul>
					</div>
				  </div>
				</div>
			  ))}
			</DisclosurePanel>
		  </Disclosure>
		  {/* Data Science Minor */}
		  <Disclosure as="div" className="pt-6">
			<dt>
			  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
				<span className="text-base font-semibold leading-7">Data Science Minor Requirements</span>
				<span className="ml-6 flex h-7 items-center">
				  <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
				  <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
				</span>
			  </DisclosureButton>
			</dt>
			<DisclosurePanel as="dd" className="mt-2 pr-12">
			  <div className="mb-2">
				<strong>Credits:</strong> {courseResources.dataScienceMinorRequirements.credits}
			  </div>
			  <div className="mb-2">
				<strong>Required Courses:</strong>
				<ul className="list-disc ml-6">
				  {courseResources.dataScienceMinorRequirements.required.map((c, i) => (
					<li key={c + i}>{c}</li>
				  ))}
				</ul>
			  </div>
			  <div className="mb-2">
				<strong>Elective:</strong> {courseResources.dataScienceMinorRequirements.elective}
			  </div>
			  <div className="mb-2">
				<strong>Prerequisites:</strong>
				<ul className="list-disc ml-6">
				  {courseResources.dataScienceMinorRequirements.prerequisites.map((p, i) => (
					<li key={p + i}>{p}</li>
				  ))}
				</ul>
			  </div>
			  <div className="mb-2">
				<strong>Notes:</strong>
				<ul className="list-disc ml-6">
				  {courseResources.dataScienceMinorRequirements.notes.map((n, i) => (
					<li key={n + i}>{n}</li>
				  ))}
				</ul>
			  </div>
			</DisclosurePanel>
		  </Disclosure>
		  {/* Electives */}
		  <Disclosure as="div" className="pt-6">
			<dt>
			  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
				<span className="text-base font-semibold leading-7">Recommended Electives</span>
				<span className="ml-6 flex h-7 items-center">
				  <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
				  <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
				</span>
			  </DisclosureButton>
			</dt>
			<DisclosurePanel as="dd" className="mt-2 pr-12">
			  <ul className="list-disc ml-6 text-gray-800">
				{courseResources.recommendedElectives.map((e, i) => (
				  <li key={e + i}>{e}</li>
				))}
			  </ul>
			</DisclosurePanel>
		  </Disclosure>
		  {/* Tips */}
		  <Disclosure as="div" className="pt-6">
			<dt>
			  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
				<span className="text-base font-semibold leading-7">Tips for Success</span>
				<span className="ml-6 flex h-7 items-center">
				  <BsPlus aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
				  <BsDash aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
				</span>
			  </DisclosureButton>
			</dt>
			<DisclosurePanel as="dd" className="mt-2 pr-12">
			  <ul className="list-disc ml-6 text-gray-800">
				<li>Meet with your advisor regularly to stay on track.</li>
				<li>Use DegreeWorks and the prerequisite flowchart to plan ahead.</li>
				<li>Get involved in clubs, research, and internships for hands-on experience.</li>
				<li>Don’t be afraid to ask for help—professors and peers are valuable resources!</li>
			  </ul>
			</DisclosurePanel>
		  </Disclosure>
		</dl>
	  </div>
	</main>
  );
}