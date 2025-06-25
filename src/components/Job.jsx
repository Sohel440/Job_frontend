import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
const Job = ({job}) => {
  const navigate = useNavigate();
  
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="font-bold text-blue-400">{Math.floor( (new Date() - new Date(job?.createdAt) )/ (1000*60*60*24)) > 0 ? Math.floor( (new Date() - new Date(job?.createdAt) )/ (1000*60*60*24)):"Today"} day's ago</p>
        <Button variant="outline" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1>{job?.company?.name}</h1>
          <p>{job?.location}</p>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
         {job?.description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          part time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          24 LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${job?._id}`)}  className="bg-gray-800 cursor-pointer">Details</Button>
        <Button className="bg-purple-900 cursor-pointer">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
