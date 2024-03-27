import React, { useEffect, useState } from "react";

const AdminAboutCategory = ({
  imports: { Image },
  variables: { images },
  functions: { handleImgUpload, handleRemoveImage },
  icons: { CloseIcon },
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
  // starting data
  const startingData = {
    job_role: "",
    currently_practicing: "",
    resume_link: "",
    paragraphs: [
      {
        id: null,
        paragraph: "",
        PortfolioAboutId: "",
      },
      {
        id: null,
        paragraph: "",
        PortfolioAboutId: "",
      },
    ],
  };

  const [aboutData, setAboutData] = useState(startingData);
  const [updateBtn, setUpdateBtn] = useState(false);

  const handleChangeForAboutData = (e) => {
    const { name, value } = e.target;
    setAboutData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getPortfolioAboutInformation = async () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      const res = await fetch(`/api/portfolioAboutsApi`, data);
      const response = await res.json();
      console.log(response.data);
      if (response?.data[0] !== undefined) {
        setAboutData((prevState) => ({
          ...prevState,
          id: response?.data[0].id,
          job_role: response?.data[0].jobRole,
          currently_practicing: response?.data[0].currentlyPracticing,
          resume_link: response?.data[0].resumeLink,
        }));

        setUpdateBtn(true);
      }
    }
  };

  const saveAboutData = async (e) => {
    e.preventDefault();
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobRole: aboutData.job_role,
        currentlyPracticing: aboutData.currently_practicing,
        resumeLink: aboutData.resume_link,
      }),
    };

    if (data) {
      const res = await fetch(`/api/portfolioAboutsApi`, data);

      if (res) {
        getPortfolioAboutInformation();
      }
    }
  };

  const updateAboutData = async (e) => {
    e.preventDefault();
    const data = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: aboutData.id,
        jobRole: aboutData.job_role,
        currentlyPracticing: aboutData.currently_practicing,
        resumeLink: aboutData.resume_link,
      }),
    };

    if (data) {
      const res = await fetch(`/api/portfolioAboutsApi`, data);

      if (res) {
        getaboutsParagraphData();
        console.log(aboutData.paragraphs);
        if (aboutData.paragraphs.length > 0) {
          updateAboutParagraphsData();
        } else {
          saveAboutParagraphsData();
        }
      }
    }
  };

  const handleChangeForParagraphs = (e, index) => {
    const { name, value } = e.target;

    // Create a copy of the paragraphs array using spread syntax
    const updatedParagraphs = [...aboutData.paragraphs];

    // Update the specific social link object
    updatedParagraphs[index] = {
      ...updatedParagraphs[index],
      [name]: value,
    };

    // Update the state using setAboutData with the entire updated object
    setAboutData((prevState) => ({
      ...prevState,
      paragraphs: updatedParagraphs,
    }));

    console.log(aboutData.paragraphs);
  };

  const getaboutsParagraphData = async () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      const res = await fetch(`/api/portfolioAboutsParagraphApi`, data);
      const response = await res.json();
      if (response?.data.length > 0) {
        setAboutData((prevState) => ({
          ...prevState,
          paragraphs: response?.data,
        }));
        setUpdateBtn(true);
      }
    }
  };

  const saveAboutParagraphsData = async () => {
    aboutData?.paragraphs?.map(async (item) => {
      const data = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paragraph: item.paragraph,
          PortfolioAboutId: aboutData.id,
        }),
      };

      if (data) {
        await fetch(`/api/portfolioAboutsParagraphApi`, data);
      }

      console.log(data);
    });
  };

  const updateAboutParagraphsData = async () => {
    aboutData?.paragraphs?.map(async (item) => {
      const data = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
          paragraph: item.paragraph,
          PortfolioAboutId: aboutData.id,
        }),
      };

      if (data) {
        await fetch(`/api/portfolioAboutsParagraphApi`, data);
        getaboutsParagraphData();
      }
    });
  };

  useEffect(() => {
    getPortfolioAboutInformation();
    getaboutsParagraphData();
  }, []);

  return (
    <div>
      <div className="flex gap-5">
        <article className="w-1/2 border-dull-gray-right pr-5">
          <div className="grid grid-cols-1 gap-3">
            <div className="w-full">
              <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                Job Role
                <span className="text-primary font-bold"> *</span>
              </p>
              <input
                type="text"
                className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                name="job_role"
                value={aboutData.job_role || ""}
                required={true}
                onChange={handleChangeForAboutData}
                placeholder="Job Role"
              />
            </div>
            <div className="w-full">
              <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                Currently Practicing
                <span className="text-primary font-bold"> *</span>
              </p>
              <input
                type="text"
                className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                name="currently_practicing"
                value={aboutData.currently_practicing || ""}
                onChange={handleChangeForAboutData}
                placeholder="Currently Practicing"
              />
            </div>
          </div>

          <br />
          <br />
          {/* Paragraph */}
          <div>
            <div className="flex items-center justify-between">
              <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
                About me in paragraph form
                <span className="text-primary font-bold"> *</span>
              </p>
            </div>

            {updateBtn && (
              <ul className="grid grid-cols-1 gap-2 mt-3">
                <li className="w-full">
                  <textarea
                    name="paragraph"
                    rows="5"
                    className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                    placeholder="Type here..."
                    onChange={(e) => handleChangeForParagraphs(e, 0)}
                    value={aboutData.paragraphs[0]?.paragraph}
                  ></textarea>
                </li>
                <li className="w-full">
                  <textarea
                    name="paragraph"
                    rows="5"
                    className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                    placeholder="Type here..."
                    onChange={(e) => handleChangeForParagraphs(e, 1)}
                    value={aboutData.paragraphs[1]?.paragraph}
                  ></textarea>
                </li>
              </ul>
            )}
          </div>
        </article>

        <article className="w-1/2">
          <div>
            <p className="mx-1 mb-1 text-primary-dark quicksand font-bold text-lg">
              Resume Link
              <span className="text-primary font-bold"> *</span>
            </p>
            <div className="w-full">
              <input
                type="text"
                className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                placeholder="Resume Link"
                name="resume_link"
                onChange={handleChangeForAboutData}
                value={aboutData.resume_link || ""}
              />
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
          onClick={(e) => {
            updateBtn ? updateAboutData(e) : saveAboutData(e);
          }}
        >
          {updateBtn ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default AdminAboutCategory;
