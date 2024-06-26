import React, { useState, useRef, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import profilePic from "../assets/images/profile.png";
import uploadImage from "../assets/images/upload.png";
import Button from "../components/AuthPageComponents/ProfileButton";
import PasswordField from "../components/AuthPageComponents/PasswordInput";
import Layout from "../components/Layout/Layout";
import { authEndpoints } from "../api/endpoints";
import API from "../api/api";
import { toast } from "react-toastify";
import AppContext from "../AppContext";

const Profile = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [showProfile, setShowProfile] = useState(true);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const fileInputRef = useRef(null);
  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUpload(file);
    }
  };

  const updatePassword = async () => {
    try {
      // Check if newPassword and confirmPassword match
      if (newPassword === confirmPassword) {
        const passwordData = {
          currentPassword: currentPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        };

        const token = localStorage.getItem("token");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await API.put(
          authEndpoints.updateProfile,
          passwordData,
          {
            headers: {
              ...headers,
            },
          }
        );

        if (response.status >= 200 && response.status < 300) {
          toast.success("Password updated successfully");

          // Reset password fields
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        } else {
          console.log("++++", response);
          toast.error("Failed to update password. Status:", response.status);
        }
      } else {
        toast.error("New password and confirm password do not match.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await API.put(authEndpoints.updateProfile, userData, {
        headers: {
          ...headers,
        },
      });

      if (response.status >= 200 && response.status < 300) {
        console.log("User data updated successfully:", response.data);
        // Update user firstName lastName and email in context
        setUserInfo({
          ...userInfo,
          firstName: firstName,
          lastName: lastName,
          email: email,
        });

        toast.success("Update profile successfully");
      } else {
        console.error("Failed to update user data. Status:", response.status);
        console.error("Response:", response.data);
        toast.error("The profile is not updated");
      }
    } catch (error) {
      toast.error("Error updating user data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(authEndpoints.getUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.user;

      setEmail(userData.email);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);

      console.log("Data from /api/user:", userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData function
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="text-center  w-[90%] md:w-[50%] ">
          <p className="text-[32px] font-bold mt-8">Profile Settings</p>
          <div className="mt-4 flex justify-center">
            <img
              src={image ? image : profilePic}
              alt="Profile Image"
              className="rounded-full w-28 h-28"
            />
          </div>
          <div className="flex justify-center mt-4 gap-14">
            <button
              className={` text-extrasmall-text ${
                showProfile ? "text-primary-bg-color font-bold " : ""
              }`}
              onClick={() => setShowProfile(true)}
            >
              Profile
            </button>
            <button
              className={` text-extrasmall-text ${
                showProfile
                  ? " text-sub-heading-color"
                  : "font-bold text-primary-bg-color "
              }`}
              onClick={() => setShowProfile(false)}
            >
              Password
            </button>
          </div>
          <hr className="h-1 text-line-color" />
          {/* profile div start */}
          {showProfile && (
            <div>
              <div className="md:flex justify-center pt-5 mb:pb-4">
                <div>
                  <p className="text-left pl-5 md:pl-3 text-extrasmall-text font-medium">
                    First Name
                  </p>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        size="small"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </Box>
                </div>
                <div>
                  <p className="text-left pl-5 md:pl-3 text-extrasmall-text font-medium">
                    Last Name
                  </p>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        size="small"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </Box>
                </div>
              </div>
              <div className="md:flex justify-center md:mt-2  mb:pb-4">
                <div>
                  <p className="text-left pl-5 md:pl-3 text-extrasmall-text font-medium">
                    Email
                  </p>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                      "@media (min-width: 640px)": {
                        "& .MuiTextField-root": { width: "52ch" },
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        size="small"
                        value={email}
                        disabled
                      />
                    </div>
                  </Box>
                </div>
              </div>
              <div className="md:flex justify-center md:mt-2  mb:pb-4 pb-5">
                <div>
                  <p className="text-left pl-5 md:pl-2 pb-2 text-extrasmall-text font-medium">
                    Upload Image
                  </p>
                  <div
                    className="border h-32 md:h-28 md:w-[520px] justify-center items-center cursor-pointer rounded-lg border-uploadFileBorder"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current.click()}
                  >
                    {/* Input file */}
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                      ref={fileInputRef}
                    />
                    {/* Image preview */}
                    <img
                      src={uploadImage}
                      alt="Profile Image"
                      className="rounded-full w-9 h-9 my-3 mx-auto justify-center"
                    />
                    <p className="text-extrasmall-text font-medium text-center mx-[20%]">
                      Click to upload or drag and drop SVG, PNG, JPG, or GIF
                      (max, 800x400px)
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:mt-2 gap-5 pb-5">
                <div>
                  <Button className="border-primary-bg-color w-[10rem] border bg-heading-primary-white hover:bg-primary-bg-color text-small-text font-semibold text-primary-bg-color hover:text-heading-primary-white">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={handleSubmit}
                    className="border-primary-bg-color w-[10rem] border bg-primary-bg-color hover:bg-heading-primary-white text-small-text font-semibold text-heading-primary-white hover:text-primary-bg-color"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}
          {/* profile div end */}

          {!showProfile && (
            <div>
              {/* Password view */}
              <div className="flex justify-center">
                <div className="justify-center md:mt-2  mb:pb-4">
                  <div className="pb-4">
                    <p className="text-left pl-5 md:pl-3 text-extrasmall-text font-medium pb-1">
                      Current Password
                    </p>
                    <PasswordField
                      variant="outlined"
                      fullWidth
                      size="small"
                      style={{ width: "25rem" }}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="pb-4">
                    <p className="text-left pl-5 md:pl-3 text-extrasmall-text font-medium pb-1">
                      New Password
                    </p>
                    <PasswordField
                      variant="outlined"
                      fullWidth
                      size="small"
                      style={{ width: "25rem" }}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="pb-4">
                    <p className="text-left pl-5 md:pl-3 text-extrasmall-text font-medium pb-1">
                      Confirm Password
                    </p>
                    <PasswordField
                      variant="outlined"
                      fullWidth
                      size="small"
                      style={{ width: "25rem" }}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:mt-2 gap-5 pb-5">
                <div>
                  <Button className="border-primary-bg-color w-[10rem] border bg-heading-primary-white hover:bg-primary-bg-color text-small-text font-semibold text-primary-bg-color hover:text-heading-primary-white">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={updatePassword}
                    className="border-primary-bg-color w-[10rem] border bg-primary-bg-color hover:bg-heading-primary-white text-small-text font-semibold text-heading-primary-white hover:text-primary-bg-color"
                  >
                    Save
                  </Button>
                </div>
              </div>
              {/* Password view end */}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
