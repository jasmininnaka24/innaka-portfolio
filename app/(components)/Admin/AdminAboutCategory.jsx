import React from "react";

const AdminAboutCategory = ({
  imports: { Image },
  variables: { aboutHighlightsArr, aboutArr, selectedfile, images },
  functions: {
    handleImgUpload,
    addAboutMeArrInfo,
    addAboutHighlightsArr,
    FileUploadSubmit,
    InputChange,
    handleRemoveImage,
    handleAboutHighlightsArr,
    removeAboutHighlightsArr,
    handleAboutMeArrInfo,
  },
  icons: { AddIcon, CloseIcon, EmailIcon }, // Destructure icons from icons object
  technologyIcons: {
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
  },
}) => {
  return (
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
                  I`m a Software Developer. Currently practicing UX/UI Design.
                  Productive coding at night till midnight. I love coffee, cats,
                  and rainy season.
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
  );
};

export default AdminAboutCategory;
