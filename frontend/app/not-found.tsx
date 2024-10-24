import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-bc-red/15">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <div className="mt-10 flex justify-center items-center gap-x-6">
            <h2>Sorry, the page you are looking for does not exist.</h2>
          </div>
          <div className="mt-10 flex justify-center items-center gap-x-6">
            <Link
              href="/"
              target="_self"
              rel="noopener noreferrer"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-transparent text-bc-red border border-bc-red hover:bg-bc-yellow hover:border-transparent"
            >
              HomePage
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}