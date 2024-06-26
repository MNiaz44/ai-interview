import React, { useContext } from "react";
import { Navbar } from "../components";
import Footer from "../components/AuthPageComponents/Footer";
import AuthPageLeft from "../components/AuthPageComponents/AuthPageLeft";
import AuthPageRight from "../components/AuthPageComponents/AuthPageRight";
import { LoginPageText } from "../utils/constants";
import AuthTextField from "../components/AuthPageComponents/AuthTextField";
import AuthButton from "../components/AuthPageComponents/AuthButtons";
import RememberMeCheckbox from "../components/AuthPageComponents/RememberMe";
import { routes } from "../routes";
import { useFormik } from "formik";
import { loginSchema } from "../formik/loginSchema";
import GoogleButton from "../components/AuthPageComponents/GoogleButton";
import AppleButton from "../components/AuthPageComponents/AppleButton";
import FacebookButton from "../components/AuthPageComponents/FacebookButton";
import API, { setAuthToken } from "../api/api";
import { authEndpoints } from "../api/endpoints";
import ValidationError from "../components/AuthPageComponents/ValidationError";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../AppContext";
import AuthPasswordField from "../components/AuthPageComponents/AuthPasswordField";

function Login() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const { email, password } = values;

        const response = await API.post(authEndpoints.login, {
          email,
          password,
        });
        const data = response.data;
        console.log("response data :>> ", data);
        // toast.error(data?.message);

        // toast.success(data?.message);
        // navigate(routes.homepage, {
        //   state: { email, password },
        // });
        if (data.token) {
          // const accessToken = { token: data.accessToken };
          // auth.setToken(accessToken, true);
          setAuthToken(data.accessToken);
          localStorage.setItem("token", data.token);
          setUserInfo(data.user);

          navigate(routes.index, {
            state: { email, password },
          });
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      } catch (error) {
        console.log("error>>>", error);
        // toast.error(error.response?.data?.message);
        toast.error(data?.message);
      }
    },
  });

  return (
    <>
      <div className="flex">
        <AuthPageLeft />
        <div className="flex flex-col justify-center ml-32 w-[55%] overflow-hidden">
          <AuthPageRight text={LoginPageText} />
          <div className="mt-5">
            <form onSubmit={formik.handleSubmit} className="w-[70%]">
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
                <AuthButton title="Sign In" type="submit" />
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
          <div className="ml-[10%] mt-5">
            Don't have an account?
            <a
              className="text-baby-blue pl-1 genericLink font-poppins font-bold mt-5"
              href={routes.SignUp}
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
