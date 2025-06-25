import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobs } from '../redux/jobSlice'


const UseGetAllJobs = () => {
    const dispatch= useDispatch();
    const {searchQuery} = useSelector(store=>store.job)
  useEffect(()=>{
    const fecthAllJobs = async () =>{
        try {
            const res = await axios.get(`${JOB_API_POINT}/get?keyword=${searchQuery}`, {withCredentials:true});
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs));
            }
        } catch (error) {
            
        }
    }
    fecthAllJobs();
    
  },[])
}

export default UseGetAllJobs
