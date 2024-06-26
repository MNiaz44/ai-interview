import React from "react";
import { FaStar } from "react-icons/fa";

function AuthPageLeft() {
  return (
    <>
      <div className="sticky left-0 top-0 h-[100vh] w-[45%]">
        <div className="flex flex-col bg-primary-bg-color h-[100%] p-[7vw]">
          <p
            className="text-heading-primary-white font-poppins text-[3.1vw] font-bold"
            style={{ lineHeight: "1.2" }}
          >
            Welcome to our community
          </p>
          <p className="font-poppins text-[1vw] text-secondary-text mt-2">
            Action Plan gives you the opportunity to analyze the job description
            and professional resume.
          </p>
          <div className="flex gap-1 mt-28">
            <span>
              <FaStar color="#FDE047" />
            </span>
            <span>
              <FaStar color="#FDE047" />
            </span>
            <span>
              <FaStar color="#FDE047" />
            </span>
            <span>
              <FaStar color="#FDE047" />
            </span>
            <span>
              <FaStar color="#FDE047" />
            </span>
          </div>
          <p className="font-poppins text-[1.4vw] text-secondary-text font-normal mt-5">
            "We love Landingfolio! Our designers were using it for their
            projects, so we already knew what kind of design they want."
          </p>
        </div>
      </div>
    </>
  );
}
export default AuthPageLeft;
