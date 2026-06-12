import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Job Title */}
      <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
        {job.title}
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
        <p className="text-gray-500">📍 {job.location}</p>

        <p className="font-medium text-gray-700">🏢 {job.company}</p>

        <p className="text-sm text-gray-500">⏰ {job.posted}</p>
      </div>

      {/* Job Type & Experience */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
          {job.jobType}
        </span>

        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
          {job.experience}
        </span>
      </div>

      {/* Button stays at bottom */}
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
