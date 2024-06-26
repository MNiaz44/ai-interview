import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";
// import { questions } from "../../constanst";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import VideoRecorder from "./VideoRecorder";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function FacebookCircularProgress(props) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#E9E9FF",
          position: "relative",
        }}
        size={130}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          // color should be radial-gradient rgba(255, 255, 255, 1) rgba(42, 179, 222, 1)
          color:
            "radial-gradient(rgba(255, 255, 255, 1) rgba(42, 179, 222, 1))",
          animationDuration: "1s",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={130}
        thickness={4}
        {...props}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {formatTime(props?.timeLeft)}
      </Typography>
    </Box>
  );
}

export default function JDAVideoRecordingStepper({
  mainStep,
  setMainStep,
  setIsGeneratingQuestions,
  setIsRecordingVideos,
  questions,
  handleAddVideoBlobUrl,
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [seconds, setSeconds] = useState(60);

  const [videoBlobUrl, setVideoBlobUrl] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0 && isThinking) {
        setSeconds(seconds - 1);
      } else if (seconds === 0 && isThinking) {
        setIsThinking(false); // Set isThinking to false when recording starts
        setIsRecording(true); // If seconds become zero and isThinking is true, start recording
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, isThinking]);

  const maxSteps = questions.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const handleNext = () => {
    handleAddVideoBlobUrl(videoBlobUrl);
    setVideoBlobUrl("");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setIsRecording(false); // Reset recording when moving to the next question
    setIsThinking(false); // Reset thinking time when moving to the next question
    setVideoBlobUrl(null); // Reset video blob url when moving to the next question
    setSeconds(60); // Reset the timer

    if (activeStep === maxSteps - 1) {
      setMainStep(1);
    }
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleSkip = () => {
  //   setSkippedQuestions((prevSkippedQuestions) => [
  //     ...prevSkippedQuestions,
  //     activeStep,
  //   ]);
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  const handleSkip = () => {
    setSkippedQuestions((prevSkippedQuestions) => [
      ...prevSkippedQuestions,
      activeStep,
    ]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsThinking(false); // Reset thinking time when skipping the question
    setIsRecording(false); // Reset recording when skipping the question
    setVideoBlobUrl(null); // Reset video blob url when skipping the question
    setSeconds(60); // Reset the timer
  };

  // console.log("blobs array >>", videoBlobUrls);

  if (isRecording) {
    return (
      <>
        <div className="w-full h-[453px]">
          <VideoRecorder setVideoBlobUrl={setVideoBlobUrl} />
        </div>

        <div className={`w-full flex justify-between px-[15px] mt-[30px]`}>
          <div className="w-fit">
            <PrimaryBtn
              handleClick={
                activeStep === maxSteps - 1 ? () => setMainStep(1) : handleSkip
              }
              // disabled={activeStep === maxSteps - 1}
              title={"Skip Question"}
              type={"button"}
              isPrevious
              isIcon={false}
            />
          </div>

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

          <div className="w-fit">
            <PrimaryBtn
              title={"Next Question"}
              type={"button"}
              isNext
              handleClick={handleNext}
              // disabled={activeStep === maxSteps - 1}
            />
          </div>
        </div>
      </>
    );
  }

  console.log("questions are ", questions);

  return (
    <Box sx={{ width: "100%", height: "453px" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          gap: "20px",
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
            src="/Images/retry.svg"
            alt="Retry"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <span className="text-baby-blue">01</span>
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
            src="/Images/clock.svg"
            alt="clock"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <span className="text-baby-blue">1 Minute</span>
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
            src="/Images/camera.svg"
            alt="camera"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <span className="text-baby-blue">1 Minute</span>
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
            src="/Images/thinking.svg"
            alt="thinking"
            className="w-[20px] h-[20px] ml-[10px]"
          />
          <span className="text-baby-blue">1 Minute</span>
        </Typography>
      </Paper>
      <Box
        sx={{
          width: "100%",
          mt: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "fit-content",
            padding: "20px",
            marginBottom: "10px",
            border: "1px solid #e5e7eb",
            borderRadius: "15px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
            }}
          >
            <span className="text-baby-blue">Q{activeStep + 1}: </span>
            {/* {questions[activeStep][`Question ${activeStep + 1}`]}
             */}
            {Object.values(questions[activeStep])[0]}
          </Typography>
        </div>
      </Box>

      {isThinking ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: "50px",
          }}
        >
          <FacebookCircularProgress timeLeft={seconds} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: "50px",
          }}
        >
          <img
            onClick={() => setIsRecording(true)}
            src="/Images/play.svg"
            alt="play-btn"
            className="w-[72px] h-[72px] mb-[10px] cursor-pointer"
          />
          <Typography
            sx={{
              mb: "10px",
              cursor: "pointer",
            }}
            onClick={() => setIsThinking(true)}
          >
            Start Thinking Time
          </Typography>
          <Typography
            sx={{
              mb: "10px",
            }}
          >
            or
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              color: "#084DF2",
              cursor: "pointer",
            }}
            onClick={() => setIsRecording(true)}
          >
            Skip thinking time
          </Typography>
        </Box>
      )}

      <div className={`w-full flex justify-between px-[15px]`}>
        <div className="w-fit">
          <PrimaryBtn
            handleClick={
              activeStep === maxSteps - 1 ? () => setMainStep(1) : handleSkip
            }
            // disabled={activeStep === maxSteps - 1}
            title={"Skip Question"}
            type={"button"}
            isPrevious
            isIcon={false}
          />
        </div>

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

        <div className="w-fit">
          <PrimaryBtn
            title={"Next Question"}
            type={"button"}
            isNext
            disabled={!videoBlobUrl}
            handleClick={
              activeStep === maxSteps - 1 ? () => setMainStep(1) : handleNext
            }
            // disabled={activeStep === maxSteps - 1}
          />
        </div>
      </div>
    </Box>
  );
}
