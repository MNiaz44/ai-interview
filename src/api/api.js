import axios from "axios";

const API = axios.create({
  baseURL: "http://44.219.147.77",
  headers: {
    "Content-Type": "application/json",
    // Authorization:
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MTJ9LCJpYXQiOjE3MTE5NjMxNTEsImV4cCI6MTcxMTk2Njc1MX0.qxUrilrY0VFA7uwpZOTL1t9pSIdOVjVoJo403D9QMRQ",
  },
});

// Function to set the authorization token
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
