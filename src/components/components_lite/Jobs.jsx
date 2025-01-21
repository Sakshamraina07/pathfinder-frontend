import React, { useState } from "react";
import JobCard  from "./JobCard";

const Jobs = () => {
  // Sample job data
  const [sampleJobs, setSampleJobs] = useState([
    {
      title: "Frontend Developer",
      description: "Proficient in React, JavaScript, and CSS.",
      location: "Remote",
    },
    {
      title: "Backend Developer",
      description: "Expertise in Node.js, MongoDB, and REST APIs.",
      location: "Austin, TX",
    },
    {
      title: "Data Scientist",
      description: "Skilled in Python, TensorFlow, and Machine Learning.",
      location: "New York, NY",
    },
  ]);

  return (
    /*<div className="jobs-page">
      <h1 className="text-2xl font-bold text-center my-4">Job Listings</h1>
      <p className="text-center text-gray-600 mb-6">Browse the latest job opportunities!</p>
      
      <div className="job-listings grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleJobs.map((job, index) => (
          <div
            key={index}
            className="job-card border rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Location:</strong> {job.location}
            </p>
          </div>
        ))}
      </div>
    </div>*/

    <div className="p-4">
      <JobCard
        companyName="TechCorp"
        companyLogo="/placeholder.svg?height=64&width=64"
        jobTitle="Senior Frontend Developer"
        location="San Francisco, CA"
        jobType="Full-time"
        skills={["React", "TypeScript", "Next.js", "Tailwind CSS"]}
        applyLink="https://example.com/apply"
      />
    </div>


  );
};

export default Jobs;



// import React from "react";
// import Navbar from "./Navbar";
// import FilterCard from "./Filtercard";
// import Job1 from "./Job1";
// import { useSelector } from "react-redux";

// // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

// const Jobs = () => {
//   const { allJobs } = useSelector((store) => store.job);

//   return (
//     <div>
//       <Navbar />

//       <div className="max-w-7xl mx-auto mt-5 ">
//         <div className="flex gap-5">
//           <div className="w-20% ">
//             <FilterCard />
//           </div>
//           {allJobs.length <= 0 ? (
//             <span className="">Job not found</span>
//           ) : (
//             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
//               <div className="grid grid-cols-3 gap-4">
//                 {allJobs.map((job) => (
//                   <div key={job.id}>
//                     <Job1 job={job} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;