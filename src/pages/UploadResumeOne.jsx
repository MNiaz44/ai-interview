import React, { useState, useRef } from "react";
import filePic from "../assets/images/file.png";
import { GrDocumentText } from "react-icons/gr";
import { LuLink } from "react-icons/lu";
import { TfiText } from "react-icons/tfi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

import RepeatIcon from "@mui/icons-material/Repeat";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";

import Button from "../components/AuthPageComponents/UploadResumeButtons";
import Layout from "../components/Layout/Layout";
import JDAStepper from "../components/JDAnalysis/JDAStepper";
import ComparisonResult from "../components/ComparisonResult/ComparisonResult";
import PrimaryBtn from "../components/PrimaryButton/PrimaryButton";
import API from "../api/api";
import { authEndpoints } from "../api/endpoints";
import FileDropzone from "../components/JDAnalysis/FileDropzone";
import { resumeAnalysis, uploadFile } from "../api/apiCalls";
import UploadModal from "../components/UploadModal/UploadModal";

const ResumeAnalysis = () => {
  const [activeButton, setActiveButton] = useState("files");
  const [activeStep, setActiveStep] = useState(0);

  const [fileUrlPath, setFileUrlPath] = useState(null);
  const [resumeUrlPath, setResumeUrlPath] = useState(null);

  const [isUpload, setIsUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [resume, setResume] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [fileName, setFileName] = useState("");

  const [analysisData, setAnalysisData] = useState({});

  // for file upload progress
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedBytes, setUploadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);
  const [uploading, setUploading] = useState(false);

  const fileUploadRef = useRef(null);
  const ResumeUploadRef = useRef(null);
  const [uploadError, setUploadError] = useState("");
  const [resumeError, setResumeError] = useState("");

  const [newFile, setNewFile] = useState("");
  const [newResume, setNewResume] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const uploadFile = async (file) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file); // Append the file to FormData
  //     console.log("FormData:", formData);

  //     const response = await API.post(authEndpoints.fileUpload, formData);

  //     if (response.ok) {
  //       console.log("File uploaded successfully");
  //     } else {
  //       console.error("Failed to upload file. Status:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

  const handleImageUploadClick = () => {
    fileUploadRef?.current?.click();

    console.log("fileUploadRef is ", fileUploadRef);
  };

  const handleResumeUploadClick = () => {
    ResumeUploadRef?.current?.click();

    console.log("ResumeUploadRef is ", ResumeUploadRef);
  };

  const handleFileUpload = async (files) => {
    try {
      console.log("files are ", files);
      const file = files[0];
      const totalSize = file.size;

      if (!file) return;

      setFileName(file?.name);

      setTotalBytes(totalSize);
      setUploading(true);

      console.log("file is ", file);

      console.log("fileName is ", file?.name);

      // if (file.size > 1024 * 1024 * 1) {
      //   setUploadError("Picture size should be less than 1MB");
      //   return;
      // }

      const acceptedFiles = [
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
      ];

      if (!acceptedFiles.includes(file.type)) {
        setUploadError("Selected file must be a pdf, doc, docx or txt file");
        setFile(null);
        setFileName("");
        setIsUpload(false);
        setProgress(0);
        setTotalBytes(0);
        setUploadedBytes(0);
        setUploadProgress(0);
        setUploading(false);
        return;
      }
      // const fileType = file.type.split("/")[1];
      // if (
      //   fileType !== "pdf" &&
      //   fileType !== "doc" &&
      //   fileType !== "docx" &&
      //   fileType !== "txt"
      // ) {
      //   setUploadError("Selected file must be a pdf, doc, docx or txt file");
      //   return;
      // }

      // const response = await uploadFile(file);
      // console.log("response is ", response);

      const response = await uploadFile(file, (progressEvent) => {
        const uploaded = progressEvent.loaded;
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadedBytes(uploaded);
        setUploadProgress(percentCompleted);
      });

      console.log("response is ", response);

      setUploadError("");
      setIsUpload(true);
      setFile(file);
      setFileName("");
      setTotalBytes(0);
      setUploadedBytes(0);
      setUploadProgress(0);
      setUploading(false);
      // setFile({
      //   file: URL.createObjectURL(file),
      //   name: file.name,
      //   size: file.size / (1024 * 1024),
      // });
    } catch (error) {
      console.log("error is ", error);
      setUploadError(error?.message);
    }
  };

  const handleResumeUpload = async (files) => {
    try {
      console.log("files are ", files);
      const file = files[0];
      const totalSize = file.size;

      if (!file) return;

      setFileName(file?.name);

      setTotalBytes(totalSize);
      setUploading(true);

      console.log("file is ", file);

      console.log("fileName is ", file?.name);

      // if (file.size > 1024 * 1024 * 1) {
      //   setUploadError("Picture size should be less than 1MB");
      //   return;
      // }

      const acceptedFiles = [
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
      ];

      if (!acceptedFiles.includes(file.type)) {
        setUploadError("Selected file must be a pdf, doc, docx or txt file");
        setResume(null);
        setFileName("");
        setIsUpload(false);
        setProgress(0);
        setTotalBytes(0);
        setUploadedBytes(0);
        setUploadProgress(0);
        setUploading(false);
        return;
      }
      // const fileType = file.type.split("/")[1];
      // if (
      //   fileType !== "pdf" &&
      //   fileType !== "doc" &&
      //   fileType !== "docx" &&
      //   fileType !== "txt"
      // ) {
      //   setUploadError("Selected file must be a pdf, doc, docx or txt file");
      //   return;
      // }

      // const response = await uploadFile(file);
      // console.log("response is ", response);

      const response = await uploadFile(file, (progressEvent) => {
        const uploaded = progressEvent.loaded;
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadedBytes(uploaded);
        setUploadProgress(percentCompleted);
      });

      console.log("response is ", response);

      setUploadError("");
      setIsUpload(true);
      setResume(file);
      setFileName("");
      setTotalBytes(0);
      setUploadedBytes(0);
      setUploadProgress(0);
      setUploading(false);
      // setFile({
      //   file: URL.createObjectURL(file),
      //   name: file.name,
      //   size: file.size / (1024 * 1024),
      // });
    } catch (error) {
      console.log("error is ", error);
      setUploadError(error?.message);
    }
  };

  // const handleResumeUpload = async (files) => {
  //   try {
  //     // setResume(null);
  //     console.log("files are ", files);
  //     const file = files[0];

  //     console.log("file is ", file);

  //     console.log("fileName is ", file?.name);

  //     if (!file) return;

  //     if (file.size > 1024 * 1024 * 1) {
  //       setResumeError("Resume size should be less than 1MB");
  //       return;
  //     }

  //     const fileType = file.type.split("/")[1];
  //     if (
  //       fileType !== "pdf" &&
  //       fileType !== "doc" &&
  //       fileType !== "docx" &&
  //       fileType !== "txt"
  //     ) {
  //       setResumeError("Selected file must be a pdf, doc, docx or txt file");
  //       return;
  //     }
  //     setNewResume(file); // Update newResume state with the uploaded file

  //     const response = await uploadFile(file);
  //     console.log("response of resume is ", response.urlPath);

  //     setResumeUrlPath(response.urlPath);
  //     setResumeError("");
  //     setIsUpload(true);
  //     setResume({
  //       file: URL.createObjectURL(file),
  //       name: file.name,
  //       size: file.size / (1024 * 1024),
  //     });
  //   } catch (error) {
  //     console.log("Resume Error ", error);
  //     setResumeError(error?.message);
  //   }
  // };

  const handleResumeAnalysis = async () => {
    console.log("New File:", newFile);
    console.log("New Resume:", newResume);

    setIsLoading(true);
    try {
      if (!file || !resume) {
        console.error("Please upload both files before analysis.");
        return;
      }

      handleNext();

      const response = await resumeAnalysis(file, resume);
      console.log("Resume analysis response:", response?.Resume_Evaluation);

      handleResponse(response);
    } catch (error) {
      setIsLoading(false);
      handleBack();
      console.error("Error occurred during resume analysis:", error);
    }
  };

  const handleResponse = (response) => {
    if (response) {
      console.log("Response data:", response.Resume_Evaluation);
      setAnalysisData(response.Resume_Evaluation);
      setIsLoading(false);
      handleNext();
    } else {
      console.error("Invalid response:", response);
      setIsLoading(false);
    }
  };

  const handlePageReset = () => {
    // Reload the current page
    window.location.reload();
  };

  const handleDeleteFile = () => {
    // setUploadedFile(null);
    setFile(null);
  };

  const handleDeleteResume = () => {
    // setUploadedFile(null);
    setResume(null);
  };

  if (activeStep === 0 || activeStep === 1) {
    return (
      <Layout>
        <div className="px-5">
          <div className="w-full flex justify-center">
            <div className="w-[70%]">
              <JDAStepper
                steps={[
                  {
                    label: "Upload",
                    // icon would be  a function that accepts sx props
                    icon: function Icon(color) {
                      return <LoginIcon sx={{ color: color }} />;
                    },
                  },
                  {
                    label: "Analysis",
                    icon: function Icon(color) {
                      return <RepeatIcon sx={{ color: color }} />;
                    },
                  },
                  {
                    label: "Results",
                    icon: function Icon(color) {
                      return <DescriptionIcon sx={{ color: color }} />;
                    },
                  },
                ]}
                activeStep={activeStep}
              />
            </div>
          </div>

          <UploadModal
            open={uploading}
            progress={uploadProgress}
            uploadedBytes={uploadedBytes}
            totalBytes={totalBytes}
            file={file}
            fileName={fileName}
          />

          <div className="grid gap-4 lg:grid-cols-2 py-8">
            <div className="bg-gray-200 pt-0 rounded-lg shadow-lg">
              <div className="bg-primary-bg-color rounded-t-lg py-2 flex justify-center">
                <p className="font-bold text-large-text text-heading-primary-white px-4 flex justify-between items-center w-full max-w-5xl">
                  Resume Input
                </p>
              </div>
              <div className="px-5">
                <div className="flex justify-between">
                  <p className="text-large-text font-bold m-4">
                    Choose What You Want To Upload
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-medium-text font-normal mx-4 mb-4">
                    Select file format to upload.
                  </p>
                </div>

                <div className="flex">
                  <div className="flex">
                    <Button
                      className={`flex text-medium-text gap-1 rounded-3xl font-normal ${
                        activeButton === "files"
                          ? "bg-light-primary-color text-primary-bg-color"
                          : "bg-light-sub-heading-color text-sub-heading-color"
                      } m-4`}
                      onClick={() => handleButtonClick("files")}
                    >
                      <GrDocumentText className="m-auto" />
                      Files
                    </Button>

                    {/* <Button
                      className={`flex text-medium-text gap-1 rounded-3xl font-normal ${
                        activeButton === "link"
                          ? "bg-light-primary-color text-primary-bg-color"
                          : "bg-light-sub-heading-color text-sub-heading-color"
                      } m-4`}
                      onClick={() => handleButtonClick("link")}
                    >
                      <LuLink className="m-auto" />
                      Paste Link
                    </Button> */}
                  </div>
                  {/* <Button
                    className={`flex text-medium-text gap-1 rounded-3xl font-normal ${
                      activeButton === "text"
                        ? "bg-light-primary-color text-primary-bg-color"
                        : "bg-light-sub-heading-color text-sub-heading-color"
                    } m-4`}
                    onClick={() => handleButtonClick("text")}
                  >
                    <TfiText className="m-auto" />
                    Paste Text
                  </Button> */}
                </div>

                <div className="w-full flex flex-col items-center justify-center h-[225px] p-[8px] border-dashed rounded-[5px] border-[3px] border-[#52525B]">
                  <FileDropzone
                    handleFileUpload={handleFileUpload}
                    handleImageUploadClick={handleImageUploadClick}
                    imageUploadRef={fileUploadRef}
                    uploadError={uploadError}
                  />
                </div>

                {file ? (
                  <div className="flex m-4 p-2 w-fit rounded-2xl bg-light-primary-color">
                    <p>File Uploaded:</p>
                    <IoDocumentTextOutline className="m-1 text-primary-bg-color" />
                    <p className="text-primary-bg-color">{file.name}</p>
                    <button
                      className="pl-8 pr-1 text-danger"
                      onClick={handleDeleteFile}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                ) : (
                  <div className="flex p-4">
                    <p className="text-light-sub-heading-color">
                      Support Format:
                      <span className="px-1"> .doc, .pdf, and .txt </span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-200 pt-0 rounded-lg shadow-lg">
              <div className="bg-primary-bg-color rounded-t-lg py-2 flex justify-center">
                <p className="font-bold text-large-text text-heading-primary-white px-4 flex justify-between items-center w-full max-w-5xl">
                  Job Description Input
                </p>
              </div>
              <div className="px-5">
                <div className="flex justify-between">
                  <p className="text-large-text font-bold m-4">
                    Choose What You Want To Upload
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-medium-text font-normal mx-4 mb-4">
                    Select file format to upload.
                  </p>
                </div>

                <div className="flex">
                  <Button
                    className={`flex text-medium-text gap-1 rounded-3xl font-normal ${
                      activeButton === "files"
                        ? "bg-light-primary-color text-primary-bg-color"
                        : "bg-light-sub-heading-color text-sub-heading-color"
                    } m-4`}
                    onClick={() => handleButtonClick("files")}
                  >
                    <GrDocumentText className="m-auto" />
                    Files
                  </Button>
                  <div className="flex">
                    {/* <Button
                      className={`flex text-medium-text gap-1 rounded-3xl font-normal ${
                        activeButton === "link"
                          ? "bg-light-primary-color text-primary-bg-color"
                          : "bg-light-sub-heading-color text-sub-heading-color"
                      } m-4`}
                      onClick={() => handleButtonClick("link")}
                    >
                      <LuLink className="m-auto" />
                      Paste Link
                    </Button>

                    <Button
                      className={`flex text-medium-text gap-1 rounded-3xl font-normal ${
                        activeButton === "text"
                          ? "bg-light-primary-color text-primary-bg-color"
                          : "bg-light-sub-heading-color text-sub-heading-color"
                      } m-4`}
                      onClick={() => handleButtonClick("text")}
                    >
                      <TfiText className="m-auto" />
                      Paste Text
                    </Button> */}
                  </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center h-[225px] p-[8px] border-dashed rounded-[5px] border-[3px] border-[#52525B]">
                  <FileDropzone
                    handleFileUpload={handleResumeUpload}
                    handleImageUploadClick={handleResumeUploadClick}
                    imageUploadRef={ResumeUploadRef}
                    uploadError={resumeError}
                  />
                </div>

                {resume ? (
                  <div className="flex m-4 p-2 w-fit rounded-2xl bg-light-primary-color">
                    <p>File Uploaded:</p>
                    <IoDocumentTextOutline className="m-1 text-primary-bg-color" />
                    <p className="text-primary-bg-color">{resume.name}</p>
                    <button
                      className="pl-8 pr-1 text-danger"
                      onClick={handleDeleteResume}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                ) : (
                  <div className="flex p-4">
                    <p className="text-light-sub-heading-color">
                      Support Format:
                      <span className="px-1"> .doc, .pdf, and .txt </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg ">
            <div className=" rounded-t-lg pr-2 flex justify-end">
              <div className="w-fit">
                <PrimaryBtn
                  title={"Next"}
                  type={"button"}
                  isNext
                  disabled={isLoading}
                  isLoading={isLoading}
                  handleClick={handleResumeAnalysis}
                />
              </div>
              {/* <button
                onClick={handleResumeAnalysis}
                // onClick={handleNext}
                disabled={!file || !resume}
                className="bg-primary-bg-color text-heading-primary-white py-2 px-4 text-center rounded-lg flex"
              >
                Next
                <FaArrowRightLong className="ml-2 justify-center my-auto" />
              </button> */}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (activeStep === 2) {
    return (
      <Layout>
        <div className="px-5">
          <div className="w-full flex justify-center">
            <div className="w-[70%]">
              <JDAStepper
                steps={[
                  {
                    label: "Upload",
                    // icon would be  a function that accepts sx props
                    icon: function Icon(color) {
                      return <LoginIcon sx={{ color: color }} />;
                    },
                  },
                  {
                    label: "Analysis",
                    icon: function Icon(color) {
                      return <RepeatIcon sx={{ color: color }} />;
                    },
                  },
                  {
                    label: "Results",
                    icon: function Icon(color) {
                      return <DescriptionIcon sx={{ color: color }} />;
                    },
                  },
                ]}
                activeStep={activeStep}
              />
            </div>
          </div>
          <ComparisonResult analysisData={analysisData} />

          <div className={`w-full flex justify-between p-15`}>
            <div className="w-fit">
              <PrimaryBtn
                handleClick={handlePageReset}
                title={"Back"}
                type={"button"}
                isPrevious
              />
            </div>

            <div className="w-fit">
              <PrimaryBtn
                title={"Done"}
                type={"button"}
                isNext
                handleClick={handlePageReset}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default ResumeAnalysis;
