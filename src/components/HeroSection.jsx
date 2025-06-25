import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const serchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/brows");
  };
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 ">
        <h2 className="md: px-4 py-2 rounded-full font-bold text-red-300 bg-gray-100">
          No. 1 Job hunt Website
        </h2>
        <h1 className="text-3xl p-4 md:text-4xl font-bold text-gray-800">
          Search,Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>{" "}
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
          sunt fuga! Voluptatum repellendus at quasi.
        </p>
        <div className="flex  w-[40%] shadow-lg border border-gray-200 rounded-2xl items-center gap-4 mx-auto">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your dream job!"
            className="outline-none  border-none w-full p-2.5"
          />
          <Button
            onClick={serchJobHandler}
            className="rounded py-3 overflow-hidden bg-[#6A38C2]"
          >
            {" "}
            <Search className="w-6 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
