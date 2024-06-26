import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const FileUploadProgressBar = ({
  progress,
  uploadedBytes,
  totalBytes,
  file,
  fileName,
}) => {
  const totalMB = totalBytes / (1024 * 1024);
  const uploadedMB = uploadedBytes / (1024 * 1024);

  return (
    <div className="w-full flex justify-center items-center gap-x-[30px]">
      <img
        src="/Images/fileType.svg"
        alt="file"
        className="w-[40px] h-[40px]"
      />
      <div className="w-full flex flex-col justify-center gap-[5px]">
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            fontFamily: "Poppins",
            lineHeight: "18px",
            textTransform: "capitalize",
            color: "#000000",
          }}
        >
          {fileName}
        </Typography>

        <LinearProgress variant="determinate" value={progress} />
        <div className="flex items-center justify-between">
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "Poppins",
              lineHeight: "18px",
              textTransform: "capitalize",
              color: "#797979",
            }}
          >
            {uploadedMB.toFixed(2)} MB of {totalMB.toFixed(2)} Mb
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "Poppins",
              lineHeight: "18px",
              textTransform: "capitalize",
              color: "#52525B",
            }}
          >
            Uploading... {progress.toFixed(2)}%
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FileUploadProgressBar;
