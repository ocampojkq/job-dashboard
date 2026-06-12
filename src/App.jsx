import { useState } from "react";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import useJobs from "./hooks/useJobs";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import Footer from "./components/Footer";

function App() {
  const jobs = useJobs();
  const sortedJobs = [...jobs].reverse();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const jobsPerPage = 20;

  if (jobs.length === 0) {
    return <div className="p-10 text-center text-xl">Loading jobs...</div>;
  }

  const categories = [
    "All",
    "AI Automation",
    "Admin",
    "Amazon",
    "Amazon FBA",
    "Amazon PPC",
    "Bookkeeping",
    "Brand Manager",
    "Chat Support",
    "Customer Service",
    "Data Entry",
    "Dropshipping",
    "E-commerce",
    "Email Marketing",
    "Email Support",
    "Executive Assistant",
    "Facebook Ads",
    "Fulfillment",
    "Graphic Design",
    "Inventory Management",
    "Marketing",
    "Operations Coordinator",
    "Personal Assistant",
    "Product Listing",
    "Product Research",
    "SEO",
    "Seller Central",
    "Shopify",
    "Social Media",
    "Social Media Manager",
    "Support Specialist",
    "Virtual Assistant",
    "WooCommerce",
    "Real State",
  ];

  const filteredJobs = sortedJobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage,
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                <div className="max-w-6xl mx-auto p-6">
                  {/* Filters Row */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <select
                      value={selectedCategory}
                      onChange={handleCategory}
                      className={`p-3 border rounded-lg cursor-pointer sm:min-w-[200px] ${
                        darkMode
                          ? "bg-gray-800 text-white border-gray-600"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={search}
                      onChange={handleSearch}
                      className={`flex-1 p-3 border rounded-lg ${
                        darkMode
                          ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                          : "bg-white"
                      }`}
                    />
                  </div>

                  {/* Active Jobs Dashboard Card */}
                  <div
                    className={`rounded-xl shadow-md p-4 mb-6 border flex items-center justify-between ${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div>
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        Current Listings
                      </p>
                      <h2 className="text-2xl font-bold text-blue-500">
                        {filteredJobs.length} Active Jobs
                      </h2>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                      >
                        Last Updated
                      </p>
                      <p
                        className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {new Date().toLocaleString("en-PH", {
                          timeZone: "Asia/Manila",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Job Cards */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {paginatedJobs.map((job) => (
                      <JobCard key={job.id} job={job} darkMode={darkMode} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-10">
                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.max(p - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed ${
                          darkMode
                            ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        ← Prev
                      </button>

                      <span
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        Page {currentPage} of {totalPages}
                      </span>

                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg border disabled:opacity-40 disabled:cursor-not-allowed ${
                          darkMode
                            ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </div>

                <Footer darkMode={darkMode} />

                {/* Scroll to Top */}
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </>
            }
          />

          <Route
            path="/jobs/:id"
            element={<JobDetails darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
