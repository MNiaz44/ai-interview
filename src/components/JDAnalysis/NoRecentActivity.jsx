import { Typography } from "@mui/material";
import React from "react";

const NoRecentActivity = ({ setJdAnalysis }) => {
  const handleClick = () => {
    setJdAnalysis(true);
  };
  return (
    <div
      className="w-[400px] h-fit border-[1px] border-solid border-[#00000040] rounded-2xl"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="w-full h-[13px] bg-primary-bg-color" />
      <div className="w-full  py-[50px]">
        <div className="w-full  flex justify-center">
          <img src="/Images/activity.svg" alt="" />
        </div>
        <div className="flex justify-center gap-x-[10px] mt-[10px]">
          <Typography
            sx={{
              fontSize: "24px",
              // lineHeight: "0px",
              fontFamily: "Poppins",
              fontWeight: "700",
              color: "#000",
              textAlign: "start",
            }}
          >
            Recent
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              // lineHeight: "0px",
              fontFamily: "Poppins",
              fontWeight: "700",
              color: "#084DF2",
              textAlign: "start",
            }}
          >
            Activity
          </Typography>
        </div>

        <Typography
          sx={{
            fontSize: "18px",
            // lineHeight: "0px",
            marginTop: "20px",
            fontFamily: "Poppins",
            // fontWeight: "700",
            color: "#000",
            textAlign: "center",
          }}
        >{`You don’t have any activity yet.`}</Typography>

        <div className="w-full flex justify-center mt-[30px]">
          <button
            className="w-[200px] bg-[#084DF2] font-poppins text-[white] font-bold text-[16px] p-[15px] rounded-xl"
            onClick={handleClick}
          >
            Start JD Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoRecentActivity;
