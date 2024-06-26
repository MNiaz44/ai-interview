import { Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { sidebarMenu } from "../constanst";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState(0);

  useEffect(() => {
    const path = location.pathname;
    const index = sidebarMenu.findIndex((item) => item.path === path);
    setActiveTab(index);
    console.log("index", index);
  }, [location]);

  return (
    <div
      className="w-[20%] h-full"
      style={{
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          lineHeight: "36px",
          fontFamily: "Poppins",
          fontWeight: "700",
          color: "#000",
          textAlign: "start",
          marginTop: "20px",
          marginLeft: "10px",
        }}
      >
        Main Menu
      </Typography>
      <Tabs
        value={activeTab}
        orientation="vertical"
        variant="fullWidth"
        // onChange={handleChange}
        aria-label="scrollable prevent tabs example"
        sx={{
          padding: "0px",
          margin: "0px",

          // height: "100vh",
          //   borderBottom: "1px solid rgba(126, 126, 126, 0.40)",
          //   borderRadius: "15px",
          marginLeft: "0px important",
          "& .MuiTabs-indicator": {
            backgroundColor: "#084DF2",
            width: "5px",
            height: "2px",
            borderRadius: "50px",
          },

          "& .MuiTab-root": {
            minWidth: "unset",
            width: "unset",
            maxWidth: "unset",
            padding: "10px",

            // marginRight: "112px",
            color: "#52525B",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "normal",
            fontFamily: "Poppins",
            textTransform: "capitalize",
            alignItems: "flex-start",

            ":last-child": {
              marginRight: "0px",
            },
          },

          "& .Mui-selected": {
            color: "#084DF2",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "normal",
            fontFamily: "Poppins",
            textTransform: "capitalize",
            backgroundColor: "#e6edfe",
            borderRadius: "15px",
          },
        }}
      >
        {sidebarMenu.map((item, index) => (
          <Tab
            key={index}
            onClick={
              item?.name === "Logout"
                ? () => {
                    localStorage.clear();
                    navigate("/login");
                  }
                : () => navigate(item?.path)
            }
            label={
              <Typography
                sx={{
                  //   color: "#52525B",
                  //   fontFamily: "Poppins",
                  fontWeight: activeTab === index ? 600 : "400",
                  //   fontSize: "18px",
                  //   lineHeight: "22px",
                  //   textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "5px",
                  "@media (max-width:1500px)": {
                    fontSize: "12px",
                  },

                  "@media (max-width:1200px)": {
                    fontSize: "10px",
                  },
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[20px] h-[20px]"
                />
                {item.name}
              </Typography>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default SideBar;
