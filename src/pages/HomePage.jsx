import React, { useState } from "react";
import { Navbar } from "../components";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    if (newValue === 5) {
      // window.location.href = "/login";
      return;
    }
    setActiveTab(newValue);
  };
  return (
    <>
      <div className="w-full">
        <Navbar />

        <div className="w-full flex min-h-[600px] h-[800px]">
          <SideBar activeTab={activeTab} handleChange={handleChange} />
          <div className="w-full p-[5px]">
            <MainContent activeTab={activeTab} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
