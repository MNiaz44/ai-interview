import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";

const JDAStepper = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel>
            <div className="flex flex-col items-center">
              {step.icon(activeStep === index ? "#084DF2" : "#52525B")}
              <Typography
                sx={{
                  color: activeStep === index ? "#084DF2" : "#52525B",
                }}
              >
                {step.label}
              </Typography>
            </div>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default JDAStepper;
