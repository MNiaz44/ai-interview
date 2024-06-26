import { Button } from "@mui/material";
import React from "react";

const AuthIconButton = ({ icon, alt }) => {
  return (
    <>
      <Button>
        <img src={icon} alt={alt} style={{ height: "36px", width: "36px" }} />
      </Button>
    </>
  );
};

export default AuthIconButton;
