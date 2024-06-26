import React from "react";

const AuthTextField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  length,
}) => {
  return (
    <div className="w-full flex flex-col">
      <lablel className="font-semibold text-small-text font-[poppins] mb-2 text-heading-color">
        {label}
      </lablel>
      <input
        type={type}
        className="border-[1px] border-[#CBD5E1] p-2 rounded-[12px] bg-[#F8FAFC] w-full mb-2"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default AuthTextField;
