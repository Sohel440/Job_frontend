import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../../components/ui/table";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { setSearchCompanyByText } from "../../redux/companySlice";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const { singleCompany } = useSelector((store) => store.company);
  const navigate = useNavigate(); // Hook for navigation

  // Handle case where companies is undefined or empty
  // filter 
  const [filterCompany , setFilterCompany] = useState(companies);
  
  useEffect(()=>{
    const filteredCompany = companies.length >=0 && companies.filter((company)=>{
      if(!searchCompanyByText){
        return true
      }
     return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
    // console.log(filteredCompany);
    
  },[companies, searchCompanyByText])

  return (
    <div>
      <Table>
        <TableCaption>List of your recently registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.map((company) => (
            <TableRow key={company._id}> {/* Use unique key for each row */}
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo || "https://avatars.githubusercontent.com/u/109268326?v=4"} />
                  <AvatarFallback>{company.name?.[0] || "C"}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{company.name || "Unnamed Company"}</TableCell>
              <TableCell>{company.createdAt ? new Date(company.createdAt).toLocaleDateString() : "N/A"}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                      onClick={() => navigate(`/admin/companies/${company._id}`)} // Enable navigation
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;