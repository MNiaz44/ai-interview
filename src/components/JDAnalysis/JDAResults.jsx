import React, { useState } from "react";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";
import JDAStepper from "./JDAStepper";
import { Typography } from "@mui/material";
import { questions, suggestions } from "../../constanst";
import { Checkbox, FormControlLabel, FormGroup, Button } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";
import PieChart from "./PieChart";

const JDAResults = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[white] w-[95%] h-fit flex flex-col justify-center items-center  rounded-2xl border-solid border-[1px] border-[lightgray] ">
        <div className="w-full h-fit p-[15px]">
          <div className="w-full flex mb-[0px]">
            <div className="w-[50%]">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  marginBottom: "10px",
                }}
              >
                Job Title: <span className="font-[400]">Ux/UI Designer</span>
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
            <div className="w-[50%] flex flex-col items-end">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                Total Video Record time:{" "}
                <img
                  src="/Images/camera.svg"
                  alt="camera"
                  className="w-[20px] h-[20px] ml-[10px]"
                />
                <span className="font-[400] text-baby-blue">20 Minutes</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "10px",
                }}
              >
                Questions Attempted:{" "}
                <img
                  src="/Images/question.svg"
                  alt="camera"
                  className="w-[20px] h-[20px] ml-[10px]"
                />
                <span className="font-[400]">Ux/UI Designer</span>
              </Typography>
            </div>
          </div>
        </div>

        <hr className="w-full border-[1px] border-[#E5E7EB] mb-[10px]" />

        <div className="w-full h-fit p-[15px]">
          <div className="w-full h-fit mb-[30px] flex gap-[30px]">
            <div className="w-[35%]">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  marginBottom: "20px",
                }}
              >
                Your Video Analysis
              </Typography>
              <div className="w-full border-solid border-[1px] border-[#E5E7EB] pt-[30px] rounded-[10px]">
                <div className="w-full flex justify-center ">
                  <div className="w-[300px] h-[300px]">
                    <PieChart />
                  </div>
                </div>
                <div className="w-full border-solid border-[1px] border-[#E5E7EB]" />

                <div className="w-full flex p-[15px] ">
                  <div className="w-[50%] px-[15px]">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        color: "#333333",
                        // marginBottom: "20px",
                      }}
                    >
                      Strengths
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        color: "#333333",
                        // marginBottom: "20px",
                      }}
                    >
                      12
                    </Typography>
                  </div>

                  <div className="w-[50%] px-[15px]">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        color: "#333333",
                      }}
                    >
                      Improvements
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        color: "#333333",
                      }}
                    >
                      12
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[65%]">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  textTransform: "capitalize",
                  color: "#333333",
                  marginBottom: "20px",
                }}
              >
                Suggestions and Improvements
              </Typography>
              <div className="w-full border-solid border-[1px] border-[#E5E7EB] px-[15px] py-[20px] rounded-[10px]">
                {suggestions.map((suggestion, index) => (
                  <div>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        color: "#084DF2",
                        marginBottom: "10px",
                      }}
                    >
                      {suggestion.heading}:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        color: "#333333",
                        marginBottom: "10px",
                      }}
                    >
                      {suggestion.content}
                    </Typography>

                    {index !== suggestions.length - 1 ? (
                      <div className="w-full border-solid border-[1px] border-[#E5E7EB] mb-[10px]" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full flex justify-end p-[15px] relative`}>
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
              title={"Download Report"}
              type={"button"}
              isNext
              icon={"/Images/download.svg"}
              handleClick={() => {
                console.log("Download Report");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JDAResults;
