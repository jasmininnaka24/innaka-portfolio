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

  return {
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
  };
};

export default AdminPortfolioFunctions;
