import React from "react";
import JDAnalysis from "./JDAnalysis/JDAnalysis";
import Reports from "./Reports/Reports";
import Settings from "./Settings/Settings";
import MyProfile from "./MyProfile/MyProfile";
import { Profile, Report, ResumeAnalysis } from "../pages";

const MainContent = ({ activeTab }) => {
  return (
    <div className="w-full h-full bg-[#f9fafb]">
      {activeTab === 0 && <JDAnalysis />}
      {activeTab === 1 && <ResumeAnalysis />}
      {activeTab === 2 && <Report />}
      {activeTab === 3 && <Profile />}
      {activeTab === 4 && <Profile />}
    </div>
  );
};

export default MainContent;
