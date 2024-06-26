/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-bg-color": "#084DF2",
      "light-primary-color": "#CDDBFC",
      "sub-heading-color": "#52525B",
      "light-sub-heading-color": "#DCDCDE",
      "heading-color": "#090914",
      "heading-primary-white": "#FFFFFF",
      "baby-blue": "#084DF2",
      "secondary-text": "#F4F4F4",
      "line-color": "#EEEEF4",
      "uploadFileBorder": "#CBD5E1",
      "danger": "#FF0000",
     "green-color": "#21BB02",
     "Yellow-color": "#F6E902",
     "blue-questions": "#1727C6",
    "Search-icon-color": "#5D5FEF"
    },
    fontSize: {
      "extrasmall-text": "14px",
      "small-text": "16px",
      "medium-text": "18px",
      "large-text": "24px",
      "xlarge-text": "70px",
      "heading-text": "52px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
