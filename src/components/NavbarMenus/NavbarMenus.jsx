import React from "react";
import AccountMenu from "./AccountMenu";
import { Language } from "@mui/icons-material";
import LanguageMenu from "./LanguageMenu";
import { Badge } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavbarMenus = ({ user }) => {
  return (
    <div className="flex items-center gap-x-[10px]">
      {/* <LanguageMenu /> */}

      {/* <Badge color="secondary" variant="dot" invisible={false}>
        <NotificationsNoneOutlinedIcon
          sx={{
            fontSize: "30px",
            color: "#084DF2",
            cursor: "pointer",
            // dot color
            "& .MuiBadge-dot": {
              backgroundColor: "red",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "2px solid #fff",
            },
          }}
        />
      </Badge> */}

      <AccountMenu userInfo={user} />
    </div>
  );
};

export default NavbarMenus;
