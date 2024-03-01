"use client";
import Image from "next/image";
import Link from "next/link";
import Photo from "../../public/aboutphoto.png";
import { useDropzone } from "react-dropzone";

// icon imports
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";

const AdminProfile = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });

  const [headlineArr, setHeadlineArr] = useState([]);
  const [headlineHighlightsArr, setHheadlineHighlightsArr] = useState([]);

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

  const removeHeadlineHighlightsArr = (e, indexToRemove) => {
    e.preventDefault();
    setHheadlineHighlightsArr((prevArr) =>
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
              <li className="py-1 text-primary-dark font-bold text-sm">
                <Link href="" className="text-lg quicksand font-bold">
                  Profile Details
                </Link>
                <div
                  className="bg-primary rounded"
                  style={{ height: "1px", width: "100%" }}
                ></div>
              </li>

              <li className="py-1 text-secondary-dark text-sm">
                <Link href="/AdminPortfolio" className="text-lg quicksand">
                  Portfolio Details
                </Link>
                <div
                  className="rounded"
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

          {/* Profile Details */}

          <div
            className="px-5 py-5 full-width flex gap-3"
            style={{ borderTop: "solid 1px #efeded" }}
          >
            <article className="w-2/3">
              {/* <h2 className="text-primary font-bold text-3xl quicksand">
                Hero Section Information:{" "}
              </h2>
              <div
                className="bg-primary-dark rounded mt-1"
                style={{ height: "3px", width: "4rem" }}
              ></div>

              <br /> */}

              <form action="" className="w-full mt-5">
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Full Name
                      <span className="text-primary font-bold"> *</span>
                    </p>
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Full Name"
                      value={"Jasmin In-naka"}
                    />
                  </div>
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Email<span className="text-primary font-bold"> *</span>
                    </p>
                    <input
                      type="email"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      placeholder="Email"
                      value={"jasmininnaka@gmail.com"}
                    />
                  </div>
                </div>

                <br />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Headlines
                      <span className="text-primary font-bold"> *</span>
                    </p>

                    <button onClick={addHeadlineArr}>
                      <AddIcon />
                    </button>
                  </div>

                  {headlineArr.map((item, index) => (
                    <div
                      className="relative w-full flex items-center justify-between"
                      key={index}
                    >
                      <input
                        type="text"
                        className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                        placeholder="Type here..."
                        value={item}
                        onChange={(e) => handleHeadlineArr(e, index)}
                      />

                      <button
                        className="absolute right-2 top-2"
                        onClick={(e) => {
                          e.preventDefault();
                          removeHeadlineArr(e, index);
                        }}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  ))}

                  <ul className="grid grid-cols-1 gap-2 mt-3">
                    <li className="w-full">
                      <input
                        type="text"
                        className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                        placeholder="Full Name"
                        value={
                          "21-year old IT student who builds Software Applications."
                        }
                      />
                    </li>
                    <li className="w-full">
                      <input
                        type="text"
                        className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                        placeholder="Full Name"
                        value={
                          "I embrace minimalism and simplicity, along with the elegance they unveil."
                        }
                      />
                    </li>
                  </ul>
                </div>

                <br />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Highlighted Word(s)
                      <span className="text-primary font-bold"> *</span>
                    </p>

                    <button onClick={addHeadlineHighlightsArr}>
                      <AddIcon />
                    </button>
                  </div>

                  {headlineHighlightsArr.map((item, index) => (
                    <div
                      className="relative w-full flex items-center justify-between"
                      key={index}
                    >
                      <input
                        type="text"
                        className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                        placeholder="Type here..."
                        value={item}
                        onChange={(e) => handleHeadlineHighlightsArr(e, index)}
                      />

                      <button
                        className="absolute right-2 top-2"
                        onClick={(e) => {
                          e.preventDefault();
                          removeHeadlineHighlightsArr(e, index);
                        }}
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
                        placeholder="Full Name"
                        value={"Software Applications"}
                      />
                    </li>
                  </ul>
                </div>

                <br />
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Social Media Account Links
                      <span className="text-primary font-bold"> *</span>
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 gap-3">
                    {/* github */}
                    <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                      <input
                        type="text"
                        className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Link"
                        value={"https://github.com/jasmininnaka24"}
                      />
                      <input
                        type="text"
                        className="mt-2 w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Label"
                        value={"jasmininnaka24"}
                      />
                      <GitHubIcon className="absolute left-3 top-4" />
                    </li>

                    {/* linkedin */}
                    <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                      <input
                        type="text"
                        className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Link"
                        value={"https://www.linkedin.com/in/jasmin-in-naka/"}
                      />
                      <input
                        type="text"
                        className="mt-2 w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Label"
                        value={"jasmin-in-naka"}
                      />
                      <LinkedInIcon className="absolute left-3 top-4" />
                    </li>

                    {/* facebook */}
                    <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                      <input
                        type="text"
                        className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Link"
                        value={"https://www.facebook.com/jasmin.innaka"}
                      />
                      <input
                        type="text"
                        className="mt-2 w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Label"
                        value={"jasmin.innaka"}
                      />
                      <FacebookIcon className="absolute left-3 top-4" />
                    </li>
                    <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                      <input
                        type="text"
                        className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                        placeholder="Link"
                        value={"https://www.instagram.com/innk_jsmn/?hl=en"}
                      />
                      <input
                        type="text"
                        className="mt-2 w-full outline-none px-2 py-1 bg-secondary-light-dull border-thin-semi-dark rounded"
                        placeholder="Label"
                        value={"innk_jsmn"}
                      />
                      <InstagramIcon className="absolute left-3 top-4" />
                    </li>
                  </ul>
                </div>

                <br />
                <div className="mt-2 flex justify-end items-center">
                  <button className="bg-primary text-white py-2 rounded w-1/3 quicksand outline-none">
                    Save
                  </button>
                </div>
              </form>
            </article>

            <article className="w-1/3">
              <form
                className={`flex items-center justify-center flex-col px-8 gap-8 pt-5`}
              >
                <div
                  className="p-2 rounded-full"
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
                      src={Photo}
                      className="rounded-full"
                      style={{
                        width: "15rem",
                        height: "15rem",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  ) : (
                    <>
                      <Image
                        src={URL.createObjectURL(acceptedFiles[0])}
                        className="rounded-full"
                        style={{
                          width: "15rem",
                          height: "15rem",
                          objectFit: "cover",
                        }}
                        alt=""
                        width={150} // Specify the width of the image
                        height={150} // Specify the height of the image
                      />
                    </>
                  )}
                </div>

                <div className={`text-center`}>
                  <p className="text-2xl mb-1 font-medium mcolor-800">
                    Upload a new photo
                  </p>
                  <p className="text-sm opacity-70 mb-4">
                    Drag and drop an image to the photo or click to select one.
                  </p>

                  <button
                    className={`px-10 py-2 rounded w-full`}
                    onClick={(e) => updateUserImage(e, 1)}
                  >
                    <div className="bg-primary text-white w-full py-2 rounded">
                      Update
                    </div>
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminProfile;
