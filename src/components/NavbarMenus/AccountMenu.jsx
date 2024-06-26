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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function AccountMenu({ userInfo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          gap: "5px",
        }}
      >
        <IconButton
          size="small"
          sx={{ cursor: "default" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              "@media (max-width:1500px)": {
                width: 50,
                height: 50,
              },

              "@media (max-width:1200px)": {
                width: 40,
                height: 40,
              },
            }}
            src="/Images/Avatar.jpeg"
          />
        </IconButton>
        <div className="flex flex-col items-start">
          <Typography
            onClick={handleClick}
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "normal",
              color: "#084DF2",
              letterSpacing: "0.5px",
              display: "flex",
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
            <span>{userInfo?.firstName}</span>
            <KeyboardArrowDownIcon />
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "normal",
              color: "#090909",
              letterSpacing: "0.5px",
              gap: "4px",
              "@media (max-width:1500px)": {
                fontSize: "12px",
              },

              "@media (max-width:1200px)": {
                fontSize: "10px",
              },
            }}
          >
            Admin
          </Typography>
        </div>
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
            fontFamily: "Poppins !important",
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
        <Link to="/profile">
          <MenuItem onClick={handleClose}>
            <Avatar
              sx={{
                color: "#084DF2",
                bgcolor: "transparent",
              }}
            />{" "}
            Profile
          </MenuItem>
        </Link>

        {/* <Divider /> */}

        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings
              fontSize="small"
              sx={{
                color: "#084DF2",
              }}
            />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout
              fontSize="small"
              sx={{
                color: "#084DF2",
              }}
            />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
