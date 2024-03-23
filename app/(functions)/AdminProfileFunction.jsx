import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const AdminProfileFunction = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {},
  });

  const [image, setImage] = useState([]);
  const [headlineArr, setHeadlineArr] = useState([]);
  const [headlineHighlightsArr, setHheadlineHighlightsArr] = useState([]);

  useEffect(() => {
    setImage(acceptedFiles[0]);
  }, [acceptedFiles]);

  // functions for adding profile inputs
  const addHeadlineArr = (e) => {
    e.preventDefault();
    if (headlineArr.length === 0 || headlineArr.every((item) => item !== "")) {
      setHeadlineArr([...headlineArr, ""]);
    }
  };

  const handleHeadlineArr = (e, index) => {
    e.preventDefault();
    const newArr = [...headlineArr];
    newArr[index] = e.target.value;
    setHeadlineArr(newArr);
  };

  const updateHeadline = (e, indexToUpdate) => {
    e.preventDefault();
    setHeadlineArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToUpdate)
    );
  };

  const removeHeadlineArr = (e, indexToRemove) => {
    e.preventDefault();
    setHeadlineArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToRemove)
    );
  };

  // functions for adding profile highlights
  const addHeadlineHighlightsArr = (e) => {
    e.preventDefault();

    if (
      headlineHighlightsArr.length === 0 ||
      headlineHighlightsArr.every((item) => item !== "")
    ) {
      setHheadlineHighlightsArr([...headlineHighlightsArr, ""]);
    }
  };

  const handleHeadlineHighlightsArr = (e, index) => {
    e.preventDefault();
    const newArr = [...headlineHighlightsArr];
    newArr[index] = e.target.value;
    setHheadlineHighlightsArr(newArr);
  };

  const updateHeadlineHighlightsArr = (e, indexToUpdate) => {
    e.preventDefault();
    setHheadlineHighlightsArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToUpdate)
    );
  };

  const removeHeadlineHighlightsArr = (e, indexToRemove) => {
    e.preventDefault();
    setHheadlineHighlightsArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToRemove)
    );
  };

  return {
    functions: {
      addHeadlineArr,
      handleHeadlineArr,
      updateHeadline,
      removeHeadlineArr,
      addHeadlineHighlightsArr,
      handleHeadlineHighlightsArr,
      updateHeadlineHighlightsArr,
      removeHeadlineHighlightsArr,
    },
    stateFunctions: {
      getRootProps,
      getInputProps,
      setHeadlineArr,
      setHheadlineHighlightsArr,
      setHeadlineArr,
      setImage,
    },
    stateVariables: {
      acceptedFiles,
      headlineArr,
      headlineHighlightsArr,
    },
  };
};

export default AdminProfileFunction;
