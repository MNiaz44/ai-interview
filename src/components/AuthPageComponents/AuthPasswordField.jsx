import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPasswordField = ({ label, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full flex flex-col">
      <label className="font-semibold text-small-text font-[poppins] mb-2 text-heading-color">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="border-[1px] border-[#CBD5E1] p-2 pr-10 rounded-[12px] bg-[#F8FAFC] w-full mb-2"
          value={value}
          onChange={onChange}
          name={name}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </div>
  );
};

export default AuthPasswordField;
