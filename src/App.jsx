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
  ];

  const filteredJobs = sortedJobs.filter((job) => {
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
              {/* Filters Row */}
              {/* Filters Row */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="p-3 border rounded-lg bg-white text-gray-700 cursor-pointer sm:min-w-[200px]"
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
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 p-3 border rounded-lg"
                />
              </div>

              {/* Active Jobs Dashboard Card */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Current Listings</p>
                  <h2 className="text-2xl font-bold text-blue-600">
                    {filteredJobs.length} Active Jobs
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Last Updated</p>
                  <p className="text-sm text-gray-600 font-medium">
                    {new Date().toLocaleString("en-PH", {
                      timeZone: "Asia/Manila",
                    })}
                  </p>
                </div>
              </div>

              {/* Job Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>

            <Footer />
          </>
        }
      />

      <Route path="/jobs/:id" element={<JobDetails />} />
    </Routes>
  );
}

export default App;
