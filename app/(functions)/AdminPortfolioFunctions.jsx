import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import shortid from "shortid";

const AdminPortfolioFunctions = () => {
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
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages(acceptedFiles[0]);
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

  // /////////////////////////////////////////////////////
  // ABOUT CATEGORY FUNCTIONS

  return {
    functions: {
      handleImgUpload,
      handleRemoveImage,
      addProjectTechUsed,
      handleProjectTechUsed,
      removeProjectTechUsed,
    },
    stateFunctions: {
      setOnEditMode,
      setAboutCategory,
      setProjectCategory,
      setQualificationsCategory,
      setServicesCategory,
      setExperience,
      getRootProps,
      getInputProps,
      setEducation,
      setCredentials,
      setImages,
    },
    stateVariables: {
      acceptedFiles,
      acceptedFiles,
      onEditMode,
      added,
      updated,
      deleted,
      aboutCategory,
      projectCategory,
      qualificationsCategory,
      servicesCategory,
      experience,
      education,
      credentials,
      images,
      projectTechsUsedArr,
    },
  };
};

export default AdminPortfolioFunctions;
