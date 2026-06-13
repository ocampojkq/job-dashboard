import { FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, onLogoClick }) {
  return (
    <nav
      className={`shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={onLogoClick}>
          <h1 className="text-2xl font-bold text-blue-500 hover:text-blue-600 transition">
            VA Job Hub
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${darkMode ? "bg-gray-700 text-yellow-400 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>
          <a
            href="https://olj-top30-kit.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-blue-500 transition"
          >
            Top 30 Jobs
          </a>
          <a
            href="https://www.facebook.com/sspaniardd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookSquare className="w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  );
}
