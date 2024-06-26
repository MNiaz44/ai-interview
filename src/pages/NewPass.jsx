import React from "react";
import { Navbar } from "../components";
import Footer from "../components/AuthPageComponents/Footer";
import AuthPageLeft2 from "../components/AuthPageComponents/AuthPageLeft2";
import AuthPageRight from "../components/AuthPageComponents/AuthPageRight";
import { NewPassPageText } from "../utils/constants";
import AuthTextField from "../components/AuthPageComponents/AuthTextField";
import AuthButton from "../components/AuthPageComponents/AuthButtons";
import { useFormik } from "formik";
import { resetPassSchema } from "../formik/resetPassSchema";
import API from "../api/api";
import { authEndpoints } from "../api/endpoints";
import ValidationError from "../components/AuthPageComponents/ValidationError";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes";

function NewPass() {
  const navigate = useNavigate();
  const location = useLocation();
  //  const [otp, setOtp] = useState("");

  const { otp: OTPPassword } = location.state;

  console.log("otp is", OTPPassword);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      // otp: "",
    },
    // validationSchema: resetPassSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        const { password, confirmPassword, otp } = values;

        const response = await API.post(authEndpoints.resetPassword, {
          password,
          confirmPassword,
          otp: parseInt(OTPPassword),
        });
        const data = response.data;
        console.log("data :>> ", data);
        toast.success(data?.message);
        navigate(routes.logIn);
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    },
  });
  return (
    <>
      <div className="flex">
        <AuthPageLeft2 />
        <div className="flex flex-col justify-center ml-32 w-[55%]">
          <AuthPageRight text={NewPassPageText} />
          <div className="mt-5">
            <form onSubmit={formik.handleSubmit}>
              <AuthTextField
                label="Enter Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="text"
              />
              <ValidationError
                touched={formik.touched.password}
                error={formik.errors.password}
              />
              <AuthTextField
                label="Confirm Password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                type="text"
              />
              <ValidationError
                touched={formik.touched.confirmPassword}
                error={formik.errors.confirmPassword}
              />
              <div className="w-full flex mt-5">
                <AuthButton title="Save & Log In" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewPass;
