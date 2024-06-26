import React, { useEffect, useRef, useState } from "react";
import NoRecentActivity from "./NoRecentActivity";
import JDAStepper from "./JDAStepper";
import { Typography } from "@mui/material";
import FileDropzone from "./FileDropzone";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";
import EastIcon from "@mui/icons-material/East";
import JDAMain from "./JDAMain";
import JDAQuestions from "./JDAQuestions";
import JDARecordingVideos from "./JDARecordingVideos";
import JDAQuestionsAnalysis from "./JDAQuestionsAnalysis";
import JDAResults from "./JDAResults";

const JDAnalysis = () => {
  const [isRecentActivity, setIsRecentActivity] = useState(false);
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [isRecordingVideos, setIsRecordingVideos] = useState(false);

  const [videoBlobUrls, setVideoBlobUrls] = useState([]);

  const handleAddVideoBlobUrl = (videoBlobUrl) => {
    setVideoBlobUrls([...videoBlobUrls, videoBlobUrl]);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (!isRecentActivity) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <NoRecentActivity setJdAnalysis={setIsRecentActivity} />
      </div>
    );
  }

  if (activeStep === 0) {
    return (
      <>
        {isGeneratingQuestions ? (
          <JDAQuestions
            activeStep={activeStep}
            setIsGeneratingQuestions={setIsGeneratingQuestions}
            setIsRecordingVideos={setIsRecordingVideos}
            questionsData={questionsData}
            selectedQuestions={selectedQuestions}
            setSelectedQuestions={setSelectedQuestions}
          />
        ) : isRecordingVideos ? (
          <JDARecordingVideos
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            setIsRecordingVideos={setIsRecordingVideos}
            setIsGeneratingQuestions={setIsGeneratingQuestions}
            questionsData={selectedQuestions}
            handleAddVideoBlobUrl={handleAddVideoBlobUrl}
          />
        ) : (
          <JDAMain
            activeStep={activeStep}
            setIsGeneratingQuestions={setIsGeneratingQuestions}
            setQuestionsData={setQuestionsData}
          />
        )}
      </>
    );
  }

  if (activeStep === 1) {
    return (
      <JDAQuestionsAnalysis
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        videoBlobUrls={videoBlobUrls}
      />
    );
  }

  if (activeStep === 2) {
    return <JDAResults />;
  }
};

export default JDAnalysis;
