import { useState } from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import { jobs } from "./data/jobs";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Shopify", "Customer Support", "Video Editing"];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />

            <div className="max-w-6xl mx-auto p-6">
              {/* Category Buttons */}
              <div className="flex gap-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 border rounded-lg mb-6"
              />

              {/* Job Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </>
        }
      />

      <Route path="/jobs/:id" element={<JobDetails />} />
    </Routes>
  );
}

export default App;
