import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Typography } from "@mui/material";

const PrimaryBtn = ({
  title,
  type,
  isNext,
  isLoading,
  isPrevious,
  isIcon = true,
  icon,
  handleClick,
  disabled,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        disabled={disabled}
        type={type}
        className={`${
          isPrevious
            ? "bg-[transparent] text-baby-blue border-[1px] border-solid border-baby-blue"
            : "bg-primary-bg-color text-heading-primary-white"
        } p-2 px-6 rounded-md w-full font-poppins ${
          disabled
            ? "disabled:bg-[#eeeeef] disabled:text-[#52525B] disabled:border-[#eeeeef] disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 cursor-not-allowed"
            : ""
        }`}
      >
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {icon ? (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{title}</span>
                <img
                  src={icon}
                  alt="icon"
                  className="ml-[10px] h-[20px] w-[20px]"
                />
              </Typography>
            ) : (
              <>
                {!isIcon ||
                  (isPrevious && (
                    <WestIcon
                      sx={{
                        fontSize: "20px",
                        color: disabled ? "#52525B" : "#084DF2",
                        marginRight: "10px",
                      }}
                    />
                  ))}
                {title}
                {!isIcon ||
                  (isNext && (
                    <EastIcon
                      sx={{
                        fontSize: "20px",
                        color: disabled ? "#52525B" : "#fff",
                        marginLeft: "10px",
                      }}
                    />
                  ))}
              </>
            )}
          </>
        )}
      </button>
    </>
  );
};

export default PrimaryBtn;
