import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>

      <div className="flex gap-2 mt-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {job.salary}
        </span>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {job.category}
        </span>
      </div>

      <p className="text-gray-500 mt-3">📍 {job.location}</p>
      <p className="font-medium text-gray-700 mt-3">{job.company}</p>

      <p className="text-sm text-gray-500">⏰ {job.posted}</p>

      <div className="flex gap-2 mt-3">
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
          {job.jobType}
        </span>

        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
          {job.experience}
        </span>
      </div>
      <Link
        to={`/jobs/${job.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

// git add .
// git commit -m "Finished job details page"
// git push
