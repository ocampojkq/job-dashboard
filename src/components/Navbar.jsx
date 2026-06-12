import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-blue-600">VA Job Hub</h1>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/sspaniardd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebookSquare className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/ocampojkq/job-dashboard"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithubSquare className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
}
