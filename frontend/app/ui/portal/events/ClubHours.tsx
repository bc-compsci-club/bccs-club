export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
      <div className="overflow-hidden shadow-lg rounded-lg">
        <div className="px-4 py-6 sm:px-6">
          <h3 className="text-xl font-semibold leading-7 text-gray-900">Club Hours</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            We meet twice a week during the Fall 2024
          </p>
        </div>

        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Time</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex">
                  <span className="w-24">Tuesday</span>
                  <span>01:00 PM - 03:30 PM</span>
                </div>
                <div className="flex">
                  <span className="w-24">Wednesday</span>
                  <span>12:00 PM - 02:00 PM</span>
                </div>
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Location</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Room 0317, Ingersoll Hall basement
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">About</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <p>Our Club Hours are divided into two exciting sections:</p>
                <p className="font-medium mt-1">Section 1: Coding & Collaboration</p>
                <p>This is where we dive into technical activities. Whether you&apos;re looking to contribute to our club&apos;s open-source projects and gain valuable team experience for your resume, or want to tackle Leetcode problems together, this section is all about building your skills and working as a team.</p>
                <p className="font-medium mt-1">Section 2: Fun & Friendship</p>
                <p>In this section, we focus on connecting with each other. You can share your experiences, discuss personal side projects, or just enjoy casual conversations and make new friends within the tech community.</p>
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}
