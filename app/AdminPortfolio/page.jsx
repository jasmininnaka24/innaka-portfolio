"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import shortid from "shortid";
import { useDropzone } from "react-dropzone";

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

const PortfolioDetails = () => {
  const [selectedfile, SetSelectedFile] = useState("");
  const [Files, SetFiles] = useState([]);
  const [onEditMode, setOnEditMode] = useState(false);
  const [onEditModeID, setOnEditModeID] = useState(false);

  // crud pop-up states
  const [added, setAdded] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState(false);

  // categories states
  const [aboutCategory, setAboutCategory] = useState(true);
  const [projectCategory, setProjectCategory] = useState(false);
  const [qualificationsCategory, setQualificationsCategory] = useState(false);
  const [servicesCategory, setServicesCategory] = useState(false);

  // subcategories for qualifications
  const [experience, setExperience] = useState(true);
  const [education, setEducation] = useState(false);
  const [credentials, setCredentials] = useState(false);

  // for multiple images upload
  const [images, setImages] = useState([]);

  // arrays for multiple inputs

  const [aboutArr, setAboutArr] = useState([]);
  const [aboutHighlightsArr, setAboutHighlightsArr] = useState([]);
  const [projectTechsUsedArr, setProjectTechsUsedArr] = useState([]);

  // multiple images upload states
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
      // Clear acceptedFiles immediately after uploading
      setAcceptedFiles([]);
    },
  });

  // multiple images upload

  const handleImgUpload = (event) => {
    event.preventDefault();

    const files = event.target.files;

    const imgArray = Array.from(files);
    imgArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.onload = () => {
          URL.revokeObjectURL(img.src);
          setImages((prevImages) => [
            ...prevImages,
            { src: img.src, width: img.width, height: img.height },
          ]);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  // removing image from an array
  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  // resume upload
  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const InputChange = (e) => {
    // --For Single File Input
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      SetSelectedFile({
        id: shortid.generate(),
        filename: e.target.files[0].name,
        filetype: e.target.files[0].type,
        fileimage: reader.result,
        datetime: e.target.files[0].lastModifiedDate.toLocaleString("en-IN"),
        filesize: filesizes(e.target.files[0].size),
      });
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(file);
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }
  };

  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit
    e.target.reset();
    if (selectedfile !== "") {
      SetFiles((preValue) => {
        return [...preValue, selectedfile];
      });
      SetSelectedFile("");
    } else {
      alert("Please select file");
    }
  };

  const DeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = Files.filter((data) => data.id !== id);
      SetFiles(result);
    } else {
      // alert('No');
    }
  };

  // functions for adding about inputs
  const addAboutMeArrInfo = () => {
    if (aboutArr.length === 0 || aboutArr.every((item) => item !== "")) {
      setAboutArr([...aboutArr, ""]);
    }
  };

  const handleAboutMeArrInfo = (e, index) => {
    const newArr = [...aboutArr];
    newArr[index] = e.target.value;
    setAboutArr(newArr);
  };

  const removeAboutMeArrInfo = (indexToRemove) => {
    setAboutArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToRemove)
    );
  };

  // functions for adding about highlights
  const addAboutHighlightsArr = () => {
    if (
      aboutHighlightsArr.length === 0 ||
      aboutHighlightsArr.every((item) => item !== "")
    ) {
      setAboutHighlightsArr([...aboutHighlightsArr, ""]);
    }
  };

  const handleAboutHighlightsArr = (e, index) => {
    const newArr = [...aboutHighlightsArr];
    newArr[index] = e.target.value;
    setAboutHighlightsArr(newArr);
  };

  const removeAboutHighlightsArr = (indexToRemove) => {
    setAboutHighlightsArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToRemove)
    );
  };

  // functions for adding project tech used
  const addProjectTechUsed = () => {
    if (
      projectTechsUsedArr.length === 0 ||
      projectTechsUsedArr.every((item) => item !== "")
    ) {
      setProjectTechsUsedArr([...projectTechsUsedArr, ""]);
    }
  };

  const handleProjectTechUsed = (e, index) => {
    const newArr = [...projectTechsUsedArr];
    newArr[index] = e.target.value;
    setProjectTechsUsedArr(newArr);
  };

  const removeProjectTechUsed = (indexToRemove) => {
    setProjectTechsUsedArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToRemove)
    );
  };

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

          {/* Portfolio Details */}

          <div
            className="px-5 py-5 full-width"
            style={{ borderTop: "solid 1px #efeded" }}
          >
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
                        setAcceptedFiles([]);
                        setImages([]); // Clear the images when changing the category
                        break;
                      case "Projects":
                        setAboutCategory(false);
                        setProjectCategory(true);
                        setQualificationsCategory(false);
                        setServicesCategory(false);
                        setOnEditMode(false);
                        setAcceptedFiles([]);
                        setImages([]); // Clear the images when changing the category
                        break;
                      case "Qualifications":
                        setAboutCategory(false);
                        setProjectCategory(false);
                        setQualificationsCategory(true);
                        setServicesCategory(false);
                        setOnEditMode(false);
                        setAcceptedFiles([]);
                        setImages([]); // Clear the images when changing the category
                        break;
                      case "Services":
                        setAboutCategory(false);
                        setProjectCategory(false);
                        setQualificationsCategory(false);
                        setServicesCategory(true);
                        setOnEditMode(false);
                        setAcceptedFiles([]);
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
            </div>
            <br />
            <br />

            {/* about section crud */}
            {aboutCategory && (
              <div>
                <div className="flex gap-5">
                  <article className="w-1/2 border-dull-gray-right pr-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          About me
                          <span className="text-primary font-bold"> *</span>
                        </p>

                        <button onClick={addAboutMeArrInfo}>
                          <AddIcon />
                        </button>
                      </div>

                      {aboutArr.map((item, index) => (
                        <div
                          className="relative w-full flex items-center justify-between"
                          key={index}
                        >
                          <input
                            type="text"
                            className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                            placeholder="Type here..."
                            value={item}
                            onChange={(e) => handleAboutMeArrInfo(e, index)}
                          />

                          <button
                            className="absolute right-2 top-2"
                            onClick={() => removeAboutMeArrInfo(index)}
                          >
                            <CloseIcon />
                          </button>
                        </div>
                      ))}

                      <ul className="grid grid-cols-1 gap-2 mt-3">
                        <li className="w-full">
                          <textarea
                            name=""
                            id=""
                            rows="5"
                            className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                            placeholder="Type here..."
                          >
                            I`m a Software Developer. Currently practicing UX/UI
                            Design. Productive coding at night till midnight. I
                            love coffee, cats, and rainy season.
                          </textarea>
                        </li>
                      </ul>
                    </div>

                    <br />
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          Highlighted Word(s)
                          <span className="text-primary font-bold"> *</span>
                        </p>

                        <button onClick={addAboutHighlightsArr}>
                          <AddIcon />
                        </button>
                      </div>

                      {aboutHighlightsArr.map((item, index) => (
                        <div
                          className="relative w-full flex items-center justify-between"
                          key={index}
                        >
                          <input
                            type="text"
                            className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                            placeholder="Type here..."
                            value={item}
                            onChange={(e) => handleAboutHighlightsArr(e, index)}
                          />

                          <button
                            className="absolute right-2 top-2"
                            onClick={() => removeAboutHighlightsArr(index)}
                          >
                            <CloseIcon />
                          </button>
                        </div>
                      ))}

                      <ul className="grid grid-cols-1 mt-3">
                        <li className="w-full">
                          <input
                            type="text"
                            className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                            placeholder="Type here..."
                            value={"Software Developer."}
                          />
                        </li>
                        <li className="w-full">
                          <input
                            type="text"
                            className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                            placeholder="Type here..."
                            value={"UX/UI Design."}
                          />
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article className="w-1/2">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          Resume Upload
                          <span className="text-primary font-bold"> *</span>
                        </p>
                      </div>

                      <div className="fileupload-view">
                        <div className="row justify-content-center m-0">
                          <div className="col-md-6">
                            <div>
                              <div className="kb-data-box">
                                <form onSubmit={FileUploadSubmit}>
                                  <div className="kb-file-upload">
                                    <div className="file-upload-box rounded quicksand bg-dull-secondary-gray">
                                      <input
                                        type="file"
                                        id="fileupload"
                                        className="file-upload-input"
                                        onChange={InputChange}
                                      />
                                      <span className="quicksand text-secondary-dark text-normal">
                                        Drag and drop or{" "}
                                        <span className="quicksand text-dark underline">
                                          Choose your file
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="kb-attach-box mb-3">
                                    <div className="file-atc-box">
                                      <div className="border-dull-gray w-full px-3 py-2 rounded flex items-center gap-2">
                                        <Image
                                          src={EmailIcon}
                                          className="rounded"
                                          style={{
                                            width: "2.3rem",
                                            height: "2.3rem",
                                            objectFit: "cover",
                                          }}
                                          alt=""
                                        />
                                        <div>
                                          <h6 className="quicksand text-sm font-bold text-semi-dark capitalize m-0">
                                            {selectedfile.filename}
                                          </h6>
                                          <p style={{ marginTop: "-.3rem" }}>
                                            <span className="text-secondary-dark text-xs">
                                              Size : {selectedfile.filesize}
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          Technology Tools
                          <span className="text-primary font-bold"> *</span>
                        </p>
                      </div>

                      <div className="mt-5">
                        <div>
                          <div className="kb-file-upload">
                            <div className="file-upload-box rounded quicksand bg-dull-secondary-gray">
                              <input
                                type="file"
                                id="upload_imgs"
                                className="file-upload-input"
                                onChange={handleImgUpload}
                                multiple
                              />
                              <span className="quicksand text-secondary-dark text-normal">
                                Drag and drop or{" "}
                                <span className="quicksand text-dark underline">
                                  Choose your files
                                </span>
                              </span>
                            </div>
                          </div>

                          <form id="img-upload-form">
                            <ul className="grid grid-cols-6 gap-3">
                              {images.map((image, index) => (
                                <div key={index} className="relative">
                                  <button
                                    className="absolute top-0 right-0 bg-white border-none p-1 rounded-full text-gray-600 hover:text-red-500 focus:outline-none"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleRemoveImage(index);
                                    }}
                                  >
                                    <CloseIcon />
                                  </button>

                                  <Image
                                    src={image.src}
                                    alt={`Preview ${index}`}
                                    className="rounded border-dull-gray p-2"
                                    style={{
                                      width: "8rem",
                                      objectFit: "cover",
                                    }}
                                    width={150}
                                    height={150}
                                  />
                                </div>
                              ))}
                            </ul>
                          </form>
                        </div>
                      </div>

                      <ul className="grid grid-cols-6 gap-3 mt-4">
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={Bootstrap}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={CSS}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={ExpressJs}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={FastAPI}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={HTML}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={Javascript}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={JQuery}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={Laravel}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={MySQL}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={PHP}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={ReactJS}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={SequelizeJS}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={SocketIO}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                        <li
                          className="box-shadow-dull rounded"
                          style={{ height: "4.2rem" }}
                        >
                          <Image
                            src={Tailwind}
                            alt=""
                            style={{ height: "4.2rem" }}
                            className="w-full p-3 cover object-contain rounded"
                          />
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>

                <br />
                <br />
                <br />
                <div className="flex items-center justify-end w-full">
                  <button
                    className={`w-1/6 py-2 rounded bg-primary text-white`}
                    onClick={(e) => updateUserImage(e, 1)}
                  >
                    Update
                  </button>
                </div>
              </div>
            )}

            {/* projects section crud */}
            {projectCategory && (
              <div className="flex gap-5">
                <article
                  className={`${
                    onEditMode && "hidden"
                  } w-1/2 border-dull-gray-right pr-5`}
                >
                  <br />
                  <h2 className="text-xl text-primary font-bold quicksand border-dull-gray-bottom pb-2">
                    Add a Project
                  </h2>
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Category
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <select
                      name=""
                      id=""
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                    >
                      <option
                        className="hoverline text-lg quicksand"
                        value="Web Application/Website"
                      >
                        Web Application/Website
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="Mobile Application"
                      >
                        Mobile Application
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="Desktop Application"
                      >
                        Desktop Application
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="UX/UI Design"
                      >
                        UX/UI Design
                      </option>
                    </select>
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Title
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Description
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>
                    <textarea
                      name=""
                      id=""
                      rows="5"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                    ></textarea>
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Link
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Github Link
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Date Published
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="date"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Technologies Used
                        <span className="text-primary font-bold"> *</span>
                      </p>

                      <button onClick={addProjectTechUsed}>
                        <AddIcon />
                      </button>
                    </div>

                    {projectTechsUsedArr.map((item, index) => (
                      <div
                        className="relative w-full flex items-center justify-between"
                        key={index}
                      >
                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Tool"
                          value={item}
                          onChange={(e) => handleProjectTechUsed(e, index)}
                        />

                        <button
                          className="absolute right-2 top-2"
                          onClick={() => removeProjectTechUsed(index)}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    ))}

                    <ul className="grid grid-cols-1">
                      <li className="w-full">
                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Tool..."
                        />
                      </li>
                    </ul>
                  </div>

                  <form className={`flex items-center gap-6 pt-5`}>
                    <div
                      className="p-2 rounded"
                      {...getRootProps()}
                      style={{
                        width: "15rem",
                        cursor: "pointer",
                        border: "3px dashed #888",
                      }}
                    >
                      <input {...getInputProps()} name="image" type="file" />
                      {acceptedFiles.length === 0 ? (
                        <Image
                          src={MySQL}
                          className="rounded"
                          style={{
                            width: "15rem",
                            height: "8rem",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      ) : (
                        <>
                          <Image
                            src={URL.createObjectURL(acceptedFiles[0])}
                            className="rounded"
                            style={{
                              width: "15rem",
                              height: "8rem",
                              objectFit: "cover",
                            }}
                            alt=""
                            width={150} // Specify the width of the image
                            height={150} // Specify the height of the image
                          />
                        </>
                      )}
                    </div>

                    <div className={`text-start`}>
                      <p className="text-2xl mb-1 font-medium mcolor-800">
                        Upload a photo
                      </p>
                      <p className="text-sm opacity-70 mb-4">
                        Drag and drop an image to the photo or click to select
                        one.
                      </p>
                    </div>
                  </form>

                  <br />
                  <br />
                  <div className="flex items-center justify-end w-full">
                    <button
                      className={`w-1/3 py-2 rounded bg-primary text-white`}
                      onClick={(e) => updateUserImage(e, 1)}
                    >
                      Add Project
                    </button>
                  </div>
                </article>

                {/* edit a project */}
                <article
                  className={`${
                    !onEditMode && "hidden"
                  } w-1/2 border-dull-gray-right pr-5`}
                >
                  <br />
                  <div className="border-dull-gray-bottom pb-2 flex items-center justify-between">
                    <h2 className="text-xl text-primary font-bold quicksand">
                      Edit a Project
                    </h2>

                    <button onClick={() => setOnEditMode(false)}>
                      <CloseIcon />
                    </button>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Category
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <select
                      name=""
                      id=""
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                    >
                      <option className="hoverline text-lg quicksand">
                        Web Application/Website
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="Mobile Application"
                      >
                        Mobile Application
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="Desktop Application"
                      >
                        Desktop Application
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="UX/UI Design"
                      >
                        UX/UI Design
                      </option>
                    </select>
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Title
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                      value={"ReactJS"}
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Description
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>
                    <textarea
                      name=""
                      id=""
                      rows="5"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                    >
                      A web application that harnesses advanced functionalities,
                      such as seamless integration with artificial intelligence
                      and real-time communication capabilities through
                      socket.io. This project showcases innovative technologies
                      to enhance user qualifications and foster collaboration
                      among users.
                    </textarea>
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Project Link
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                      value={"https://mindscape-ai.vercel.app/"}
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Github Link
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                      value={"https://github.com/jasmininnaka24/mindscape-ai"}
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Date Published
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <input
                      type="date"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Type here..."
                      value={"February 16, 2023"}
                    />
                  </div>

                  <br />
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Technologies Used
                        <span className="text-primary font-bold"> *</span>
                      </p>

                      <button>
                        <AddIcon />
                      </button>
                    </div>

                    <ul className="grid grid-cols-1">
                      <li className="w-full">
                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Tool..."
                          value={"ReactJS"}
                        />
                      </li>
                      <li className="w-full">
                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Tool..."
                          value={"Express JS"}
                        />
                      </li>
                    </ul>
                  </div>

                  <form className={`flex items-center gap-6 pt-5`}>
                    <div
                      className="p-2 rounded"
                      {...getRootProps()}
                      style={{
                        width: "15rem",
                        cursor: "pointer",
                        border: "3px dashed #888",
                      }}
                    >
                      <input {...getInputProps()} name="image" type="file" />
                      {acceptedFiles.length === 0 ? (
                        <Image
                          src={MySQL}
                          className="rounded"
                          style={{
                            width: "15rem",
                            height: "8rem",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      ) : (
                        <>
                          <Image
                            src={URL.createObjectURL(acceptedFiles[0])}
                            className="rounded"
                            style={{
                              width: "15rem",
                              height: "8rem",
                              objectFit: "cover",
                            }}
                            alt=""
                            width={150} // Specify the width of the image
                            height={150} // Specify the height of the image
                          />
                        </>
                      )}
                    </div>

                    <div className={`text-start`}>
                      <p className="text-2xl mb-1 font-medium mcolor-800">
                        Upload a photo
                      </p>
                      <p className="text-sm opacity-70 mb-4">
                        Drag and drop an image to the photo or click to select
                        one.
                      </p>
                    </div>
                  </form>

                  <br />
                  <br />
                  <div className="flex items-center justify-end w-full">
                    <button
                      className={`w-1/3 py-2 rounded bg-primary text-white`}
                      onClick={(e) => updateUserImage(e, 1)}
                    >
                      Update Project
                    </button>
                  </div>
                </article>

                <article className="w-1/2">
                  <br />

                  <div className="flex items-center justify-between border-dull-gray-bottom pb-2">
                    <h2 className="text-xl text-primary font-bold quicksand ">
                      Project List
                    </h2>
                    <ul class="flex items-center text-center gap-2">
                      <li>
                        <Link
                          className="text-center font-bold px-2 quicksand text-dark text-sm"
                          href={"#about"}
                        >
                          All
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-center px-2 quicksand text-secondary-dark text-sm"
                          href={"#projects"}
                        >
                          Web
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-center px-2 quicksand text-secondary-dark text-sm"
                          href={"#qualifications"}
                        >
                          Mobile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-center px-2 quicksand text-secondary-dark text-sm"
                          href={"#qualifications"}
                        >
                          Desktop
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <br />

                  <section className="w-full relative my-3">
                    <ul className="grid grid-cols-1 gap-5 w-full">
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>
                          <div className="w-full mt-3">
                            <div className="w-full flex items-center justify-center">
                              <Image
                                src={MySQL}
                                alt=""
                                style={{
                                  width: "15rem",
                                  height: "8rem",
                                  objectFit: "cover",
                                }}
                                className="w-full rounded border-dull-gray p-2"
                              />
                            </div>

                            <h3 className="text-semi-dark font-bold text-xl mt-7 text-center">
                              MindScape AI: Capstone Project
                            </h3>

                            <ul className="mt-4 flex justify-center items-center gap-2 mb-5 flex-wrap">
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                ReactJS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                ExpressJS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                SequelizeJS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                TailwindCSS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                MySQL
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                FastAPI
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                Socket.io
                              </li>
                            </ul>
                            <p className="text-secondary-dark text-center font-medium mt-4 text-sm">
                              🚀 A web application that harnesses advanced
                              functionalities, such as seamless integration with
                              artificial intelligence and real-time
                              communication capabilities through socket.io. This
                              project showcases innovative technologies to
                              enhance user qualificationss and foster
                              collaboration among users.
                            </p>

                            <br />
                            <div className="flex items-center gap-3">
                              <button className="w-1/2 text-center bg-primary text-light rounded py-2">
                                <Link
                                  href={"https://mindscape-ai.vercel.app"}
                                  target="_blank"
                                >
                                  <OpenInNewIcon
                                    fontSize="small"
                                    className="mr-1 mb-1"
                                  />
                                  Live Site
                                </Link>
                              </button>
                              <button className="w-1/2 text-center rounded py-2 bg-secondary-light px-2 text-dark">
                                <Link
                                  href={
                                    "https://github.com/jasmininnaka24/mindscape-ai"
                                  }
                                  target="_blank"
                                >
                                  <GitHubIcon
                                    fontSize="small"
                                    className="mr-1 mb-1"
                                  />
                                  Github
                                </Link>
                              </button>
                            </div>

                            <h4 className="text-secondary-dark text-center mt-5 opacity-60 text-sm">
                              Date Published: February 16, 2023
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          <div className="w-full mt-3">
                            <div className="w-full flex items-center justify-center">
                              <Image
                                src={MySQL}
                                alt=""
                                style={{
                                  width: "15rem",
                                  height: "8rem",
                                  objectFit: "cover",
                                }}
                                className="w-full rounded border-dull-gray p-2"
                              />
                            </div>

                            <h3 className="text-semi-dark font-bold text-xl mt-7 text-center">
                              MindScape AI: Capstone Project
                            </h3>

                            <ul className="mt-4 flex justify-center items-center gap-2 mb-5 flex-wrap">
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                ReactJS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                ExpressJS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                SequelizeJS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                TailwindCSS
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                MySQL
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                FastAPI
                              </li>
                              <li
                                className="text-xs bg-dull-gray text-secondary-dark px-3 py-1 rounded-full text-center"
                                style={{ fontWeight: 600 }}
                              >
                                Socket.io
                              </li>
                            </ul>
                            <p className="text-secondary-dark text-center font-medium mt-4 text-sm">
                              🚀 A web application that harnesses advanced
                              functionalities, such as seamless integration with
                              artificial intelligence and real-time
                              communication capabilities through socket.io. This
                              project showcases innovative technologies to
                              enhance user qualificationss and foster
                              collaboration among users.
                            </p>

                            <br />
                            <div className="flex items-center gap-3">
                              <button className="w-1/2 text-center bg-primary text-light rounded py-2">
                                <Link
                                  href={"https://mindscape-ai.vercel.app"}
                                  target="_blank"
                                >
                                  <OpenInNewIcon
                                    fontSize="small"
                                    className="mr-1 mb-1"
                                  />
                                  Live Site
                                </Link>
                              </button>
                              <button className="w-1/2 text-center rounded py-2 bg-secondary-light px-2 text-dark">
                                <Link
                                  href={
                                    "https://github.com/jasmininnaka24/mindscape-ai"
                                  }
                                  target="_blank"
                                >
                                  <GitHubIcon
                                    fontSize="small"
                                    className="mr-1 mb-1"
                                  />
                                  Github
                                </Link>
                              </button>
                            </div>

                            <h4 className="text-secondary-dark text-center mt-5 opacity-60 text-sm">
                              Date Published: February 16, 2023
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <br />
                </article>
              </div>
            )}

            {/* qualifications section crud */}
            {qualificationsCategory && (
              <div className="flex gap-5">
                <article className="w-1/2 border-dull-gray-right pr-5">
                  <br />
                  <div className="border-dull-gray-bottom pb-2 flex items-center justify-between">
                    <h2 className="text-xl text-primary font-bold quicksand">
                      {onEditMode ? "Edit" : "Add"} a Qualification
                    </h2>

                    <button
                      className={!onEditMode && "hidden"}
                      onClick={() => setOnEditMode(false)}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                        Qualification Category
                        <span className="text-primary font-bold"> *</span>
                      </p>
                    </div>

                    <select
                      name=""
                      id=""
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      onChange={(e) => {
                        const selectedCategory = e.target.value;
                        // Update state based on the selected category
                        switch (selectedCategory) {
                          case "Experience":
                            setExperience(true);
                            setEducation(false);
                            setCredentials(false);
                            setOnEditMode(false);
                            break;
                          case "Education":
                            setExperience(false);
                            setEducation(true);
                            setCredentials(false);
                            setOnEditMode(false);
                            break;
                          case "Credentials":
                            setExperience(false);
                            setEducation(false);
                            setCredentials(true);
                            setOnEditMode(false);
                            break;
                          default:
                            // Handle default case or do nothing
                            break;
                        }
                      }}
                    >
                      <option
                        className="hoverline text-lg quicksand"
                        value="Experience"
                      >
                        Experience
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="Education"
                      >
                        Education
                      </option>
                      <option
                        className="hoverline text-lg quicksand"
                        value="Credentials"
                      >
                        Credentials
                      </option>
                    </select>
                  </div>

                  <br />

                  {/* experience sub category */}
                  {experience && onEditMode && (
                    <div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Title
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                          value={"Software Developer"}
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Description
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                          value={
                            "Currently learning the technologies they use for development, collaborating with my team members on integration and implementation tasks, debugging some bugs and issues, and supporting project development."
                          }
                        ></textarea>
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Company Name
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                          value={"City Hall of Zamboanga"}
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Started
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Ended
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <br />
                      <div className="flex items-center justify-end w-full">
                        <button
                          className={`w-1/3 py-2 rounded bg-primary text-white`}
                          onClick={(e) => updateUserImage(e, 1)}
                        >
                          Update Experience
                        </button>
                      </div>
                    </div>
                  )}

                  {experience && !onEditMode && (
                    <div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Title
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Description
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        ></textarea>
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Company Name
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Started
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Job Ended
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <br />
                      <div className="flex items-center justify-end w-full">
                        <button
                          className={`w-1/3 py-2 rounded bg-primary text-white`}
                          onClick={(e) => updateUserImage(e, 1)}
                        >
                          Add Experience
                        </button>
                      </div>
                    </div>
                  )}

                  {/* education sub category */}
                  {education && onEditMode && (
                    <div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            School Name
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                          value={"Western Mindanao State University"}
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Program Taken (Only for college)
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                          value={
                            "Bachelor of Science in Information Technology"
                          }
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            School Started
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            School Ended
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <br />
                      <div className="flex items-center justify-end w-full">
                        <button
                          className={`w-1/3 py-2 rounded bg-primary text-white`}
                          onClick={(e) => updateUserImage(e, 1)}
                        >
                          Add Education
                        </button>
                      </div>
                    </div>
                  )}

                  {education && !onEditMode && (
                    <div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            School Name
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Program Taken (Only for college)
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            School Started
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            School Ended
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="date"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <br />
                      <div className="flex items-center justify-end w-full">
                        <button
                          className={`w-1/3 py-2 rounded bg-primary text-white`}
                          onClick={(e) => updateUserImage(e, 1)}
                        >
                          Add Education
                        </button>
                      </div>
                    </div>
                  )}

                  {/* credentials sub category */}
                  <div className={`${!credentials && "hidden"}`}>
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          Credential Photos Upload
                          <span className="text-primary font-bold"> *</span>
                        </p>
                      </div>
                      <div className="mt-2">
                        <div className="kb-file-upload">
                          <div className="file-upload-box rounded quicksand bg-dull-secondary-gray">
                            <input
                              type="file"
                              id="upload_imgs"
                              className="file-upload-input"
                              onChange={handleImgUpload}
                              multiple
                            />
                            <span className="quicksand text-secondary-dark text-normal">
                              Drag and drop or{" "}
                              <span className="quicksand text-dark underline">
                                Choose your files
                              </span>
                            </span>
                          </div>
                        </div>

                        <form id="img-upload-form">
                          <ul className="grid grid-cols-2 gap-3">
                            {images.map((image, index) => (
                              <div key={index} className="relative">
                                <button
                                  className="absolute top-0 right-0 bg-white border-none p-1 rounded-full text-gray-600 hover:text-red-500 focus:outline-none"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleRemoveImage(index);
                                  }}
                                >
                                  <CloseIcon />
                                </button>

                                <Image
                                  src={image.src}
                                  alt={`Preview ${index}`}
                                  className="rounded border-dull-gray p-2"
                                  style={{
                                    width: "15rem",
                                    objectFit: "cover",
                                  }}
                                  width={150}
                                  height={150}
                                />
                              </div>
                            ))}
                          </ul>
                        </form>
                      </div>
                    </div>

                    <br />
                    <br />
                    <div className="flex items-center justify-end w-full">
                      <button
                        className={`w-1/3 py-2 rounded bg-primary text-white`}
                        onClick={(e) => updateUserImage(e, 1)}
                      >
                        Add Credentials
                      </button>
                    </div>
                  </div>
                </article>

                <article className="w-1/2">
                  <br />

                  <div className="flex items-center justify-between border-dull-gray-bottom pb-2">
                    <h2 className="text-xl text-primary font-bold quicksand ">
                      Qualifications
                    </h2>
                    <ul class="flex items-center text-center">
                      <li>
                        <button
                          className={`text-center px-2 quicksand ${
                            experience
                              ? "font-bold text-dark"
                              : "text-secondary-dark"
                          } text-sm`}
                          onClick={() => {
                            const selectedCategory = "Experience";
                            // Update state based on the selected category
                            switch (selectedCategory) {
                              case "Experience":
                                setExperience(true);
                                setEducation(false);
                                setCredentials(false);
                                setOnEditMode(false);

                                break;
                              case "Education":
                                setExperience(false);
                                setEducation(true);
                                setCredentials(false);
                                setOnEditMode(false);

                                break;
                              case "Credentials":
                                setExperience(false);
                                setEducation(false);
                                setCredentials(true);
                                setOnEditMode(false);

                                break;
                              default:
                                // Handle default case or do nothing
                                break;
                            }
                          }}
                        >
                          Experience
                        </button>
                      </li>
                      <li>
                        <button
                          className={`text-center px-2 quicksand ${
                            education
                              ? "font-bold text-dark"
                              : "text-secondary-dark"
                          } text-sm`}
                          onClick={() => {
                            const selectedCategory = "Education";
                            // Update state based on the selected category
                            switch (selectedCategory) {
                              case "Experience":
                                setExperience(true);
                                setEducation(false);
                                setCredentials(false);
                                setOnEditMode(false);

                                break;
                              case "Education":
                                setExperience(false);
                                setEducation(true);
                                setCredentials(false);
                                setOnEditMode(false);

                                break;
                              case "Credentials":
                                setExperience(false);
                                setEducation(false);
                                setCredentials(true);
                                setOnEditMode(false);
                                break;
                              default:
                                // Handle default case or do nothing
                                break;
                            }
                          }}
                        >
                          Education
                        </button>
                      </li>
                      <li>
                        <button
                          className={`text-center px-2 quicksand ${
                            credentials
                              ? "font-bold text-dark"
                              : "text-secondary-dark"
                          } text-sm`}
                          onClick={() => {
                            const selectedCategory = "Credentials";
                            // Update state based on the selected category
                            switch (selectedCategory) {
                              case "Experience":
                                setExperience(true);
                                setEducation(false);
                                setCredentials(false);
                                setOnEditMode(false);
                                break;
                              case "Education":
                                setExperience(false);
                                setEducation(true);
                                setCredentials(false);
                                setOnEditMode(false);
                                break;
                              case "Credentials":
                                setExperience(false);
                                setEducation(false);
                                setCredentials(true);
                                setOnEditMode(false);
                                break;
                              default:
                                // Handle default case or do nothing
                                break;
                            }
                          }}
                        >
                          Credentials
                        </button>
                      </li>
                    </ul>
                  </div>
                  <br />

                  <section
                    className={`${
                      !experience && "hidden"
                    } w-full relative my-3`}
                  >
                    <ul className="grid grid-cols-1 gap-5 w-full">
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <h3 className="text-semi-dark font-bold text-lg mt-1">
                              Software Developer Intern | City Hall of Zamboanga
                            </h3>

                            <p className="text-secondary-dark  font-medium mt-2 text-sm">
                              Currently learning the technologies they use for
                              development, collaborating with my team members on
                              integration and implementation tasks, debugging
                              some bugs and issues, and supporting project
                              development. .
                            </p>

                            <h4 className="text-secondary-dark  mt-4 opacity-60 text-sm">
                              February 22, 2024 - Present
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <h3 className="text-semi-dark font-bold text-lg mt-1">
                              Software Developer Intern | City Hall of Zamboanga
                            </h3>

                            <p className="text-secondary-dark  font-medium mt-2 text-sm">
                              Currently learning the technologies they use for
                              development, collaborating with my team members on
                              integration and implementation tasks, debugging
                              some bugs and issues, and supporting project
                              development. .
                            </p>

                            <h4 className="text-secondary-dark  mt-4 opacity-60 text-sm">
                              February 22, 2024 - Present
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section
                    className={`${!education && "hidden"} w-full relative my-3`}
                  >
                    <ul className="grid grid-cols-1 gap-5 w-full">
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <h3 className="text-semi-dark font-bold text-lg mt-1">
                              Western Mindanao State University
                            </h3>
                            <h5 className="text-secondary-dark mt-1 opacity-80 font-bold text-md quicksand">
                              Bachelor of Science in Information Technology
                            </h5>

                            <h4 className="text-secondary-dark opacity-60 text-sm ">
                              September 2020 - Present
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <h3 className="text-semi-dark font-bold text-lg mt-1">
                              Basilan National High School
                            </h3>

                            <h5 className="text-secondary-dark mt-1 opacity-80 font-bold text-md quicksand"></h5>

                            <h4 className="text-secondary-dark opacity-60 text-sm ">
                              June 2016 - April 2020
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <h3 className="text-semi-dark font-bold text-lg mt-1">
                              De La Salle Araneta University
                            </h3>

                            <h5 className="text-secondary-dark mt-1 opacity-80 font-bold text-md quicksand"></h5>

                            <h4 className="text-secondary-dark opacity-60 text-sm ">
                              June 2010 - March 2016
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>

                  <section
                    className={`${
                      !credentials && "hidden"
                    } w-full relative my-3`}
                  >
                    <ul className="grid grid-cols-2 gap-5 w-full">
                      <li className="rounded flex items-center w-full">
                        <div className="w-full flex flex-col items-end justify-center">
                          <div className="flex items-center gap-2 text-semi-dark text-sm mb-2">
                            <button className="pt-1 text-red">
                              <DeleteSweepIcon />
                            </button>
                          </div>
                          <Image
                            src={MySQL}
                            alt=""
                            style={{
                              width: "18rem",
                              objectFit: "cover",
                            }}
                            className="w-full rounded border-dull-gray p-2"
                          />
                        </div>
                      </li>
                      <li className="rounded flex items-center w-full">
                        <div className="w-full flex flex-col items-end justify-center">
                          <div className="flex items-center gap-2 text-semi-dark text-sm mb-2">
                            <button className="pt-1 text-red">
                              <DeleteSweepIcon />
                            </button>
                          </div>
                          <Image
                            src={MySQL}
                            alt=""
                            style={{
                              width: "18rem",
                              objectFit: "cover",
                            }}
                            className="w-full rounded border-dull-gray p-2"
                          />
                        </div>
                      </li>
                      <li className="rounded flex items-center w-full">
                        <div className="w-full flex flex-col items-end justify-center">
                          <div className="flex items-center gap-2 text-semi-dark text-sm mb-2">
                            <button className="pt-1 text-red">
                              <DeleteSweepIcon />
                            </button>
                          </div>
                          <Image
                            src={MySQL}
                            alt=""
                            style={{
                              width: "18rem",
                              objectFit: "cover",
                            }}
                            className="w-full rounded border-dull-gray p-2"
                          />
                        </div>
                      </li>
                      <li className="rounded flex items-center w-full">
                        <div className="w-full flex flex-col items-end justify-center">
                          <div className="flex items-center gap-2 text-semi-dark text-sm mb-2">
                            <button className="pt-1 text-red">
                              <DeleteSweepIcon />
                            </button>
                          </div>
                          <Image
                            src={MySQL}
                            alt=""
                            style={{
                              width: "18rem",
                              objectFit: "cover",
                            }}
                            className="w-full rounded border-dull-gray p-2"
                          />
                        </div>
                      </li>
                      <li className="rounded flex items-center w-full">
                        <div className="w-full flex flex-col items-end justify-center">
                          <div className="flex items-center gap-2 text-semi-dark text-sm mb-2">
                            <button className="pt-1 text-red">
                              <DeleteSweepIcon />
                            </button>
                          </div>
                          <Image
                            src={MySQL}
                            alt=""
                            style={{
                              width: "18rem",
                              objectFit: "cover",
                            }}
                            className="w-full rounded border-dull-gray p-2"
                          />
                        </div>
                      </li>
                      <li className="rounded flex items-center w-full">
                        <div className="w-full flex flex-col items-end justify-center">
                          <div className="flex items-center gap-2 text-semi-dark text-sm mb-2">
                            <button className="pt-1 text-red">
                              <DeleteSweepIcon />
                            </button>
                          </div>
                          <Image
                            src={MySQL}
                            alt=""
                            style={{
                              width: "18rem",
                              objectFit: "cover",
                            }}
                            className="w-full rounded border-dull-gray p-2"
                          />
                        </div>
                      </li>
                    </ul>
                  </section>
                </article>
              </div>
            )}

            {/* services section crud */}
            {servicesCategory && (
              <div className="flex gap-5">
                <article className="w-1/2 border-dull-gray-right pr-5">
                  <br />
                  <div className="border-dull-gray-bottom pb-2 flex items-center justify-between">
                    <h2 className="text-xl text-primary font-bold quicksand">
                      {onEditMode ? "Edit" : "Add"} a Service
                    </h2>

                    <button
                      className={!onEditMode && "hidden"}
                      onClick={() => setOnEditMode(false)}
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  <br />
                  {servicesCategory && onEditMode && (
                    <div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Service Name
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                          value={"Website/Web Application"}
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Service Description
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        >
                          Crafting dynamic websites and web applications to make
                          your online presence shine. From concept to execution,
                          I bring vision to life with personalized seamless
                          functionality.
                        </textarea>
                      </div>

                      <br />

                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          Service Icon
                          <span className="text-primary font-bold"> *</span>
                        </p>
                      </div>
                      <form className={`flex items-center gap-5 mt-1`}>
                        <div
                          className="p-2 rounded"
                          {...getRootProps()}
                          style={{
                            width: "6rem",
                            cursor: "pointer",
                            border: "3px dashed #888",
                          }}
                        >
                          <input
                            {...getInputProps()}
                            name="image"
                            type="file"
                          />
                          {acceptedFiles.length === 0 ? (
                            <Image
                              src={MySQL}
                              className="rounded"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                objectFit: "cover",
                              }}
                              alt=""
                            />
                          ) : (
                            <>
                              <Image
                                src={URL.createObjectURL(acceptedFiles[0])}
                                className="rounded"
                                style={{
                                  width: "5rem",
                                  height: "5rem",
                                  objectFit: "cover",
                                }}
                                alt=""
                                width={150} // Specify the width of the image
                                height={150} // Specify the height of the image
                              />
                            </>
                          )}
                        </div>

                        <div className={`text-start`}>
                          <p className="text-2xl mb-1 font-medium mcolor-800">
                            Upload an icon
                          </p>
                          <p className="text-sm opacity-70 mb-4">
                            Drag and drop an image to the photo or click to
                            select one.
                          </p>
                        </div>
                      </form>

                      <br />
                      <br />
                      <div className="flex items-center justify-end w-full">
                        <button
                          className={`w-1/3 py-2 rounded bg-primary text-white`}
                          onClick={(e) => updateUserImage(e, 1)}
                        >
                          Update Service
                        </button>
                      </div>
                    </div>
                  )}

                  {servicesCategory && !onEditMode && (
                    <div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Service Name
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>

                        <input
                          type="text"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        />
                      </div>

                      <br />
                      <div className="mt-5">
                        <div className="flex items-center justify-between">
                          <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                            Service Description
                            <span className="text-primary font-bold"> *</span>
                          </p>
                        </div>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                          placeholder="Type here..."
                        ></textarea>
                      </div>

                      <br />

                      <div className="flex items-center justify-between">
                        <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                          Service Icon
                          <span className="text-primary font-bold"> *</span>
                        </p>
                      </div>
                      <form className={`flex items-center gap-5 mt-1`}>
                        <div
                          className="p-2 rounded"
                          {...getRootProps()}
                          style={{
                            width: "6rem",
                            cursor: "pointer",
                            border: "3px dashed #888",
                          }}
                        >
                          <input
                            {...getInputProps()}
                            name="image"
                            type="file"
                          />
                          {acceptedFiles.length === 0 ? (
                            <Image
                              src={MySQL}
                              className="rounded"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                objectFit: "cover",
                              }}
                              alt=""
                            />
                          ) : (
                            <>
                              <Image
                                src={URL.createObjectURL(acceptedFiles[0])}
                                className="rounded"
                                style={{
                                  width: "5rem",
                                  height: "5rem",
                                  objectFit: "cover",
                                }}
                                alt=""
                                width={150} // Specify the width of the image
                                height={150} // Specify the height of the image
                              />
                            </>
                          )}
                        </div>

                        <div className={`text-start`}>
                          <p className="text-2xl mb-1 font-medium mcolor-800">
                            Upload an icon
                          </p>
                          <p className="text-sm opacity-70 mb-4">
                            Drag and drop an image to the photo or click to
                            select one.
                          </p>
                        </div>
                      </form>

                      <br />
                      <br />
                      <div className="flex items-center justify-end w-full">
                        <button
                          className={`w-1/3 py-2 rounded bg-primary text-white`}
                          onClick={(e) => updateUserImage(e, 1)}
                        >
                          Add Service
                        </button>
                      </div>
                    </div>
                  )}
                </article>

                <article className="w-1/2">
                  <br />

                  <div className="flex items-center justify-between border-dull-gray-bottom pb-2">
                    <h2 className="text-xl text-primary font-bold quicksand ">
                      Service List
                    </h2>
                    <ul class="flex items-center text-center gap-2">
                      <li>
                        <Link
                          className="text-center font-bold px-2 quicksand text-dark text-sm"
                          href={"#about"}
                        >
                          All
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-center px-2 quicksand text-secondary-dark text-sm"
                          href={"#projects"}
                        >
                          Web
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-center px-2 quicksand text-secondary-dark text-sm"
                          href={"#qualifications"}
                        >
                          Mobile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-center px-2 quicksand text-secondary-dark text-sm"
                          href={"#qualifications"}
                        >
                          Desktop
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <br />

                  <section className={` w-full relative my-3`}>
                    <ul className="grid grid-cols-1 gap-5 w-full">
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <div className="w-full flex items-center justify-center">
                              <Image
                                src={SocketIO}
                                alt=""
                                style={{
                                  width: "6rem",
                                  height: "6rem",
                                  objectFit: "cover",
                                }}
                                className="w-full rounded border-dull-gray p-2"
                              />
                            </div>

                            <br />

                            <h3 className="text-semi-dark font-bold text-xl mt-1 text-center quicksand">
                              Website/Web Application
                            </h3>

                            <p className="text-secondary-dark text-center font-medium mt-4 text-sm">
                              Crafting dynamic websites and web applications to
                              make your online presence shine. From concept to
                              execution, I bring vision to life with
                              personalized seamless functionality.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="box-shadow-dull p-6 rounded flex items-center w-full">
                        <div className="flex flex-col items-center w-full">
                          <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                            <div className="flex items-center gap-2 text-semi-dark text-sm">
                              <button
                                className="text-primary-dark"
                                onClick={() => setOnEditMode(true)}
                              >
                                <BorderColorIcon fontSize="small" />
                              </button>
                              <button className="pt-1 text-red">
                                <DeleteSweepIcon />
                              </button>
                            </div>
                          </div>

                          {/* tools I used */}

                          <div className="w-full">
                            <div className="w-full flex items-center justify-center">
                              <Image
                                src={Tailwind}
                                alt=""
                                style={{
                                  width: "6rem",
                                  height: "6rem",
                                  objectFit: "cover",
                                }}
                                className="w-full rounded border-dull-gray p-2"
                              />
                            </div>

                            <br />

                            <h3 className="text-semi-dark font-bold text-xl mt-1 text-center quicksand">
                              Mobile Application
                            </h3>

                            <p className="text-secondary-dark text-center font-medium mt-4 text-sm">
                              Bringing your ideas to life with custom mobile app
                              development. I develop user-friendly
                              cross-platform mobile applications that cater to
                              your unique needs and objectives.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <br />
                </article>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioDetails;
