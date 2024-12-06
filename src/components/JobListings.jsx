/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

export default function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "api/jobs?_limit=3" : "api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching jobs data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  });

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
