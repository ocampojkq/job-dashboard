import { useParams, Link } from "react-router-dom";
import useJobs from "../hooks/useJobs";

export default function JobDetails() {
  const { id } = useParams();
  const jobs = useJobs();

  // 1. Handle initial loading state
  if (!jobs || jobs.length === 0) {
    return <div className="p-10 text-center">Loading job...</div>;
  }

  const job = jobs.find((job) => String(job.id) === String(id));

  // 2. Handle case where ID doesn't match any job
  if (!job) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Jobs
      </Link>

      <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
        <h1 className="text-4xl font-bold mb-4">{job.title}</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {job.salary}
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {job.category}
          </span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
            {job.jobType}
          </span>
        </div>

        <div className="space-y-2 mb-6 text-gray-600">
          <p className="flex items-center gap-2">
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
          <p className="flex items-center gap-2">
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
          <p className="flex items-center gap-2">
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

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
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

        {/* FIXED: Restored missing <a tag definition */}
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/xl"
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
  );
}
