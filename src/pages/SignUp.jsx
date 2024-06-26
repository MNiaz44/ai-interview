import React from "react";
import { Navbar } from "../components";
import Footer from "../components/AuthPageComponents/Footer";
import AuthPageLeft from "../components/AuthPageComponents/AuthPageLeft";
import AuthPageRight from "../components/AuthPageComponents/AuthPageRight";
import { SignUpPageText } from "../utils/constants";
import AuthTextField from "../components/AuthPageComponents/AuthTextField";
import AuthButton from "../components/AuthPageComponents/AuthButtons";
import { routes } from "../routes";
import GoogleButton from "../components/AuthPageComponents/GoogleButton";
import RememberMeCheckbox from "../components/AuthPageComponents/RememberMe";
import FacebookButton from "../components/AuthPageComponents/FacebookButton";
import AppleButton from "../components/AuthPageComponents/AppleButton";
import { useFormik } from "formik";
import { signupSchema } from "../formik/signupSchema";
import API from "../api/api";
import { authEndpoints } from "../api/endpoints";
import ValidationError from "../components/AuthPageComponents/ValidationError";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthPasswordField from "../components/AuthPageComponents/AuthPasswordField";

function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const { email, firstName, lastName, password } = values;

        const response = await API.post(authEndpoints.signup, {
          email,
          firstName,
          lastName,
          password,
        });
        const data = response.data;
        toast.success(data?.message);
        navigate(routes.verifycode, {
          state: { email, password },
        });
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    },
  });
  return (
    <>
      <div className="flex">
        <AuthPageLeft />
        <div className="flex flex-col justify-center ml-32 w-[55%] mt-5">
          <div className="w-[80%]">
            <AuthPageRight text={SignUpPageText} />
            <div className="w-full mt-5">
              <form onSubmit={formik.handleSubmit} className="w-[70%]">
                <AuthTextField
                  label="First Name"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  type="text"
                />
                <ValidationError
                  touched={formik.touched.firstName}
                  error={formik.errors.firstName}
                />
                <AuthTextField
                  label="Last Name"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  type="text"
                />
                <ValidationError
                  touched={formik.touched.lastName}
                  error={formik.errors.lastName}
                />
                <AuthTextField
                  label="Email address"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="text"
                />
                <ValidationError
                  touched={formik.touched.email}
                  error={formik.errors.email}
                />
                {/* <AuthTextField
                  label="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  type="text"
                /> */}
                <AuthPasswordField
                  label="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  type="text"
                />
                <ValidationError
                  touched={formik.touched.password}
                  error={formik.errors.password}
                />
                <div className="w-full flex justify-between mt-5">
                  <RememberMeCheckbox />
                  <a
                    className="text-baby-blue pl-1 genericLink font-poppins font-semibold mt-2"
                    href={routes.forgotPassword}
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="w-full flex mt-5">
                  <AuthButton title="Sign Up" type="submit" />
                </div>
              </form>
            </div>
            <div className="flex w-full items-center ml-[12%]">
              <hr className="w-14 h-px my-8 bg-[#585858] border-0 " />
              <span className="px-3 font-Outfit text-[18px]  font-semibold text-gray-900 text-black">
                or sign up with
              </span>
              <hr className="w-14 h-px my-8 bg-[#585858] border-0 " />
            </div>
            <div className="flex ml-5 gap-1">
              <GoogleButton />
              <AppleButton />
              <FacebookButton />
            </div>
            <div className="ml-[15%] mt-5">
              Already have an account?
              <a
                className="text-baby-blue pl-1 genericLink font-poppins font-bold mt-5"
                href={routes.logIn}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
