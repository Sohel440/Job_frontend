import React from "react";
import {Badge} from "../components/ui/badge"
const LatestJobCard = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <div>
         <h1 className="font-medium text-lg">{job?.company?.name}</h1>
      <p className="text-sm text-gray-500">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">
            {job?.title}
        </h1>
        <p className="text-sm text-gray-600">{job?.description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4"> 
        <Badge className={"text-blue-600 font-bold bg-gray-100 m-1"}> {job?.position} position</Badge>
        <Badge className={"text-blue-600 font-bold bg-gray-100 m-1"}> {job?.jobType}</Badge>
        <Badge className={"text-blue-600 font-bold bg-gray-100 m-1"}>{job?.salary} LPA</Badge>
      </div>
     
    </div>
  );
};

export default LatestJobCard;
