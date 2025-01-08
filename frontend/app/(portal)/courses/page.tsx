'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CISC_Courses, CoreClasses, MajorRequirements, RecommendedElectives, AllElectives, ISClasses, ISRequirements, MultimediaClasses, MultimediaRequirements, CSClasses, CSRequirements, DSClasses, DSRequirements, MultiClasses, MultiRequirements } from '../../utils/courseData';
import Course from '../../utils/courseData'

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="border-b border-gray-200 py-4">
      
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <button
          className="text-2xl font-bold text-gray-600 focus:outline-none"
          aria-label="Toggle Section"
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-gray-50 p-4 shadow-md rounded-md">
    <h2 className="text-xl font-semibold">{course.title}</h2>
    <p><strong>Code:</strong> {course.code}</p>
    <Link href={`/courses/${course.code}`}>
      <span className="text-blue-500 hover:underline cursor-pointer">View Details</span>
    </Link>
  </div>
);

const CourseListPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-16">
      {/* Header */}
        <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl pointer-events-none">
        </div>
        <div className="text-center pt-20 pb-16 mb-16">
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Course Resources</h1>
  <p className="mt-6 text-lg leading-8 text-gray-600">
    Discover resources to succeed in your CS major, minor, or electives. Clarify your questions with valuable insights and tools.
  </p>
