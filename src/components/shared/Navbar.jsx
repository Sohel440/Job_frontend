import React from "react";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_POINT } from "../../utils/constant";
import { setUser } from "../../redux/authSlice";
const Navbar = () => {
  // const user = true;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nn  = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="bg-white not-last:">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold " >
            <Link to= "/">
            Get<span className="text-purple-500">Hire!</span>
            </Link>
            
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user?.role == "recruiter" ? (
              <>
                <li className="text-gray-600">
                  {" "}
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="text-gray-600">
                  <Link to="/admin/jobs">jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-gray-600">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-600">
                  <Link to="/jobs">jobs</Link>
                </li>
                <li className="text-gray-600">
                  {" "}
                  <Link to="/brows">Browse</Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className=" flex gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/signup">Signup</Link>
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Button variant="outline">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col my-2">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                     
                      {
                        user && user?.role == 'student' ?
                        (<>
                         <User2 />
                      <Button className="text-gray-600" variant="link">
                        <Link to="/profile"> View Profile</Link>
                        {">"}
                      </Button> 
                        </>):(
                          <>
                          </>
                        )

                      }
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button
                        onClick={logoutHandler}
                        className="text-gray-600"
                        variant="outline"
                      >
                        Log out
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
