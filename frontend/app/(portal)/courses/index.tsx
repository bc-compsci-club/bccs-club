// app/courses/page.tsx
import Link from 'next/link';
import { CISC_Courses } from '../../utils/courseData';

const CourseListPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">Course List</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CISC_Courses.map((course) => (
          <div key={course.code} className="p-4 shadow-md rounded-lg"> {/* Removed bg-white */}
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p><strong>Code:</strong> {course.code}</p>
            
            {/* Link to the course detail page */}
            <Link href={`/courses/${encodeURIComponent(course.code)}`}>
              <a className="text-blue-500 hover:underline">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListPage;
