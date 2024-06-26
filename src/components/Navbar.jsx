import React, { useContext, useEffect } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import NavbarMenus from "./NavbarMenus/NavbarMenus";

import AppContext from "../AppContext";
import API from "../api/api";
import { authEndpoints } from "../api/endpoints";
const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(authEndpoints.getUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.user;

      setUserInfo(userData);

      console.log("Data from /api/user:", userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData function
  }, []);

  console.log("userInfo :>> ", userInfo);

  return (
    <div className="w-full flex h-[100px]">
      <div
        className="w-[19.65%] flex justify-center items-center p-[20px] h-[100px]"
        style={{
          boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src="/Images/header-logo.svg"
          alt="header-logo"
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
        />
      </div>
      <div
        className="w-full flex justify-between items-center py-[15px] px-[20px]"
        style={{
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "36px",
            fontFamily: "Poppins",

            fontWeight: "700",
            color: "#084DF2",
            "@media (max-width:1500px)": {
              fontSize: "18px",
            },

            "@media (max-width:1200px)": {
              fontSize: "14px",
            },
          }}
        >
          Welcome back , {userInfo?.firstName}
        </Typography>

        <div className="w-[30%]">
          <SearchBar />
        </div>

        <NavbarMenus user={userInfo} />
      </div>
    </div>
  );
};

export default Navbar;
