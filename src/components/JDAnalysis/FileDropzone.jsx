import { Typography } from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = ({
  handleFileUpload,
  handleImageUploadClick,
  imageUploadRef,
  uploadError,
}) => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop: (files) => {
      console.log("files are ", files);
      handleFileUpload(files);
    },
  });
  return (
    <div className="w-full h-full">
      <div {...getRootProps({ className: "dropzone w-full h-full " })}>
        {/* <input {...getInputProps()} /> */}
        <Typography
          sx={{
            fontSize: "14px !important",
            fontFamily: "Poppins",
            fontWeight: "400 !important",
            lineHeight: "normal",
            color: "#090909",
            letterSpacing: "0.5px !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            width: "100%",
            height: "100%",
            // border: '1px solid red',
          }}
        >
          <img
            src="/Images/photo-icon.svg"
            alt="photo-icon"
            className="w-[100px] h-[100px] cursor-pointer"
            onClick={open}
          />
          <span>
            Drag and drop or{" "}
            <span
              onClick={open}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#084DF2",
              }}
            >
              browse
            </span>{" "}
            your file
          </span>

          <input
            // ref={imageUploadRef}
            {...getInputProps()}
            // type='file'
            // onChange={(e) => handleFileUpload(e)}
            // className='hidden'
          />

          <span style={{ color: "red" }}>{uploadError}</span>
        </Typography>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </div>
  );
};

export default FileDropzone;
