import React from "react";

const AdminQualificationCategory = ({
  imports: { Image },
  variables: { onEditMode, experience, education, credentials, images },
  icons: { CloseIcon, BorderColorIcon, DeleteSweepIcon },
  functions: {
    handleImgUpload,
    handleRemoveImage,
    setExperience,
    setEducation,
    setCredentials,
    setOnEditMode,
  },
  technologyIcons: { MySQL },
}) => {
  return (
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
            <option className="hoverline text-lg quicksand" value="Experience">
              Experience
            </option>
            <option className="hoverline text-lg quicksand" value="Education">
              Education
            </option>
            <option className="hoverline text-lg quicksand" value="Credentials">
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
                value={"Bachelor of Science in Information Technology"}
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
                  experience ? "font-bold text-dark" : "text-secondary-dark"
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
                  education ? "font-bold text-dark" : "text-secondary-dark"
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
                  credentials ? "font-bold text-dark" : "text-secondary-dark"
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

        <section className={`${!experience && "hidden"} w-full relative my-3`}>
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
                    integration and implementation tasks, debugging some bugs
                    and issues, and supporting project development. .
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
                    integration and implementation tasks, debugging some bugs
                    and issues, and supporting project development. .
                  </p>

                  <h4 className="text-secondary-dark  mt-4 opacity-60 text-sm">
                    February 22, 2024 - Present
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className={`${!education && "hidden"} w-full relative my-3`}>
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

        <section className={`${!credentials && "hidden"} w-full relative my-3`}>
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
  );
};

export default AdminQualificationCategory;
