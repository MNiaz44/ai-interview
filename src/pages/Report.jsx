import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Report = () => {
  const reports = [1, 2, 3, 4];

  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const response = await axios.get("/api/analysis/recentactivity", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRecentActivities(response.data);
        console.log("Recent activities:", response.data);
      } catch (error) {
        console.error("Error fetching recent activities:", error);
      }
    };

    fetchRecentActivities();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout>
      <div className="px-5">
        <div className="py-2">
          <p className="font-bold text-[32px]">Recent Activity</p>
          <p className="font-normal text-medium-text">
            You have following activities to review.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {reports.map((report, index) => (
            <div key={index} className="bg-gray-200 pt-0 rounded-lg shadow-lg">
              <div className="bg-primary-bg-color rounded-t-lg py-2 flex justify-center">
                <p className="font-bold text-large-text text-heading-primary-white px-4 flex justify-between items-center w-full max-w-5xl">
                  Job Description Analysis
                  <span className="px-4 font-normal text-small-text flex">
                    <CiCalendar className="w-6 h-6" />
                    Jan 22,2024
                  </span>
                </p>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="text-lg font-semibold m-4">
                    Job Title: UX Designer
                  </p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleClick}
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </div>
                <p className="text-sm text-gray-600 px-4">
                  Lacks professional experience in 3D design and graphic design
                  principles which are required for the role. Most experience is
                  focused on UI/UX.
                </p>
                <div className="flex p-4">
                  <p>Support Format:</p>
                  <p>.doc</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded bg-primary-bg-color text-heading-primary-white mx-4 mb-4 flex justify-center items-center">
                  View Report
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Report;
