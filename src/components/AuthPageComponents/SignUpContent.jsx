import AuthPageLeft from "./AuthPageLeft";
import AuthPageRight from "./AuthPageRight";
import { useNavigate } from "react-router-dom";

const SignUpContent = ({ heading, subHeading, content }) => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <>
      <AuthPageLeft />
      <AuthPageRight />
    </>
  );
};
export default SignUpContent;
