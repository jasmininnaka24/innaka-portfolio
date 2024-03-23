import React from "react";

const AdminProjectCategory = ({
  imports: { Image, Link },
  variables: { onEditMode, projectTechsUsedArr, acceptedFiles, URL },
  icons: {
    AddIcon,
    CloseIcon,
    BorderColorIcon,
    DeleteSweepIcon,
    OpenInNewIcon,
    GitHubIcon,
  },
  functions: {
    addProjectTechUsed,
    getInputProps,
    getRootProps,
    handleProjectTechUsed,
    removeProjectTechUsed,
    setOnEditMode,
  },
  technologyIcons: { MySQL },
}) => {
  return (
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
              Drag and drop an image to the photo or click to select one.
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
            A web application that harnesses advanced functionalities, such as
            seamless integration with artificial intelligence and real-time
            communication capabilities through socket.io. This project showcases
            innovative technologies to enhance user qualifications and foster
            collaboration among users.
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
              Drag and drop an image to the photo or click to select one.
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
                    artificial intelligence and real-time communication
                    capabilities through socket.io. This project showcases
                    innovative technologies to enhance user qualificationss and
                    foster collaboration among users.
                  </p>

                  <br />
                  <div className="flex items-center gap-3">
                    <button className="w-1/2 text-center bg-primary text-light rounded py-2">
                      <Link
                        href={"https://mindscape-ai.vercel.app"}
                        target="_blank"
                      >
                        <OpenInNewIcon fontSize="small" className="mr-1 mb-1" />
                        Live Site
                      </Link>
                    </button>
                    <button className="w-1/2 text-center rounded py-2 bg-secondary-light px-2 text-dark">
                      <Link
                        href={"https://github.com/jasmininnaka24/mindscape-ai"}
                        target="_blank"
                      >
                        <GitHubIcon fontSize="small" className="mr-1 mb-1" />
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
                    artificial intelligence and real-time communication
                    capabilities through socket.io. This project showcases
                    innovative technologies to enhance user qualificationss and
                    foster collaboration among users.
                  </p>

                  <br />
                  <div className="flex items-center gap-3">
                    <button className="w-1/2 text-center bg-primary text-light rounded py-2">
                      <Link
                        href={"https://mindscape-ai.vercel.app"}
                        target="_blank"
                      >
                        <OpenInNewIcon fontSize="small" className="mr-1 mb-1" />
                        Live Site
                      </Link>
                    </button>
                    <button className="w-1/2 text-center rounded py-2 bg-secondary-light px-2 text-dark">
                      <Link
                        href={"https://github.com/jasmininnaka24/mindscape-ai"}
                        target="_blank"
                      >
                        <GitHubIcon fontSize="small" className="mr-1 mb-1" />
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
  );
};

export default AdminProjectCategory;
