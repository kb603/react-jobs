/* eslint-disable react/prop-types */

import jobs from "../jobs.json";
import JobListing from "./JobListing";

export default function JobListings({ isHome = false }) {
  const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobListings.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
