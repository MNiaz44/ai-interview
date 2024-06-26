import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FileUploadProgressBar from "./FileUploadProgressBar";

const UploadModal = ({
  open,
  progress,
  uploadedBytes,
  totalBytes,
  file,
  fileName,
}) => {
  return (
    <Modal
      open={open}
      aria-labelledby="file-upload-modal-title"
      aria-describedby="file-upload-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: "15px",
          width: "630px",
          height: "200px",
          maxWidth: "80%",
        }}
      >
        <div className="w-full flex justify-end relative">
          <img
            src="/Images/close.svg"
            alt="close-icon"
            className="w-[25px] h-[25px]"
          />
        </div>
        <div className="w-full px-[100px] mt-[45px]">
          <FileUploadProgressBar
            progress={progress}
            uploadedBytes={uploadedBytes}
            totalBytes={totalBytes}
            file={file}
            fileName={fileName}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default UploadModal;
