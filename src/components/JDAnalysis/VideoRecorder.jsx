import React from "react";
import JDAStepper from "./JDAStepper";
import { Box, Paper, Typography } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";
import { render } from "react-dom";
import VideoRecorder from "react-video-recorder";
import { uploadFile } from "../../api/apiCalls";

const JDAVideoRecorder = ({ setVideoBlobUrl }) => {
  const handleFileUpload = async (file) => {
    try {
      console.log("file is ", file);

      console.log("fileName is ", file?.name);

      if (!file) return;

      const response = await uploadFile(file);
      console.log("response is ", response);

      // setUploadError("");
      // setIsUpload(true);

      // setFile(file);
      // setFile({
      //   file: URL.createObjectURL(file),
      //   name: file.name,
      //   size: file.size / (1024 * 1024),
      // });
    } catch (error) {
      console.log("error is ", error);
      // setUploadError(error?.message);
    }
  };
  return (
    <>
      <div
        className="w-full h-full"
        style={{
          position: "relative",
        }}
      >
        <VideoRecorder
          isOnInitially={true}
          onRecordingComplete={(videoBlob) => {
            console.log("videoBlob is ", videoBlob);
            setVideoBlobUrl(videoBlob);
            // handleFileUpload(videoBlob);
          }}
        />

        <Box sx={{ width: "100%" }}>
          <Paper
            square
            elevation={0}
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              gap: "20px",
              backgroundColor: "transparent",
              color: "#FFF !important",
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                fontWeight: "500",
              }}
            >
              <span>No of retry lefts:</span>
              <img
                src="/Images/retry-white.svg"
                alt="Retry"
                className="w-[20px] h-[20px] ml-[5px] lg:ml-[10px]"
              />
              <span className="text-[white]">01</span>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                fontWeight: "500",
              }}
            >
              <span>Time Limit:</span>
              <img
                src="/Images/clock-white.svg"
                alt="clock"
                className="w-[20px] h-[20px] ml-[10px]"
              />
              <span className="text-[white]">1 Minute</span>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                fontWeight: "500",
              }}
            >
              <span>Video Record Time:</span>
              <img
                src="/Images/camera-white.svg"
                alt="camera"
                className="w-[20px] h-[20px] ml-[10px]"
              />
              <span className="text-[white]">1 Minute</span>
            </Typography>
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                fontWeight: "500",
              }}
            >
              <span>Thinking Time:</span>
              <img
                src="/Images/thinking-white.svg"
                alt="thinking"
                className="w-[20px] h-[20px] ml-[10px]"
              />
              <span className="text-[white]">1 Minute</span>
            </Typography>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default JDAVideoRecorder;
