import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'
const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  const {allJobs , searchQuery} = useSelector(store => store.job);
// const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);


    useEffect(() => {
        if (searchQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchQuery]);

  return (
    <div>
      <Navbar />
      {/* fiter page */}
      <div  className='max-w-7xl mx-auto mt-5'>
        <div className="flex gap-5">
            <div className="w-[20%]">
                 <FilterCard />
            </div>
            {
                filterJobs.length<=0 ? <span>Job not found</span> : (
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className="grid md:grid-cols-3 gap-4">
                            {
                                filterJobs.map((job)=>(
                                    <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                    >
                                        <Job key={job._id} job ={job}/>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                )
            }       
        </div>
      </div>
    </div>
  );
};

export default Jobs;
