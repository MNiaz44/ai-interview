import * as Yup from "yup";

const emailDomainExp = /^[^\s@]+@(?:[^\s@]+\.)+(com|org|net|pk|edu|gov)$/i;

export const resetPassSchema = Yup.object().shape({
  otp: Yup.string()
    .required("4 digit OTP is required")
    .matches(/^\d{4}$/, "OTP must be exactly 4 digits")
    .max(4, "OTP must be exactly 4 digits"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must have 8 Characters, containing atleast one Uppercase Lowercase, a Number and Special Character!"
    )
    .max(30),
  confirmPassword: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must have 8 Characters, containing atleast one Uppercase Lowercase, a Number and Special Character!"
    )
    .max(30),
});
