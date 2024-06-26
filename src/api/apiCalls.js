import axios from "./api";
import { authEndpoints } from "./endpoints";

export const generateQuestionAnswerFromFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("files", file);

    const response = await axios.post(
      "/generate-question-answer-from-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Api call for file upload which gets the file and sends it to the backend
export const uploadFile = async (file, onProgress) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(authEndpoints.fileUpload, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: onProgress, // Attach the onProgress callback
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resumeAnalysis = async (file, resume) => {
  try {
    const formData = new FormData();
    formData.append("files", file);
    formData.append("job_description_file", resume);

    const response = await axios.post(authEndpoints.resumeAnalysis, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
