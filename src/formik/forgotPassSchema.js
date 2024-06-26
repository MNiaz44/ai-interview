import * as Yup from "yup";

const emailDomainExp = /^[^\s@]+@(?:[^\s@]+\.)+(com|org|net|pk|edu|gov)$/i;

export const forgotPassSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required")
    .matches(emailDomainExp, "Invalid domain"),
});
