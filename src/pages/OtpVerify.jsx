import React, { useState } from "react";
import { Navbar } from "../components";
import Footer from "../components/AuthPageComponents/Footer";
import AuthPageLeft2 from "../components/AuthPageComponents/AuthPageLeft2";
import AuthPageRight from "../components/AuthPageComponents/AuthPageRight";
import { OTPPageText } from "../utils/constants";
import AuthButton from "../components/AuthPageComponents/AuthButtons";
import OTPInput from "react-otp-input";
import { useFormik } from "formik";
import { authEndpoints } from "../api/endpoints";
import API from "../api/api";
import ValidationError from "../components/AuthPageComponents/ValidationError";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";

function OtpVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const handleResendCode = async () => {
    try {
      const response = await API.post(authEndpoints.signupVerifyOTP, {
        otp: otp,
      });
      const data = response.data;
      console.log("data :>> ", data);
      toast.success(data?.message);
      navigate(routes.logIn, {
        state: { email, password },
      });
    } catch (error) {
      console.log("error>>>", error);
      toast.error(error.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async () => {
      try {
        const response = await API.post(authEndpoints.signupVerifyOTP, {
          otp: otp,
        });
        const data = response.data;
        console.log("data :>> ", data);
        // toast.success(data?.message);
        // navigate(routes.logIn);
        navigate(routes.questions);
      } catch (error) {
        console.log("error>>>", error);
        toast.error(error.response?.data?.message);
      }
    },
  });

  return (
    <>
      <div className="flex">
        <AuthPageLeft2 />
        <div className="flex flex-col justify-center ml-32 w-[50%]">
          <AuthPageRight text={OTPPageText} />
          <div className="mt-5 w-[70%]">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-center items-center mt-5">
                <OTPInput
                  value={otp}
                  onChange={handleOtpChange}
                  numInputs={4}
                  renderInput={(props) => <input {...props} />}
                  inputStyle={{
                    width: "35px",
                    height: "40px",
                    margin: "0 24px 0 0",
                    fontSize: "2rem",
                    borderBottom: "1px solid #52525B",
                    outline: "none",
                    textAlign: "center",
                    color: "#084DF2",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    marginBottom: "24px",
                  }}
                />
              </div>
              <div className="w-full flex mt-5">
                <AuthButton type="submit" title="Verify" />
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex mt-5 font-[3vw]">
              Didn't recieve the code?
              <p
                onClick={handleResendCode}
                className="text-baby-blue pl-1 underline genericLink font-poppins font-semibold"
              >
                Resend Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpVerify;
