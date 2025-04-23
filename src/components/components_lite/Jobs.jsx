import React, { useContext, useState } from "react";
import JobCard from "./JobCard";
import { GlobalContext } from "../../context/globalcontext";
import { Search } from "lucide-react";

const Jobs = () => {
  const { jobs, searchQuery } = useContext(GlobalContext);

  const filteredJobs = searchQuery.trim() === "" 
    ? jobs 
    : jobs.filter(job => 
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      {jobs.length > 0 ? (
        <div className="p-4">
          {filteredJobs.length > 0 ? (
            <div className="flex flex-wrap gap-2 gap-y-5">
              {filteredJobs.map((job, index) => (
                <JobCard
                  key={index}
                  companyLogo={job.companyName[0]}
                  companyName={job.companyName}
                  jobTitle={job.jobTitle}
                  jobGeo={job.jobGeo}
                  jobType={job.jobType}
                  applyLink={job.url}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <Search className="h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
              <p className="text-gray-500 text-center">
                We couldn't find any jobs matching "{searchQuery}".<br />
                Try adjusting your search or check back later for new opportunities.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      )}
    </>
  );
};

export default Jobs;
