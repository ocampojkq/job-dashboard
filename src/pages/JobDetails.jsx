import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";

export default function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Job not found</h1>
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

          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            {job.experience}
          </span>
        </div>

        <div className="space-y-2 mb-6 text-gray-600">
          <p>📍 {job.location}</p>
          <p>🏢 {job.company}</p>
          <p>⏰ {job.posted}</p>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Job Description</h2>

          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <a
          href={job.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
