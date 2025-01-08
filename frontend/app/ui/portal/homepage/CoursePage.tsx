// pages/courses/index.tsx
'use client'; // Ensure client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation';
import { CISC_Courses, Course } from '../../../utils/courseData'; // Adjust path if necessary

const CoursePage = () => {
  const router = useRouter();

  const handleCourseClick = (courseCode: string) => {
    console.log(`Clicked ${courseCode}`);
    router.push(`/courses/${courseCode}`); // Navigate to dynamic course details page
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Undergrad CISC Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CISC_Courses.map((course: Course) => (
          <button 
            key={course.id} 
            className="bg-white shadow-md rounded-lg p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleCourseClick(course.code)} // Trigger route change
          >
            <h2 className="text-lg font-semibold">{course.code}: {course.title}</h2>
            <p className="text-sm text-gray-700">
              Credits: {course.credits} | Hours: {course.hours}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
