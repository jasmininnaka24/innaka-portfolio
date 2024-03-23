import React from "react";

const AdminServiceCategory = ({
  imports: { Image, Link },
  variables: { acceptedFiles, servicesCategory, onEditMode },
  icons: { CloseIcon, BorderColorIcon, DeleteSweepIcon },
  functions: { getInputProps, getRootProps, setOnEditMode },
  technologyIcons: { MySQL, SocketIO, Tailwind },
}) => {
  return (
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
                Crafting dynamic websites and web applications to make your
                online presence shine. From concept to execution, I bring vision
                to life with personalized seamless functionality.
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
                <input {...getInputProps()} name="image" type="file" />
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
                <input {...getInputProps()} name="image" type="file" />
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
                    Crafting dynamic websites and web applications to make your
                    online presence shine. From concept to execution, I bring
                    vision to life with personalized seamless functionality.
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
                    development. I develop user-friendly cross-platform mobile
                    applications that cater to your unique needs and objectives.
                  </p>
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

export default AdminServiceCategory;
