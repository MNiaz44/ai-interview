import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const RememberMeCheckbox = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <div
      style={{
        display: { xs: "flex", md: "flex", lg: "" },
        justifyContent: { xs: "flex-start", md: "flex-start", lg: "" },
        width: { xs: "100%", md: "100%", lg: "" },
        marginRight: { xs: "0px", md: "0px", lg: "360px" },
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={handleRememberMeChange}
            color="primary"
          />
        }
        label={
          <Typography
            fontWeight="500"
            variant="subtitle1"
            type="Checkbox"
            sx={{ textDecoration: "none" }}
          >
            Remember Me
          </Typography>
        }
      />
    </div>
  );
};

export default RememberMeCheckbox;
