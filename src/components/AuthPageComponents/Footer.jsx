import { Typography, Stack } from "@mui/material";

// ==============================|| FOOTER ||============================== //

const Footer = () => (
  <div style={{ width: "100%" }}>
    <Stack
      direction="row"
      justifyContent="center"
      borderTop="1px solid #878A92"
      width="100%"
    >
      <Typography
        sx={{
          paddingBottom: "1rem",
          paddingTop: "1rem",
          fontFamily: "Roboto",
          color: "#000000",
          fontSize: "16px",
        }}
      >
        &copy;{new Date().getFullYear()} Ratefo Studio. All rights reserved.
      </Typography>
    </Stack>
  </div>
);

export default Footer;
