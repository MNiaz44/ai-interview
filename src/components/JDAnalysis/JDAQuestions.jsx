import React, { useState } from "react";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";
import JDAStepper from "./JDAStepper";
import { Typography } from "@mui/material";
import { questions } from "../../constanst";
import { Checkbox, FormControlLabel, FormGroup, Button } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";

const JDAQuestions = ({
  activeStep,
  setIsGeneratingQuestions,
  setIsRecordingVideos,
  questionsData,
  setSelectedQuestions,
  selectedQuestions,
}) => {
  const handleCheckboxChange = (question) => {
    if (selectedQuestions.includes(question)) {
      setSelectedQuestions(selectedQuestions.filter((q) => q !== question));
    } else {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  const handleSelectAll = () => {
    setSelectedQuestions(questions);
  };

  const handleDeselectAll = () => {
    setSelectedQuestions([]);
  };

  console.log("selectedQuestions :>> ", questionsData);
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
          <div className="overflow-y-scroll h-[420px] mb-[30px]">
            <div>
              <FormGroup>
                {questionsData.map((question, index) => (
                  <div
                    style={{
                      width: "98%",
                      padding: "10px",
                      marginBottom: "10px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "15px",
                    }}
                  >
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={selectedQuestions.includes(question)}
                          onChange={() => handleCheckboxChange(question)}
                        />
                      }
                      label={
                        <Typography>
                          Q{index + 1}: {question[`Question ${index + 1}`]}
                        </Typography>
                      }
                    />
                  </div>
                ))}
              </FormGroup>
            </div>
          </div>

          <div className={`w-full flex justify-between p-15`}>
            <div className="w-fit">
              <PrimaryBtn
                handleClick={() => setIsGeneratingQuestions(false)}
                title={"Back"}
                type={"button"}
                isPrevious
              />
            </div>

            <div className="w-fit">
              <PrimaryBtn
                title={"Record Video"}
                type={"button"}
                isNext
                disabled={selectedQuestions.length === 0}
                handleClick={() => {
                  setIsGeneratingQuestions(false);
                  setIsRecordingVideos(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JDAQuestions;
