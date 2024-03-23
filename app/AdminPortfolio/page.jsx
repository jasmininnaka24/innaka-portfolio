"use client";
import Image from "next/image";
import Link from "next/link";

// photo imports
import EmailIcon from "@/public/pdf.png";
import Bootstrap from "@/public/skillset/bootstrap.png";
import CSS from "@/public/skillset/css.png";
import ExpressJs from "@/public/skillset/express.png";
import FastAPI from "@/public/skillset/fastapi.png";
import HTML from "@/public/skillset/html.png";
import Javascript from "@/public/skillset/javascript.png";
import JQuery from "@/public/skillset/jquery.png";
import Laravel from "@/public/skillset/laravel.png";
import MySQL from "@/public/skillset/mysql.png";
import PHP from "@/public/skillset/php.png";
import ReactJS from "@/public/skillset/react.png";
import SequelizeJS from "@/public/skillset/sequelize.png";
import SocketIO from "@/public/skillset/socket.png";
import Tailwind from "@/public/skillset/tailwind.png";

// icon imports
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CloseIcon from "@mui/icons-material/Close";

// component import
import AdminAboutCategory from "../(components)/Admin/AdminAboutCategory";
import AdminProjectCategory from "../(components)/Admin/AdminProjectCategory";
import AdminQualificationCategory from "../(components)/Admin/AdminQualificationCategory";
import AdminServiceCategory from "../(components)/Admin/AdminServiceCategory";

// function imports
import AdminPortfolioFunctions from "../(functions)/AdminPortfolioFunctions";

