import React, { useState } from "react";
import AuthPageLeft from "../components/AuthPageComponents/AuthPageLeft";
import smallLogo from "../assets/images/QAlogo.png";
import API from "../api/api";
import { authEndpoints } from "../api/endpoints";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { toast } from "react-toastify";

const Questions = () => {
  const [ageGroup, setAgeGroup] = useState("");
  const [schoolGroup, setSchoolGroup] = useState("");
  const [currentlySchool, setCurrentlySchool] = useState("");
  const [appliesFor, setAppliesFor] = useState([]);
  const [currentlyWorking, setCurrentlyWorking] = useState("");
  const [workingExperience, setWorkingExperience] = useState("");

  const navigate = useNavigate();

  const handleWorkingExperienceChange = (e) => {
    setWorkingExperience(e.target.value);
  };

  const handleCurrentlyWorkingChange = (e) => {
    setCurrentlyWorking(e.target.value);
  };

  const handleWhatToDoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAppliesFor([...appliesFor, value]);
    } else {
      setAppliesFor(appliesFor.filter((item) => item !== value));
    }
  };
  const handleAgeGroupChange = (e) => {
    setAgeGroup(e.target.value);
  };
  const handleSchoolGroupChange = (e) => {
    setSchoolGroup(e.target.value);
  };

  const handleCurrentlySchoolChange = (e) => {
    setCurrentlySchool(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !ageGroup ||
  //     appliesFor.length === 0 ||
  //     !currentlyWorking ||
  //     !workingExperience
  //   ) {
  //     alert("Please answer all the questions.");
  //     console.log("Please answer all the questions.");

  //     return;
  //   }

  //   if ((schoolGroup === "true" && !currentlySchool) || !schoolGroup) {
  //     alert("Please select your current school.");
  //     console.log("Please answer all the questions.");

  //     return;
  //   }

  //   try {
  //     const token = localStorage.getItem("token");

  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };

  //     const formData = {
  //       age: ageGroup,
  //       school: schoolGroup,
  //       // school_type: currentlySchool,
  //       applies: appliesFor.join(", "),
  //       working: currentlyWorking,
  //       experience: workingExperience,
  //     };

  //     // if (schoolGroup && schoolGroup !== "false") {
  //     //   formData["school_type"] = currentlySchool;
  //     // }

  //     // Check if schoolGroup is true and not equal to the string "false"
  //     if (schoolGroup && schoolGroup !== "false") {
  //       // Set currentlySchool to a non-empty value
  //       formData["school_type"] = currentlySchool;
  //     } else {
  //       // Set currentlySchool to an empty string
  //       formData["school_type"] = "";
  //     }

  //     console.log("Form Data:", formData); // Log form data before API call

  //     const response = await API.post(authEndpoints.signUpQuestions, formData, {
  //       headers: {
  //         ...headers,
  //       },
  //     });
  //     if (response.status === 200) {
  //       alert("Form submitted successfully!");
  //       // Reset form fields after successful submission
  //       setAgeGroup("");
  //       setSchoolGroup("");
  //       setCurrentlySchool("");
  //       setAppliesFor([]);
  //       setCurrentlyWorking("");
  //       setWorkingExperience("");
  //     } else {
  //       console.error("Failed to submit form. Status:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !ageGroup ||
      appliesFor.length === 0 ||
      !currentlyWorking ||
      !workingExperience
    ) {
      toast.error("Please answer all the questions.");
      console.log("Please answer all the questions.");
      return;
    }

    if ((schoolGroup === "true" && !currentlySchool) || !schoolGroup) {
      toast.error("Please select your current school.");
      console.log("Please answer all the questions.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const formData = {
        age: ageGroup,
        school: schoolGroup === "true", // Convert string "true" to boolean true
        school_type: schoolGroup === "true" ? currentlySchool : "", // Set school_type if schoolGroup is true
        applies: appliesFor.join(", "),
        working: currentlyWorking === "true", // Convert string "true" to boolean true
        experience: workingExperience,
      };

      console.log("Form Data:", formData); // Log form data before API call

      const response = await API.post(authEndpoints.signUpQuestions, formData, {
        headers: {
          ...headers,
        },
      });
      console.log("Response", response);

      if (response?.data?.success) {
        alert("Form submitted successfully!");
        // Reset form fields after successful submission
        setAgeGroup("");
        setSchoolGroup("");
        setCurrentlySchool("");
        setAppliesFor([]);
        setCurrentlyWorking("");
        setWorkingExperience("");

        navigate(routes.logIn);
      } else {
        console.error("Failed to submit form. Status:", response.status);
        navigate(routes.logIn);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      navigate(routes.logIn);
    }
  };

  return (
    <>
      <div className="flex">
        <AuthPageLeft />
        <div className="flex flex-col w-[70%] ">
          <div className="text-center mx-auto">
            <img src={smallLogo} alt="small logo" />
          </div>
          <div className="text-center">
            <p className="text-heading-text font-semibold">
              Questions & Answers
            </p>
          </div>
          <div className="text-center w-[50%] mx-auto">
            <p className="text-medium-text font-normal">
              To better understand you and offer you the best solution, answers
              these questions.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mx-14 my-10">
              <div className=" mx-[10%] py-2">
                <p className="text-medium-text font-normal text-blue-questions">
                  Question One
                </p>
                <p className="text-medium-text font-bold my-3">
                  1- What is your age group?
                </p>

                <div className="mx-8 flex gap-5">
                  <div className="justify-between w-[50%]">
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="ageGroup"
                          value="Under 18"
                          checked={ageGroup === "Under 18"}
                          onChange={handleAgeGroupChange}
                          className="mr-2"
                        />
                        Under 18
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="ageGroup"
                          value="18-25"
                          checked={ageGroup === "18-25"}
                          onChange={handleAgeGroupChange}
                          className="mr-2"
                        />
                        18-25
                      </label>
                    </div>
                  </div>
                  <div className="justify-between w-[50%]">
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="ageGroup"
                          value="25-30"
                          checked={ageGroup === "25-30"}
                          onChange={handleAgeGroupChange}
                          className="mr-2"
                        />
                        25-30
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="ageGroup"
                          value="30+"
                          checked={ageGroup === "30+"}
                          onChange={handleAgeGroupChange}
                          className="mr-2"
                        />
                        30+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-[10%] py-2">
                <p className="text-medium-text font-normal text-blue-questions">
                  Question two
                </p>
                <p className="text-medium-text font-bold my-3">
                  2- Are you currently in school?
                </p>

                <div className="mx-8">
                  <div className="gap-5 flex ">
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="currentlyInSchool"
                          value="true"
                          checked={schoolGroup === "true"}
                          onChange={handleSchoolGroupChange}
                          className="mr-2"
                        />
                        yes
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="currentlyInSchool"
                          value="false"
                          checked={schoolGroup === "false"}
                          onChange={handleSchoolGroupChange}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                  {schoolGroup === "true" && (
                    <div>
                      <p className="text-medium-text font-bold my-3">
                        If Yes, then which applies
                      </p>
                      <div className="justify-between flex">
                        <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder bg-opacity-25 w-[75%]">
                          <select
                            value={currentlySchool}
                            onChange={handleCurrentlySchoolChange}
                            className="w-full bg-uploadFileBorder text-medium-text font-normal bg-opacity-5"
                          >
                            <option>Select</option>
                            <option value="secondary">Secondary</option>
                            <option value="high school">High School</option>
                            <option value="university">University</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className=" mx-[10%] py-2">
                <p className="text-medium-text font-normal text-blue-questions">
                  Question Three
                </p>
                <p className="text-medium-text font-bold my-3">
                  3- What applies most to you
                </p>

                <div className="mx-8 flex gap-5">
                  <div className="justify-between w-[50%]">
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="checkbox"
                          name="appliesFor"
                          value="Looking for a new job"
                          checked={appliesFor.includes("Looking for a new job")}
                          onChange={handleWhatToDoChange}
                          className="mr-2"
                        />
                        Looking for a new job
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="checkbox"
                          name="appliesFor"
                          value="Practice your interview skills"
                          checked={appliesFor.includes(
                            "Practice your interview skills"
                          )}
                          onChange={handleWhatToDoChange}
                          className="mr-2"
                        />
                        Practice your interview skills
                      </label>
                    </div>
                  </div>
                  <div className="justify-between w-[50%]">
                    <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="checkbox"
                          name="appliesFor"
                          value="Wanting to fix your resume"
                          checked={appliesFor.includes(
                            "Wanting to fix your resume"
                          )}
                          onChange={handleWhatToDoChange}
                          className="mr-2"
                        />
                        Wanting to fix your resume
                      </label>
                    </div>
                    {/* <div className="px-4 py-2 border mb-4 rounded-lg bg-uploadFileBorder  bg-opacity-25"></div> */}
                  </div>
                </div>
              </div>
              <div className=" mx-[10%] py-2">
                <p className="text-medium-text font-normal text-blue-questions">
                  Question Four
                </p>
                <p className="text-medium-text font-bold my-3">
                  4- Are you currently working?
                </p>

                <div className="mx-8">
                  <div className="gap-5 flex ">
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="currentlyWorking"
                          value="true"
                          checked={currentlyWorking === "true"}
                          onChange={handleCurrentlyWorkingChange}
                          className="mr-2"
                        />
                        yes
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-medium-text font-normal">
                        <input
                          type="radio"
                          name="currentlyWorking"
                          value="false"
                          checked={currentlyWorking === "false"}
                          onChange={handleCurrentlyWorkingChange}
                          className="mr-2"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-[10%] py-2">
                <p className="text-medium-text font-normal text-blue-questions">
                  Question Five
                </p>
                <p className="text-medium-text font-bold my-3">
                  5- How many years of work experience do you have?{" "}
                </p>

                <div className="mx-8">
                  <div className="gap-5 flex ">
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-blue-questions text-medium-text font-normal">
                        <input
                          type="radio"
                          name="workingExperience"
                          value="0-1"
                          checked={workingExperience === "0-1"}
                          onChange={handleWorkingExperienceChange}
                          className="mr-2"
                        />
                        0-1
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-blue-questions text-medium-text font-normal">
                        <input
                          type="radio"
                          name="workingExperience"
                          value="1-2"
                          checked={workingExperience === "1-2"}
                          onChange={handleWorkingExperienceChange}
                          className="mr-2"
                        />
                        1-2
                      </label>
                    </div>
                  </div>
                  <div className="gap-5 flex ">
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-blue-questions text-medium-text font-normal">
                        <input
                          type="radio"
                          name="workingExperience"
                          value="2-3"
                          checked={workingExperience === "2-3"}
                          onChange={handleWorkingExperienceChange}
                          className="mr-2"
                        />
                        2-3
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-blue-questions text-medium-text font-normal">
                        <input
                          type="radio"
                          name="workingExperience"
                          value="3-4"
                          checked={workingExperience === "3-4"}
                          onChange={handleWorkingExperienceChange}
                          className="mr-2"
                        />
                        3-4
                      </label>
                    </div>
                  </div>
                  <div className="gap-5 flex ">
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-blue-questions text-medium-text font-normal">
                        <input
                          type="radio"
                          name="workingExperience"
                          value="4-5"
                          checked={workingExperience === "4-5"}
                          onChange={handleWorkingExperienceChange}
                          className="mr-2"
                        />
                        4-5
                      </label>
                    </div>
                    <div className="px-4 py-2 border mb-4 w-full rounded-lg bg-uploadFileBorder  bg-opacity-25">
                      <label className="flex items-center text-blue-questions text-medium-text font-normal">
                        <input
                          type="radio"
                          name="workingExperience"
                          value="5+"
                          checked={workingExperience === "5+"}
                          onChange={handleWorkingExperienceChange}
                          className="mr-2"
                        />
                        5+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-[10%] py-2 my-10">
                <div className="justify-between flex ">
                  <button
                    type="reset"
                    className="bg-heading-primary-white text-primary-bg-color hover:bg-primary-bg-color hover:text-heading-primary-white text-small-text font-semibold py-2 px-4 rounded border border-primary-bg-color"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary-bg-color text-heading-primary-white hover:bg-heading-primary-white hover:text-primary-bg-color text-small-text font-semibold py-2 px-4 rounded border border-primary-bg-color"
                  >
                    Save & Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Questions;
