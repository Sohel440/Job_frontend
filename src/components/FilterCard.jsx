import React, { useEffect, useState } from "react";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "kolkata", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k - 1lakh", "1lakh to 5Lakh"],
  },
];
const FilterCard = () => {
  const [selectVlaue, setSelectValue] = useState("");
  const dispatch = useDispatch();
  const changeHandle = (value) => {
    setSelectValue(value);
  };

  useEffect(() => {
     dispatch(setSearchQuery(selectVlaue));
  }, [selectVlaue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg text-[#070101ad]">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectVlaue} onValueChange={changeHandle}>
        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg text-gray-700">
              {data.filterType}
            </h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );

            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
