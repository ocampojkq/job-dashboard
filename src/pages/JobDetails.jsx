import { useParams, Link } from "react-router-dom";
import useJobs from "../hooks/useJobs";

export default function JobDetails({ darkMode }) {
  const { id } = useParams();
  const jobs = useJobs();

  if (!jobs || jobs.length === 0) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center font-medium ${darkMode ? "bg-gray-900 text-slate-400" : "bg-gray-50 text-slate-500"}`}
      >
        Loading job...
      </div>
    );
  }

  const job = jobs.find((job) => String(job.id) === String(id));

  // --- 1. MODERN "JOB NOT FOUND" STATE (DARK/LIGHT COMPATIBLE) ---
  if (!job) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div
          className={`max-w-md w-full p-8 text-center rounded-2xl shadow-sm border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-100"}`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${darkMode ? "bg-amber-500/10 text-amber-400" : "bg-amber-50 text-amber-600"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h2
            className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Job Not Found
          </h2>
          <p
            className={`text-sm mb-6 ${darkMode ? "text-gray-400" : "text-slate-500"}`}
          >
            The listing you are looking for might have been removed or expired.
          </p>
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors shadow-sm group ${
              darkMode
                ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                : "bg-slate-950 text-white hover:bg-slate-800"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-slate-900"}`}
    >
      <div className="max-w-4xl mx-auto p-6">
        {/* --- 2. MODERN BACK LINK AT THE TOP --- */}
        <Link
          to="/"
          className={`inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors group ${
            darkMode
              ? "text-slate-400 hover:text-slate-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Jobs
        </Link>

        <div
          className={`rounded-xl shadow-md p-8 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
        >
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-green-500/10 text-green-400" : "bg-green-100 text-green-700"}`}
            >
              {job.salary}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-700"}`}
            >
              {job.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? "bg-purple-500/10 text-purple-400" : "bg-purple-100 text-purple-700"}`}
            >
              {job.jobType}
            </span>
          </div>

          <div className="space-y-2 mb-6">
            <p
              className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.71-5.21 3.71-9.426a8 8 0 10-16 0c0 4.216 1.764 7.347 3.71 9.426a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              {job.location}
            </p>
            <p
              className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 5a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2H4zm0 2h16v10H4V7zm2 2a1 1 0 000 2h2a1 1 0 000-2H6zm0 4a1 1 0 000 2h2a1 1 0 000-2H6zm4-4a1 1 0 000 2h6a1 1 0 000-2h-6zm0 4a1 1 0 000 2h4a1 1 0 000-2h-4z" />
              </svg>
              {job.company}
            </p>
            <p
              className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clipRule="evenodd"
                />
              </svg>
              {job.posted}
            </p>
          </div>

          <div
            className={`border-t pt-6 ${darkMode ? "border-gray-700" : "border-slate-100"}`}
          >
            <h2 className="text-xl font-semibold mb-3">Job Description</h2>
            <p
              className={`leading-relaxed whitespace-pre-line ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {job.description
                ? job.description
                    .replace(
                      /\[\/jobseekers\/job\/[^\]]+\]See[\s\n]+More\s*\[\/jobseekers\/job\/\d+\]/g,
                      "",
                    )
                    .trim()
                : "No description provided."}
            </p>
          </div>

          {/* FIXED: Restored opening tag <a */}
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3H13.5a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
