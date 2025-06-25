import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import UseGetAllJobs from '../hooks/UseGetAllJobs';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/jobSlice';

// const randomJobs = [1,2,3,4,5,6,7];

const Brows = () => {
    UseGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchQuery(""));
        }
    },[])

  return (
    <div>
    <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
       <div className='flex items-center justify-center'><h1 className='font-bold text-xl my-10 text-gray-600'>Search result ({allJobs.length})</h1></div> 

        <div className='grid md:grid-cols-3 gap-4'>
        {
            allJobs.map((job)=>{
                return(
                    <Job key={job._id} job={job}/>
                )
            })
        }
        </div>

      </div>
    </div>
  )
}

export default Brows
