import React from "react";
import JDAStepper from "./JDAStepper";
import { Box, Paper, Typography } from "@mui/material";
import JDAVideoRecordingStepper from "./JDAVideoRecordingStepper";
import RepeatIcon from "@mui/icons-material/Repeat";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";

const JDAQuestionsAnalysis = ({ activeStep, setActiveStep, videoBlobUrls }) => {
  console.log("blobs in analysis are", videoBlobUrls);

  const handleSubmit = () => {
    setActiveStep(2);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[white] w-[95%] h-fit flex flex-col justify-center items-center  rounded-2xl border-solid border-[1px] border-[lightgray] ">
        <div className="w-full h-fit p-[15px]">
          <div className="w-full flex mb-[10px]">
            <div className="w-[50%]">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  marginBottom: "30px",
                }}
              >
                Job Title: <span className="font-[400]">Ux/UI Designer</span>
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  marginBottom: "5px",
                }}
              >
                Questions
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",

                  color: "#333333",
                  //   marginBottom: "20px",
                }}
              >
                There are 10 questions based on JD you submitted
              </Typography>
            </div>
            <div className="w-[50%]">
              <JDAStepper
                steps={[
                  {
                    label: "Upload",
                    // icon would be  a function that accepts sx props
                    icon: function Icon(color) {
                      return <LoginIcon sx={{ color: color }} />;
                    },
                  },
                  {
                    label: "Analysis",
                    icon: function Icon(color) {
                      return <RepeatIcon sx={{ color: color }} />;
                    },
                  },
                  {
                    label: "Results",
                    icon: function Icon(color) {
                      return <DescriptionIcon sx={{ color: color }} />;
                    },
                  },
                ]}
                activeStep={activeStep}
              />
            </div>
          </div>
        </div>

        <hr className="w-full border-[1px] border-[#E5E7EB] mb-[10px]" />

        <div className="w-full h-fit p-[15px]">
          <div
            className="h-full mb-[30px] pb-[50px]"
            style={{
              // Add background Image
              backgroundImage: "url(/Images/analysis-bg.png)",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <Paper
                square
                elevation={0}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  gap: "20px",
                  backgroundColor: "transparent",
                  color: "#FFF !important",
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
                    className="w-[20px] h-[20px] ml-[10px]"
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

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  my: "100px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    color: "#FFF",
                    marginBottom: "20px",
                  }}
                >
                  Videos has been recorded!
                </Typography>

                <div className="flex items-center gap-x-[15px]">
                  <div className="flex flex-col gap-y-[10px] items-center cursor-pointer">
                    <img
                      src="/Images/startvideo.svg"
                      alt="start-video"
                      className="w-[35px] h-[35px]"
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Poppins",
                        color: "#FFF",
                        marginBottom: "5px",
                      }}
                    >
                      Play
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-y-[10px] items-center cursor-pointer">
                    <img
                      src="/Images/retake.svg"
                      alt=""
                      className="w-[35px] h-[35px]"
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Poppins",
                        color: "#FFF",
                        marginBottom: "5px",
                      }}
                    >
                      Retake
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-y-[10px] items-center cursor-pointer">
                    <img
                      src="/Images/submit.svg"
                      alt=""
                      className="w-[35px] h-[35px]"
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Poppins",
                        color: "#FFF",
                        marginBottom: "5px",
                      }}
                    >
                      Submit
                    </Typography>
                  </div>
                </div>
              </Box>
            </Box>
          </div>
          <div className={`w-full flex justify-end p-15 relative`}>
            {/* <div className="w-fit">
              <PrimaryBtn
                handleClick={() => {
                  //   setIsRecordingVideos(false);
                  //   setIsGeneratingQuestions(true);
                }}
                title={"Back"}
                type={"button"}
                isPrevious
              />
            </div> */}
            <div
              style={{
                display: "absolute",
                right: "50%",
                top: "50%",
                transform: "translate(-100%, 0)",
              }}
            >
              <div>
                <Typography>
                  Need help with your interview?{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      marginLeft: "15px",
                    }}
                    className="text-[#52525B] cursor-pointer"
                  >
                    Contact Support
                  </span>
                </Typography>
                <div className="w-full flex justify-center">
                  <div className="w-[90%] flex justify-between">
                    <Typography
                      sx={{
                        textDecoration: "underline",
                        color: "#52525B",
                        cursor: "pointer",
                      }}
                    >
                      Watch Tutorials
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "underline",
                        color: "#52525B",
                        cursor: "pointer",
                      }}
                    >
                      View Help Articles
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit">
              <PrimaryBtn
                title={"Submit"}
                type={"button"}
                isNext
                handleClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JDAQuestionsAnalysis;
