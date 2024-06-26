import React from "react";
import AuthPic from "../../assets/images/auth-pic.png";

function AuthPageLeft2() {
  return (
    <>
      <div className="flex justify-center items-center bg-primary-bg-color h-screen w-[45%]">
        <img src={AuthPic} alt="Authentication" width="660px" />
      </div>
    </>
  );
}
export default AuthPageLeft2;
