export const authEndpoints = {
  login: "/api/auth/login",
  signup: "/api/auth/sign-up",
  forgotPassword: "/api/auth/forgot-password",
  resetPassword: "/api/auth/reset-password",
  signupVerifyOTP: "/api/auth/verify",
  forgotPassVerifyOTP: "/api/auth/verify/otp",
  getReports: "/api/analysis/recentactivity",
  getUserData: "/api/user",
  updateProfile: "/api/user/update",
  signUpQuestions: "/api/question/save-question",
  fileUpload: "/api/upload",
  resumeAnalysis: "/resume-improvement-suggestions"
};

export const paymentEndpoints = {
  checkoutSession: "/payment/create-checkout-session",
};

