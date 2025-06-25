import React from "react";
import LatestJobCard from "./LatestJobCard";
import { useSelector } from "react-redux";
const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJob = () => {
  const {allJobs} = useSelector(store =>store.job)
  return (
    <div className="max-w-7xl mx-auto my-20 p-5">
      <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold  ">
        <span className="text-[#6A38C2]">Latest & Top</span>Job opening
      </h1>
      </div>
      
      {/* // multiple job card display here  */}
      <div className="grid md:grid-cols-3 gap-4 my-5">
        { allJobs.length != 0 ? allJobs?.slice(0,6).map((job) => (
          <LatestJobCard key={job._id} job = {job}  />
        )): <span>Not found</span>}
      </div>
    </div>
  );
};

export default LatestJob;
