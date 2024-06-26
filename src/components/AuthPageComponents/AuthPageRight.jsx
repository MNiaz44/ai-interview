import React from "react";

function AuthPageRight({ text }) {
  return (
    <>
      <div className="flex flex-col justify-center mr-[15%]">
        <div className="font-poppins text-[2.8vw] text-heading-color font-bold text-left">
          {text.heading}
        </div>
        <div className="font-poppins text-[1vw] text-sub-heading-color font-normal w-[80%]">
          {text.subHeading}
        </div>
      </div>
    </>
  );
}
export default AuthPageRight;
