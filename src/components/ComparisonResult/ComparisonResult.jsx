import React, { useContext } from "react";
import { LuCopy } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsExclamationTriangle } from "react-icons/bs";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import progressBar from "../../assets/images/Progressbar.png";
import AppContext from "../../AppContext";

const ComparisonResult = ({ analysisData }) => {
  console.log("analysisData in Comparison Result", analysisData);

  const { userInfo } = useContext(AppContext);

  const {
    "Match Percentage Output": { Percentage, "Key Factors": keyFactors },
    "Strength & Weakness": { Strength, Weakness },
    "Improvement Tips Output": improvementTips,
  } = analysisData;

  return (
    <>
      <div className="px-5">
        <div className="grid gap-4 lg:grid-cols-3 py-8">
          <div className="bg-gray-200 pt-0 rounded-lg shadow-lg">
            <div className="bg-primary-bg-color rounded-t-lg py-2 flex justify-center">
              <p className="font-bold text-medium-text text-heading-primary-white px-4 flex justify-between items-center w-full max-w-5xl">
                Match Percentage Output
                <span>
                  <button className="font-bold text-large-text text-heading-primary-white my-2">
                    <LuCopy />
                  </button>
                  <button className="font-bold text-large-text text-heading-primary-white my-2 ml-2">
                    <MdOutlineFileDownload />
                  </button>
                </span>
              </p>
            </div>
            <div className="justify-center">
              <div className="flex justify-center py-4">
                <img src={progressBar} alt="progressBar" className="w-[80%]" />
              </div>
              <div className="flex justify-center my-4 px-4 max-h-min h-[40vh] overflow-y-auto">
                <p>
                  Based on a comparison of {userInfo?.firstName} resume and the
                  job description, I would estimate his match to be around{" "}
                  {Percentage}.
                  <br />
                  The key factors supporting this high match are:{" "}
                  {keyFactors?.map((factor, index) => (
                    <span key={factor}>
                      {index == keyFactors.length - 1 ? factor : `${factor}, `}
                    </span>
                  ))}{" "}
                  Based on a comparison of {userInfo?.firstName} resume and the
                  job description, I would estimate his match to be around{" "}
                  {Percentage}.
                  <br />
                  {/* The key factors supporting this high match are: Strong
                  experience in UI/UX design, including user research,
                  prototyping, and collaboration with developers. Proficiency in
                  relevant design tools like Figma, Adobe XD, and InVision.
                  Background in human-computer interaction and user-centered
                  design principles. Ability to manage end-to-end projects and
                  work independently. Bilingual in English and Arabic. */}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 pt-0 rounded-lg shadow-lg">
            <div className="bg-primary-bg-color rounded-t-lg py-2 flex justify-center">
              <p className="font-bold text-medium-text text-heading-primary-white px-4 flex justify-between items-center w-full max-w-5xl">
                Match Percentage Output
                <span>
                  <button className="font-bold text-large-text text-heading-primary-white my-2">
                    <LuCopy />
                  </button>
                  <button className="font-bold text-large-text text-heading-primary-white my-2 ml-2">
                    <MdOutlineFileDownload />
                  </button>
                </span>
              </p>
            </div>
            <div className="justify-center py-4">
              <div className="justify-center text-justify  px-4 max-h-min h-[50vh] overflow-y-auto">
                <p>
                  Based on a comparison of {userInfo?.firstName} resume and the
                  job description, I would estimate his match to be around{" "}
                  {Percentage}.
                </p>
                <p className="font-bold text-small-text text-primary-bg-color py-1">
                  Strength
                </p>

                <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  {Strength?.map((strength) => (
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        class="flex-shrink-0 w-3.5 h-3.5 text-green-color dark:text-green-color"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-bold text-small-text text-primary-bg-color py-1">
                  Weaknesses:
                </p>
                <ul class="space-y-4 text-gray-500 dark:text-gray-400">
                  {Weakness?.map((weakness) => (
                    <li class="flex items-center space-x-3">
                      {/* <BsExclamationTriangle className="text-Yellow-color !w-12 !h-12 text-medium-text" /> */}
                      <WarningAmberIcon
                        sx={{ color: "#F8ED31", fontSize: "20px" }}
                      />
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 pt-0 rounded-lg shadow-lg">
            <div className="bg-primary-bg-color rounded-t-lg py-2 flex justify-center">
              <p className="font-bold text-medium-text text-heading-primary-white px-4 flex justify-between items-center w-full max-w-5xl">
                Strength & Weakness
                <span>
                  <button className="font-bold text-large-text text-heading-primary-white my-2">
                    <LuCopy />
                  </button>
                  <button className="font-bold text-large-text text-heading-primary-white my-2 ml-2">
                    <MdOutlineFileDownload />
                  </button>
                </span>
              </p>
            </div>
            <div className="justify-center">
              <div className="justify-center text-justify my-4 px-4 max-h-min h-[50vh] overflow-y-auto">
                <p className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  Based on a comparison of {userInfo?.firstName}'s resume and
                  the job description, I would estimate her match to be around{" "}
                  {Percentage}.
                </p>
                <ol className="pt-5 text-gray-500 dark:text-gray-400 text-justify list-decimal px-4 ">
                  {improvementTips?.map((tip) => (
                    <li className="">{tip}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonResult;
