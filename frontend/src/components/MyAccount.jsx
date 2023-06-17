import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userLogoutAsync } from "../store/user";
import { AiTwotoneStar } from "react-icons/ai";
import { RiGlobeFill } from "react-icons/ri";
import { TbGlobe } from "react-icons/tb";
import { GiGlobe } from "react-icons/gi";
import ProfileForm from "./ProfileForm";

export default function MyAccount() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  //to redirect user after login
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState("");

  const logoutHandler = () => {
    // axios
    //   .get(`users/logout`)
    //   .then((res) => {
    //     // removeCookie("token");
    //     document.cookie = `token=${""}; expires=${new Date().getTime() - 1000}`;
    //     dispatch(userActions.userData(null));
    //     // dispatch(userActions.logout());
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // //   });
    // document.cookie = `token=${""}; expires=${new Date().getTime() - 1000}`;
    dispatch(userLogoutAsync());
    navigate("/");
  };

  const changeProfileHandler = () => {};

  return (
    <div className="flex gap-20 mt-10 justify-center mx-80">
      <div className="">
        <div className="shadow-2xl shadow-black-300 h-64 w-96  rounded-2xl">
          <div className="grid grid-cols-3 ">
            <div className="flex col-span-2 bg-lightblue p-8 justify-center">
              <div>
                <label className="relative">
                  <input
                    className="absolute justify-center w-full h-full opacity-0"
                    type="file"
                    accept="img/*"
                    name="profile"
                    onChange={changeProfileHandler}
                  />

                  <img
                    className="h-36 w-36 object-cover rounded-full"
                    src="https://w7.pngwing.com/pngs/49/613/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-dark-black.png"
                    alt="place"
                  />
                </label>
                <h2 className="flex font-bold mt-2 text-3xl justify-center">
                  {user?.name.split(" ")[0]}
                </h2>

                <p></p>
              </div>
            </div>
            <div className="col-span-1 bg-lightblue ">
              <div className="flex-col items-center my-4 mt-14">
                <div className="">
                  <p className="text-2xl font-semibold">278</p>
                  <p className="text-xs">Reviews</p>
                  <hr className="my-4" />
                </div>
                <div className="">
                  <div className="flex">
                    <p className=" text-2xl font-semibold">4.72</p>
                    <AiTwotoneStar className="ml-2 mt-2" />
                  </div>
                  <p className="text-xs">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold">About me</div>
        <span className="my-6 flex items-center gap-2 text-lg text-gray-700">
          <GiGlobe className="h-6 w-6 " />
          Lives in {user?.address}Surat, Gujrat
        </span>
        <div className="flex justify-around mt-2 mr-32 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          repellendus voluptate earum sapiente est? Similique, eos. Aliquam
          velit perspiciatis voluptatem provident consequuntur nemo dicta eaque
          labore cum inventore aperiam obcaecati aspernatur reiciendis,
          distinctio officia, modi excepturi reprehenderit vel tenetur omnis aut
          doloribus sapiente. Necessitatibus, aperiam.
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-2xl font-bold mt-6">Email</div>

        <div className="text-gray-800">{user?.email}</div>
        {/* <div className="text-2xl font-bold mt-6">Address</div>
        <div className="">{user?.address}surat, gujrat, India</div> */}
        <div className="text-2xl font-bold mt-6">Gender</div>
        <div className="text-gray-800">{user?.gender}male</div>
        <div className="text-2xl font-bold mt-6">Phone</div>
        <div className="text-gray-800">{user?.phone}9327101398</div>
        <div className="mt-5">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

/*

    <div className="flex justify-center p-24">
      <Card sx={{ maxWidth: 1000 }}>
        <CardActionArea>
          <div className="flex flex-row justify-center">
            <div className="mx-5 my-5 items-center justify-center">
              <CardMedia
                className="rounded-md bg-red"
                component="img"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "250px",
                  borderRadius: "10px",
                }}
                image="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/08/1487591496-nick-fury-mcu-samuel-l-jackson.jpg?crop=0.75xw:1xh;center,top&resize=1200:*"
                alt="profile"></CardMedia>
            </div>
            <div className="w-80 h-64 items-center flex">
              <CardContent className="max-w-15 p-15">
                <Typography gutterBottom variant="h5" component="div">
                  User name: {user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {user?.email}
                </Typography>
                <div className="flex justify-center  mt-5 relative">
                  <Button
                    onClick={logoutHandler}
                    sx={{
                      color: "#F5385D",
                      ":hover": {
                        bgcolor: "#F5385D",
                        color: "white",
                      },
                    }}>
                    Logout
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>

*/