const PortfolioDetails = () => {
  const {
    functions: {
      handleImgUpload,
      handleRemoveImage,
      filesizes,
      InputChange,
      DeleteSelectFile,
      FileUploadSubmit,
      DeleteFile,
      addAboutMeArrInfo,
      handleAboutMeArrInfo,
      removeAboutMeArrInfo,
      addAboutHighlightsArr,
      handleAboutHighlightsArr,
      removeAboutHighlightsArr,
      addProjectTechUsed,
      handleProjectTechUsed,
      removeProjectTechUsed,
    },
    stateFunctions: {
      SetSelectedFile,
      SetFiles,
      setOnEditMode,
      setOnEditModeID,
      setAdded,
      setUpdated,
      setDeleted,
      setWarning,
      setError,
      setMsg,
      setAboutCategory,
      setProjectCategory,
      setQualificationsCategory,
      setServicesCategory,
      setExperience,
      getRootProps,
      getInputProps,
      setAboutArr,
      setAboutHighlightsArr,
      setProjectTechsUsedArr,
      setEducation,
      setCredentials,
      setImages,
    },
    stateVariables: {
      acceptedFiles,
      selectedfile,
      Files,
      onEditMode,
      onEditModeID,
      added,
      updated,
      deleted,
      warning,
      error,
      msg,
      aboutCategory,
      projectCategory,
      qualificationsCategory,
      servicesCategory,
      experience,
      education,
      credentials,
      images,
      aboutArr,
      aboutHighlightsArr,
      projectTechsUsedArr,
    },
  } = AdminPortfolioFunctions();

  return (
    <main className="main-bg-linear text-dark ">
      <div className="flex items-start bg-dull-secondary-gray py-5">
        <div className="w-full min-h-[100vh] text-dark bg-white full-width box-shadow-dull rounded">
          {/* navigation */}
          <nav className="flex justify-between items-center py-3 px-5">
            <ul className="flex items-center gap-10">
              <li className="py-1 text-secondary-dark text-sm">
                <Link href="/AdminProfile" className="text-lg quicksand">
                  Profile Details
                </Link>
                <div
                  className="rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>

              <li className="py-1 text-primary-dark font-bold text-sm">
                <Link href="" className="text-lg quicksand font-bold">
                  Portfolio Details
                </Link>
                <div
                  className="bg-primary rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>
              <li className="py-1 text-secondary-dark text-sm">
                <Link href="" className="text-lg quicksand">
                  Emailed Details
                </Link>
                <div
                  className="rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>
            </ul>
            <div className="flex  items-center justify-end">
              <div className="flex  items-center gap-1  py-2 px-2 rounded text-secondary-dark">
                <NotificationsIcon />
              </div>
              <button>
                <Link href={"/"}>
                  <div className="flex items-center gap-1 text-lg px-3 rounded text-md bg-primary-dark text-white quicksand">
                    Logout
                  </div>
                </Link>
              </button>
            </div>
          </nav>

          <div
            className="px-5 py-5 full-width"
            style={{ borderTop: "solid 1px #efeded" }}
          >
            {/* action message */}
            <div>
              <div
                className={`w-full text-center mt-5 bg-green-100 py-2 rounded ${
                  added ? "" : "hidden"
                } `}
              >
                Successfully Added
              </div>
              <div
                className={`w-full text-center mt-5 bg-green-100 py-2 rounded ${
                  updated ? "" : "hidden"
                } `}
              >
                Successfully Updated
              </div>
              <div
                className={`w-full text-center mt-5 bg-green-100 py-2 rounded ${
                  deleted ? "" : "hidden"
                } `}
              >
                Successfully Deleted
              </div>
              <br />
            </div>

            {/* category selection */}
            <div className="flex items-center gap-5">
              <div className="w-1/2 flex items-center outline-none gap-4 pr-3">
                <h2 className="text-primary font-bold text-2xl quicksand">
                  Category:{" "}
                </h2>
                <select
                  name=""
                  id=""
                  className="w-full border-dull-medium-gray p-2 rounded outline-none quicksand text-lg"
                  onChange={(e) => {
                    const selectedCategory = e.target.value;
                    // Update state based on the selected category
                    switch (selectedCategory) {
                      case "About":
                        setAboutCategory(true);
                        setProjectCategory(false);
                        setQualificationsCategory(false);
                        setServicesCategory(false);
                        setOnEditMode(false);
                        setImages([]); // Clear the images when changing the category
                        break;
                      case "Projects":
                        setAboutCategory(false);
                        setProjectCategory(true);
                        setQualificationsCategory(false);
                        setServicesCategory(false);
                        setOnEditMode(false);
                        setImages([]); // Clear the images when changing the category
                        break;
                      case "Qualifications":
                        setAboutCategory(false);
                        setProjectCategory(false);
                        setQualificationsCategory(true);
                        setServicesCategory(false);
                        setOnEditMode(false);
                        setImages([]); // Clear the images when changing the category
                        break;
                      case "Services":
                        setAboutCategory(false);
                        setProjectCategory(false);
                        setQualificationsCategory(false);
                        setServicesCategory(true);
                        setOnEditMode(false);
                        setImages([]); // Clear the images when changing the category
                        break;
                      default:
                        // Handle default case or do nothing
                        break;
                    }
                  }}
                >
                  <option className="hoverline text-lg quicksand" value="About">
                    About
                  </option>
                  <option
                    className="hoverline text-lg quicksand"
                    value="Projects"
                  >
                    Projects
                  </option>
                  <option
                    className="hoverline text-lg quicksand"
                    value="Qualifications"
                  >
                    Qualifications
                  </option>
                  <option
                    className="hoverline text-lg quicksand"
                    value="Services"
                  >
                    Services
                  </option>
                </select>
              </div>
              <br />
              <br />
            </div>

            <br />
            <br />
            <br />

            {/* about section crud */}
            {aboutCategory && (
              <AdminAboutCategory
                imports={{ Image }}
                variables={{
                  aboutHighlightsArr,
                  aboutArr,
                  selectedfile,
                  images,
                }}
                functions={{
                  handleImgUpload,
                  handleRemoveImage,
                  addAboutMeArrInfo,
                  addAboutHighlightsArr,
                  FileUploadSubmit,
                  InputChange,
                  handleAboutHighlightsArr,
                  removeAboutHighlightsArr,
                  handleAboutMeArrInfo,
                }}
                icons={{ AddIcon, CloseIcon, EmailIcon }}
                technologyIcons={{
                  Bootstrap,
                  CSS,
                  ExpressJs,
                  FastAPI,
                  HTML,
                  Javascript,
                  JQuery,
                  Laravel,
                  MySQL,
                  ReactJS,
                  SequelizeJS,
                  SocketIO,
                  Tailwind,
                  PHP,
                }}
              />
            )}

            {/* projects section crud */}
            {projectCategory && (
              <AdminProjectCategory
                imports={{ Image, Link }}
                variables={{
                  onEditMode,
                  projectTechsUsedArr,
                  acceptedFiles,
                  URL,
                }}
                icons={{
                  AddIcon,
                  CloseIcon,
                  BorderColorIcon,
                  DeleteSweepIcon,
                  OpenInNewIcon,
                  GitHubIcon,
                }}
                functions={{
                  addProjectTechUsed,
                  getInputProps,
                  getRootProps,
                  handleProjectTechUsed,
                  removeProjectTechUsed,
                  setOnEditMode,
                }}
                technologyIcons={{ MySQL }}
              />
            )}

            {/* qualifications section crud */}
            {qualificationsCategory && (
              <AdminQualificationCategory
                imports={{ Image }}
                variables={{
                  onEditMode,
                  experience,
                  education,
                  credentials,
                  images,
                }}
                icons={{
                  CloseIcon,
                  BorderColorIcon,
                  DeleteSweepIcon,
                }}
                functions={{
                  handleImgUpload,
                  addProjectTechUsed,
                  setExperience,
                  setEducation,
                  setCredentials,
                  setOnEditMode,
                  handleRemoveImage,
                }}
                technologyIcons={{ MySQL }}
              />
            )}

            {/* services section crud */}
            {servicesCategory && (
              <AdminServiceCategory
                imports={{ Image, Link }}
                variables={{
                  onEditMode,
                  acceptedFiles,
                  servicesCategory,
                  onEditMode,
                }}
                icons={{
                  CloseIcon,
                  BorderColorIcon,
                  DeleteSweepIcon,
                }}
                functions={{
                  getInputProps,
                  getRootProps,
                  setOnEditMode,
                }}
                technologyIcons={{ MySQL, SocketIO, Tailwind }}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioDetails;
