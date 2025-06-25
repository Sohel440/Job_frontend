import axios from 'axios'
import React, { useEffect } from 'react'
import { COMPANY_API_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setAllJobs } from '../redux/jobSlice'
import { setSingleCompany } from '../redux/companySlice'

const UseGetCompanyById = (companyId) => {
    const dispatch= useDispatch();

  useEffect(()=>{
    const fecthSingleCompany = async () =>{
        try {
            const res = await axios.get(`${COMPANY_API_POINT}/get/${companyId}`, {withCredentials:true});
            if(res.data.success){
                dispatch(setSingleCompany(res.data.company));
            }
        } catch (error) {
            
        }
    }
    fecthSingleCompany();
    
  },[companyId, dispatch])
}

export default UseGetCompanyById
