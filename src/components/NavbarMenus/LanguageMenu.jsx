import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function LanguageMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <IconButton
          size="small"
          sx={{ cursor: "default" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 24, height: 24 }} src="/Images/United.svg" />
        </IconButton>

        <Typography
          onClick={handleClick}
          sx={{
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: "600",
            lineHeight: "normal",
            color: "##52525B",
            letterSpacing: "0.5px",
            display: "flex",
            marginRight: "30px",
            cursor: "pointer",
            gap: "5px",
            width: "100%",
            height: "100%",
            "@media (max-width:1500px)": {
              fontSize: "12px",
            },

            "@media (max-width:1200px)": {
              fontSize: "10px",
            },
          }}
        >
          <span>{`Eng (US)`}</span>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: "16px",
              color: "#A098AE",
            }}
          />
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>Eng (US)</MenuItem>
        <MenuItem onClick={handleClose}>Eng (UK)</MenuItem>
        <MenuItem onClick={handleClose}>Spanish</MenuItem>
        <MenuItem onClick={handleClose}>Italian</MenuItem>
        <MenuItem onClick={handleClose}>German</MenuItem>
      </Menu>
    </>
  );
}
