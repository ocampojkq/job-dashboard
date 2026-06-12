import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const isNew = () => {
    const postedText = job.posted.replace("Posted on ", "");
    const postedDate = new Date(postedText);
    const now = new Date();
    const diffHours = (now - postedDate) / (1000 * 60 * 60);
    return diffHours <= 24;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-800 line-clamp-2 flex items-center gap-2">
        {job.title}
        {isNew() && (
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold animate-pulse shrink-0">
            NEW
          </span>
        )}
      </h2>

      {/* Salary & Category */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {job.salary}
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {job.category}
        </span>
      </div>

      {/* Company Info */}
      <div className="mt-4 space-y-2">
        <p className="text-gray-500 flex items-center gap-2">
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
        <p className="text-gray-700 font-medium flex items-center gap-2">
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
        <p className="text-sm text-gray-500 flex items-center gap-2">
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

      {/* Job Type */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
          {job.jobType}
        </span>
      </div>

      {/* Button */}
      <div className="mt-auto pt-6">
        <Link
          to={`/jobs/${job.id}`}
          className="inline-block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
