import React from "react";
import { Navbar } from "../components";
import Footer from "../components/AuthPageComponents/Footer";
import AuthPageLeft2 from "../components/AuthPageComponents/AuthPageLeft2";
import AuthPageRight from "../components/AuthPageComponents/AuthPageRight";
import { ForgotPassPageText } from "../utils/constants";
import AuthTextField from "../components/AuthPageComponents/AuthTextField";
import AuthButton from "../components/AuthPageComponents/AuthButtons";
import { useFormik } from "formik";
import { forgotPassSchema } from "../formik/forgotPassSchema";
import API from "../api/api";
import { authEndpoints } from "../api/endpoints";
import ValidationError from "../components/AuthPageComponents/ValidationError";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { toast } from "react-toastify";

function ForgotPass() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassSchema,
    onSubmit: async (values) => {
      try {
        const { email } = values;

        const response = await API.post(authEndpoints.forgotPassword, {
          email,
        });
        const data = response.data;
        toast.success(data?.message);
        navigate(routes.forgotPassVerifycode, {
          state: { email },
        });
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
        <div className="flex flex-col justify-center ml-32 w-[55%]">
          <AuthPageRight text={ForgotPassPageText} />
          <div className="mt-5 w-[70%]">
            <form onSubmit={formik.handleSubmit}>
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
              <div className="w-full flex mt-5">
                <AuthButton title="Continue" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPass;
