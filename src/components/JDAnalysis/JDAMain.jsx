import React, { useRef, useState } from "react";
import JDAStepper from "./JDAStepper";
import { Typography } from "@mui/material";
import FileDropzone from "./FileDropzone";
import PrimaryBtn from "../PrimaryButton/PrimaryButton";
import RepeatIcon from "@mui/icons-material/Repeat";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";
import { generateQuestionAnswerFromFile, uploadFile } from "../../api/apiCalls";
import UploadModal from "../UploadModal/UploadModal";

const JDAMain = ({
  activeStep,
  setIsGeneratingQuestions,
  setQuestionsData,
}) => {
  const [isUpload, setIsUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [fileName, setFileName] = useState("");

  // for file upload progress
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedBytes, setUploadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);
  const [uploading, setUploading] = useState(false);

  const [loadingQuestions, setLoadingQuestions] = useState(false);

  // const [data, setData] = useState(null);

  const fileUploadRef = useRef(null);
  const [uploadError, setUploadError] = useState("");

  const [progress, setProgress] = useState(0);

  const handleImageUploadClick = () => {
    fileUploadRef?.current?.click();

    console.log("fileUploadRef is ", fileUploadRef);
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

  const handleDeleteImage = () => {
    setFile(null);
    setIsUpload(false);
  };

  const handleGenerateQuestions = async () => {
    setLoadingQuestions(true);
    try {
      const fileData = file;
      // "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
      const responseData = await generateQuestionAnswerFromFile(fileData);
      setQuestionsData(responseData["INTERVIEW QUESTIONS & ANSWERS"]);
      setIsGeneratingQuestions(true);
    } catch (error) {
      setUploadError(error?.message);
    }
    setLoadingQuestions(false);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-[white] w-[95%] h-fit p-[15px] rounded-2xl border-solid border-[1px] border-[lightgray] ">
        <div className="w-full flex mb-[50px]">
          <div className="w-[50%]">
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Poppins",
                textTransform: "capitalize",
                color: "#333333",
                marginBottom: "10px",
              }}
            >
              Choose what you want to upload
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Poppins",
                color: "#333333",
                marginBottom: "30px",
              }}
            >
              Select file format to upload.
            </Typography>

            <div className="flex gap-[15px]">
              {[
                { name: "Files", icon: "/Images/file.svg" },
                { name: "Paste Link", icon: "/Images/link.svg" },
                { name: "Paste Text", icon: "/Images/text.svg" },
              ].map((item, index) => (
                <div className="bg-[#eeeeef] rounded-full px-[10px] py-[5px] text-[#52525B] font-poppins capitalize flex items-center gap-x-[10px]">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-[20px] h-[20px]"
                  />{" "}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%]">
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

        <div className="w-full flex flex-col items-center justify-center h-[225px] p-[8px] border-dashed rounded-[5px] border-[3px] border-[#52525B]">
          <FileDropzone
            handleFileUpload={handleFileUpload}
            handleImageUploadClick={handleImageUploadClick}
            imageUploadRef={fileUploadRef}
            uploadError={uploadError}
          />
        </div>

        <UploadModal
          open={uploading}
          progress={uploadProgress}
          uploadedBytes={uploadedBytes}
          totalBytes={totalBytes}
          file={file}
          fileName={fileName}
        />

        {isUpload ? (
          <div className="flex items-center gap-x-[15px] w-fit px-[10px] py-[5px] rounded-full bg-[#e6edfe] my-[30px]">
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Poppins",
                fontWeight: "400",
                color: "#090914",
                display: "flex",
                alignItems: "center",
                // marginTop: "30px",
                // marginBottom: "30px",
              }}
            >
              File Uploaded:{" "}
              <img
                src="/Images/file.svg"
                alt="file"
                className="ml-[10px] w-[20px]"
              />
              <span className="ml-[5px] !text-baby-blue">{file?.name}</span>
            </Typography>

            <img
              onClick={handleDeleteImage}
              src="/Images/trash.svg"
              alt="trash-icon"
              className="w-[20px] cursor-pointer"
            />
          </div>
        ) : (
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#52525B",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Support Format:{" "}
            <span className="ml-[10px]">.doc,.pdf and .txt</span>
          </Typography>
        )}

        <div
          className={`w-full flex ${
            isUpload ? "justify-between" : "justify-end"
          }`}
        >
          {isUpload && (
            <div className="w-fit">
              <PrimaryBtn
                title={"Back"}
                type={"button"}
                isPrevious
                disabled={loadingQuestions}
              />
            </div>
          )}
          <div className="w-fit">
            {isUpload ? (
              <PrimaryBtn
                title={"Generate Questions"}
                type={"button"}
                isNext
                disabled={loadingQuestions}
                isLoading={loadingQuestions}
                handleClick={handleGenerateQuestions}
              />
            ) : (
              <PrimaryBtn
                title={"Next"}
                type={"button"}
                isNext
                disabled={!isUpload}
                handleClick={handleGenerateQuestions}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JDAMain;
