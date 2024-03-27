"use client";
import Image from "next/image";
import Link from "next/link";
import Photo from "../../public/aboutphoto.png";
import { useEffect, useState } from "react";

// icon imports
import NotificationsIcon from "@mui/icons-material/Notifications";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// function imports
import AdminProfileFunction from "../(functions)/AdminProfileFunction";

const AdminProfile = () => {
  const {
    functions: {
      handleChangeForPersonalDetails,
      getinformationData,
      saveinformationData,
      updateinformationData,
      handleChangeForSocialLinks,
      getSocialLinks,
    },
    stateFunctions: { getRootProps, getInputProps },
    stateVariables: { acceptedFiles, informationData, updateBtn },
  } = AdminProfileFunction();

  useEffect(() => {
    getinformationData();
    getSocialLinks();
  }, []);

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
              <form action="" className="w-full mt-5">
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Full Name
                      <span className="text-primary font-bold"> *</span>
                    </p>
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      name="fullname"
                      value={informationData?.fullname || ""}
                      onChange={handleChangeForPersonalDetails}
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Email<span className="text-primary font-bold"> *</span>
                    </p>
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      name="email"
                      required={true}
                      value={informationData?.email || ""}
                      autoComplete="off"
                      onChange={handleChangeForPersonalDetails}
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Age<span className="text-primary font-bold"> *</span>
                    </p>
                    <input
                      type="number"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      name="age"
                      required={true}
                      value={informationData?.age || ""}
                      autoComplete="off"
                      onChange={handleChangeForPersonalDetails}
                      placeholder="Age"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                      Role<span className="text-primary font-bold"> *</span>
                    </p>
                    <input
                      type="text"
                      className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                      name="role"
                      required={true}
                      value={informationData?.role || ""}
                      autoComplete="off"
                      onChange={handleChangeForPersonalDetails}
                      placeholder="Role"
                    />
                  </div>
                </div>

                <br />
                <div className="w-full">
                  <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                    Interest<span className="text-primary font-bold"> *</span>
                  </p>
                  <input
                    type="text"
                    className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                    name="interest"
                    required={true}
                    value={informationData?.interest || ""}
                    autoComplete="off"
                    onChange={handleChangeForPersonalDetails}
                    placeholder="Interest"
                  />
                </div>
                <br />
                <div className="w-full">
                  <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                    Personal Approach
                    <span className="text-primary font-bold"> *</span>
                  </p>
                  <input
                    type="text"
                    className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                    name="approach"
                    required={true}
                    value={informationData?.approach || ""}
                    autoComplete="off"
                    onChange={handleChangeForPersonalDetails}
                    placeholder="Personal Approach"
                  />
                </div>

                <br />

                {updateBtn && (
                  <div>
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
                            name="link"
                            onChange={(e) => handleChangeForSocialLinks(e, 0)}
                            value={informationData?.socialLinks[0]?.link || ""}
                          />
                          <input
                            type="text"
                            className="mt-2 w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                            placeholder="Label"
                            name="label"
                            onChange={(e) => handleChangeForSocialLinks(e, 0)}
                            value={informationData?.socialLinks[0]?.label || ""}
                          />
                          <GitHubIcon className="absolute left-3 top-4" />
                        </li>

                        {/* linkedin */}
                        <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                          <input
                            type="text"
                            className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                            placeholder="Link"
                            name="link"
                            onChange={(e) => handleChangeForSocialLinks(e, 1)}
                            value={informationData?.socialLinks[1]?.link || ""}
                          />
                          <input
                            type="text"
                            className="mt-2 w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                            placeholder="Label"
                            name="label"
                            onChange={(e) => handleChangeForSocialLinks(e, 1)}
                            value={informationData?.socialLinks[1]?.label || ""}
                          />
                          <LinkedInIcon className="absolute left-3 top-4" />
                        </li>

                        {/* facebook */}
                        <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                          <input
                            type="text"
                            className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                            placeholder="Link"
                            name="link"
                            onChange={(e) => handleChangeForSocialLinks(e, 2)}
                            value={informationData?.socialLinks[2]?.link || ""}
                          />
                          <input
                            type="text"
                            className="mt-2 w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                            placeholder="Label"
                            name="label"
                            onChange={(e) => handleChangeForSocialLinks(e, 2)}
                            value={informationData?.socialLinks[2]?.label || ""}
                          />
                          <FacebookIcon className="absolute left-3 top-4" />
                        </li>
                        <li className="w-full relative text-semi-dark text-sm bg-dull-secondary-gray px-3 py-3 outline-none pl-11">
                          <input
                            type="text"
                            className="w-full outline-none px-2 py-1 border-thin-semi-dark rounded bg-secondary-light-dull"
                            placeholder="Link"
                            name="link"
                            onChange={(e) => handleChangeForSocialLinks(e, 3)}
                            value={informationData?.socialLinks[3]?.link || ""}
                          />
                          <input
                            type="text"
                            className="mt-2 w-full outline-none px-2 py-1 bg-secondary-light-dull border-thin-semi-dark rounded"
                            placeholder="Label"
                            name="label"
                            onChange={(e) => handleChangeForSocialLinks(e, 3)}
                            value={informationData?.socialLinks[3]?.label || ""}
                          />
                          <InstagramIcon className="absolute left-3 top-4" />
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                <br />
                <div className="mt-2 flex justify-end items-center">
                  <button
                    onClick={(e) =>
                      updateBtn
                        ? updateinformationData(e)
                        : saveinformationData(e)
                    }
                    className="bg-primary text-white py-2 rounded w-1/3 quicksand outline-none"
                  >
                    {updateBtn ? "Update" : "Save"}
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
