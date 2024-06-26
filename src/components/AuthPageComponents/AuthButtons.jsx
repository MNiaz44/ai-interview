import React from "react";

const AuthButton = ({ title, type }) => {
  return (
    <>
      <button
        type={type}
        className="bg-primary-bg-color p-2 px-6 rounded-md text-heading-primary-white w-full"
      >
        {title}
      </button>
    </>
  );
};

export default AuthButton;
