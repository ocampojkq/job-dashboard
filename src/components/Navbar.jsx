import { FaBriefcase } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600 text-2xl" />

          <h1 className="text-2xl font-bold text-blue-600">VA Job Hub</h1>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#" className="hover:text-blue-600">
            Categories
          </a>

          <a
            href="https://github.com/ocampojkq/job-dashboard"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
