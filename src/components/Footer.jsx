import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[20%] flex justify-center">
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "24px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#000",
            padding: "10px",
            "@media (max-width:1500px)": {
              fontSize: "12px",
            },

            "@media (max-width:1250px)": {
              fontSize: "10px",
            },
          }}
        >
          2024 AI Bot. All Right Reserved
        </Typography>
      </div>
      <div
        className="w-full"
        style={{
          boxShadow: "0 0 0 1px #e5e7eb",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-16">
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#084DF2",
              padding: "10px",
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#084DF2",
              padding: "10px",
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Poppins",
              fontWeight: "600",
              color: "#084DF2",
              padding: "10px",
            }}
          >
            Privacy Policy
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
