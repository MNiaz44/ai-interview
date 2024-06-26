import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import {
  ForgotPass,
  SignUp,
  NewPass,
  OtpVerify,
  Login,
  ForgotPassOtpVerify,
  Report,
  Profile,
  ResumeAnalysis,
  HomePage,
  JDAnalysis,
  Questions,
} from "./pages";

// Define a higher-order component for authentication
const Auth = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists in local storage
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to={routes.logIn} />
  );
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={routes.SignUp} element={<SignUp />} />
      <Route path={routes.logIn} element={<Login />} />
      <Route path={routes.forgotPassword} element={<ForgotPass />} />
      <Route path={routes.verifycode} element={<OtpVerify />} />
      <Route
        path={routes.forgotPassVerifycode}
        element={<ForgotPassOtpVerify />}
      />
      <Route path={routes.resetPassword} element={<NewPass />} />
      <Route path={routes.questions} element={<Questions />} />

      {/* Protected Routes */}
      <Route path={routes.index} element={<Auth element={HomePage} />} />
      <Route path={routes.reportPage} element={<Auth element={Report} />} />
      <Route path={routes.profilePage} element={<Auth element={Profile} />} />
      <Route
        path={routes.resumeAnalysis}
        element={<Auth element={ResumeAnalysis} />}
      />
      <Route path={routes.jdAnalysis} element={<Auth element={JDAnalysis} />} />
      <Route path={routes.settings} element={<Auth element={Profile} />} />
    </Routes>
  );
}

export default App;
