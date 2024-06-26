import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SideBar from "../SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <Navbar />

        <div className="w-full flex min-h-[800px] h-[100vh]">
          <SideBar />
          <div className="w-full p-[5px]">
            {/* <MainContent activeTab={activeTab} /> */}.{children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
