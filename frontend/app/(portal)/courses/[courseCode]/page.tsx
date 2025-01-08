'use client';

import { useParams } from 'next/navigation';
import { CISC_Courses } from '../../../utils/courseData';

const CourseDetailPage = () => {
  const { courseCode } = useParams();

  const course = CISC_Courses.find((c) => c.code === courseCode);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-16">
      <h1 className="text-3xl font-bold mb-4">{course.code}: {course.title}</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-semibold">Course Details</h2>
        <p className="mt-2">{course.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p><strong>Credits:</strong> {course.credits}</p>
          <p><strong>Hours:</strong> {course.hours}</p>
          <p><strong>Prerequisite:</strong> {course.prerequisite}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
