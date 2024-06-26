import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPass: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