</div>


      {/* Accordion Sections */}
      <div className="mt-8 space-y-4">
        {/* Undergraduate Courses */}
        <Accordion title="Undergraduate Courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CISC_Courses.map((course) => (
              <CourseCard key={course.code} course={course} />
            ))}
          </div>
        </Accordion>
     
        {/* Core Classes */}
        <Accordion title="Core Classes for CS Major">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CoreClasses.map((core) => (
              <div key={core.code} className="bg-gray-50 p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{core.title}</h3>
                <p><strong>Code:</strong> {core.code}</p>
                <p>{core.description}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Major Requirements */}
        <Accordion title="CS Major Requirements & Prerequisites">
          <ul className="list-disc ml-6 text-gray-700">
            {MajorRequirements.map((req) => (
              <li key={req.id}>
                <strong>{req.name}</strong>: {req.details}
              </li>
            ))}
          </ul>
        </Accordion>

        {/* Core Classes */}
        <Accordion title="Core Classes for Information Systems Major">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ISClasses.map((core) => (
              <div key={core.code} className="bg-gray-50 p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{core.title}</h3>
                <p><strong>Code:</strong> {core.code}</p>
                <p>{core.description}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Major Requirements */}
        <Accordion title="IS Major Requirements & Prerequisites">
          <ul className="list-disc ml-6 text-gray-700">
            {ISRequirements.map((req) => (
              <li key={req.id}>
                <strong>{req.name}</strong>: {req.details}
              </li>
            ))}
          </ul>
        </Accordion>

        {/* Core Classes */}
        <Accordion title="Core Classes for Multimedia Computing Major">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MultimediaClasses.map((core) => (
              <div key={core.code} className="bg-gray-50 p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{core.title}</h3>
                <p><strong>Code:</strong> {core.code}</p>
                <p>{core.description}</p>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Major Requirements */}
        <Accordion title="Multimedia Major Requirements & Prerequisites">
          <ul className="list-disc ml-6 text-gray-700">
            {MultimediaRequirements.map((req) => (
              <li key={req.id}>
                <strong>{req.name}</strong>: {req.details}
              </li>
            ))}
          </ul>
        </Accordion>

        {/* Core Classes */}
        <Accordion title="Core Classes for Computer Science Minor">
          <ul className="list-disc ml-6 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CSClasses.map((core) => (
              <div key={core.code} className="bg-gray-50 p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{core.title}</h3>
                <p><strong>Code:</strong> {core.code}</p>
                <p>{core.description}</p>
              </div>
            ))}
          </div>
          </ul>
        </Accordion>
        {/* Minor Requirements */}
        <Accordion title="Computer Science Minor Requirements">
          <ul className="list-disc ml-6 text-gray">
            {CSRequirements.map((req) => (
              <li key={req.id}>
                <strong>{req.name}</strong>: {req.details}
              </li>
            ))}
          </ul>
        </Accordion>

        {/* Core Classes */}
        <Accordion title="Core Classes for Data Science Science Minor">
          <ul className="list-disc ml-6 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DSClasses.map((core) => (
              <div key={core.code} className="bg-gray-50 p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{core.title}</h3>
                <p><strong>Code:</strong> {core.code}</p>
                <p>{core.description}</p>
              </div>
            ))}
          </div>
          </ul>
        </Accordion>
        {/* Minor Requirements */}
        <Accordion title="Data Science Minor Requirements">
          <ul className="list-disc ml-6 text-gray">
            {DSRequirements.map((req) => (
              <li key={req.id}>
                <strong>{req.name}</strong>: {req.details}
              </li>
            ))}
          </ul>
        </Accordion>
        {/* Core Classes */}
        <Accordion title="Core Classes for Multimedia Computing Minor">
          <ul className="list-disc ml-6 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MultiClasses.map((core) => (
              <div key={core.code} className="bg-gray-50 p-4 shadow-md rounded-md">
                <h3 className="text-lg font-semibold">{core.title}</h3>
                <p><strong>Code:</strong> {core.code}</p>
                <p>{core.description}</p>
              </div>
            ))}
          </div>
          </ul>
        </Accordion>
        {/* Minor Requirements */}
        <Accordion title="Multimedia Computing Minor Requirements">
          <ul className="list-disc ml-6 text-gray">
            {MultiRequirements.map((req) => (
              <li key={req.id}>
                <strong>{req.name}</strong>: {req.details}
              </li>
            ))}
          </ul>
        </Accordion>

        {/* Recommended Electives */}
        <Accordion title="Recommended CS Electives">
          <ul className="list-disc ml-6 text-gray-700">
            {RecommendedElectives.map((elective) => (
              <li key={elective.code}>
                <strong>{elective.title}</strong> - {elective.description}
              </li>
            ))}
          </ul>
        </Accordion>


        {/* All Electives */}
        <Accordion title="List of All CS Electives">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AllElectives.map((elective) => (
              <p key={elective.code} className="bg-gray-50 p-2 shadow-sm rounded-md">
                {elective.title} ({elective.code})
              </p>
            ))}
          </div>
        </Accordion>

        {/* Tutoring */}
        <Accordion title="Tutoring Resources">
          <p className="text-gray-600">
            Get help for difficult courses with tutoring services offered by the Computer Science Club and other on-campus resources. For more information, visit the Learning Center at <a href="mailto:lc@brooklyn.cuny.edu" className="text-blue-500 hover:underline">lc@brooklyn.cuny.edu</a> or contact <a href="mailto:bc.cis.club@gmail.com" className="text-blue-500 hover:underline">bc.cis.club@gmail.com</a>.
          </p>
        </Accordion>

        {/* Tips and Extra Resources */}
        <Accordion title="Tips and Extra Resources">
          <ul className="list-disc ml-6 text-gray-700">
            <li>Understand prerequisites early and plan your schedule in advance.</li>
            <li>Take electives that align with your career goals (e.g., AI, cybersecurity, software engineering).</li>
            <li>Explore online learning resources like <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">freeCodeCamp</a> or <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Khan Academy</a>.</li>
            <li>Join study groups or attend review sessions hosted by student clubs.</li>
          </ul>
        </Accordion>
        {/*Professor Ratings */}
        <Accordion title="Professor Ratings">
          <ul className="list-disc ml-6 text-gray-700">
            <li>One way to check a professor's ratings for a course is through <a href="https://www.ratemyprofessors.com/school/223" className="text-blue-500 hover:underline">Rate My Professor</a></li>
            <li>Another way to check a professor's ratings for a course is through <a href="http://websql.brooklyn.cuny.edu/facultyevaluations/index.jsp" className="text-blue-500 hover:underline">Course Evaluations</a></li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default CourseListPage;
