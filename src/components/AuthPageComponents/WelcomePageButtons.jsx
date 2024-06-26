import { Button } from "@mui/material";
import React from "react";
import { WelcomePageText } from "../../utils/constants";

const WelcomePageButtons = ({ text }) => {
  return <Button>{WelcomePageText}</Button>;
};

export default WelcomePageButtons;
