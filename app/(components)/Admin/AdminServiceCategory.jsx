import React, { useEffect, useState } from "react";

const AdminServiceCategory = ({
  imports: { Image, Link },
  variables: { acceptedFiles, servicesCategory, onEditMode },
  icons: { CloseIcon, BorderColorIcon, DeleteSweepIcon },
  functions: { getInputProps, getRootProps, setOnEditMode },
  technologyIcons: { MySQL, SocketIO, Tailwind },
}) => {
  // starting data
  const startingData = {
    service_name: "",
    service_desc: "",
    image: "",
  };

  // States
  const [servicesData, setServicesData] = useState([]);
  const [onHoldServiceData, setOnHoldServiceData] = useState(startingData);
  const [updateBtn, setUpdateBtn] = useState(false);
  const [currentIdToUpdate, setCurrentIdToUpdate] = useState(0);

  const handleChangeForServiceData = (e) => {
    const { name, value } = e.target;
    setOnHoldServiceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(value);
  };

  const getServicesData = async () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      const res = await fetch(`/api/portfolioServicesApi`, data);
      const response = await res.json();
      console.log(response.data);
      setServicesData(response.data);
    }
  };

  const addService = async (e) => {
    e.preventDefault();
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serviceName: onHoldServiceData?.service_name,
        serviceDesc: onHoldServiceData?.service_desc,
        serviceImgName:
          onHoldServiceData?.image !== ""
            ? onHoldServiceData?.image
            : "user.png",
      }),
    };

    if (data) {
      const res = await fetch(`/api/portfolioServicesApi`, data);
      if (res) {
        getServicesData();
        setOnHoldServiceData({
          service_name: "",
          service_desc: "",
          image: "",
        });
      }
    }
  };

  const updateService = async (e, id) => {
    e.preventDefault();
    const data = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        serviceName: onHoldServiceData?.service_name,
        serviceDesc: onHoldServiceData?.service_desc,
        serviceImgName:
          onHoldServiceData?.image !== ""
            ? onHoldServiceData?.image
            : "user.png",
      }),
    };

    if (data) {
      const res = await fetch(`/api/portfolioServicesApi`, data);
      if (res) {
        getServicesData();
        setOnHoldServiceData({
          service_name: "",
          service_desc: "",
          image: "",
        });
        setOnEditMode(false);
        setCurrentIdToUpdate(0);
      }
    }
  };

  const deleteService = async (e, id) => {
    e.preventDefault();

    const data = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };

    if (data) {
      const res = await fetch(`/api/portfolioServicesApi`, data);
      if (res) {
        getServicesData();
        setOnHoldServiceData({
          service_name: "",
          service_desc: "",
          image: "",
        });
        setOnEditMode(false);
        setCurrentIdToUpdate(0);
      }
    }
  };

  useEffect(() => {
    getServicesData();
  }, []);

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
            onClick={() => {
              setOnEditMode(false);
              setCurrentIdToUpdate(0);
              setOnHoldServiceData({
                service_name: "",
                service_desc: "",
                image: "",
              });
            }}
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
                name="service_name"
                value={onHoldServiceData.service_name || ""}
                required={true}
                onChange={handleChangeForServiceData}
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
                id=""
                rows="5"
                className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                placeholder="Type here..."
                name="service_desc"
                value={onHoldServiceData.service_desc || ""}
                required={true}
                onChange={handleChangeForServiceData}
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
                onClick={(e) => updateService(e, currentIdToUpdate)}
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
                name="service_name"
                value={onHoldServiceData.service_name || ""}
                required={true}
                onChange={handleChangeForServiceData}
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
                id=""
                rows="5"
                className="text-semi-dark border-thin-semi-dark text-md bg-dull-secondary-gray w-full px-3 py-2 rounded outline-none"
                placeholder="Type here..."
                name="service_desc"
                value={onHoldServiceData.service_desc || ""}
                required={true}
                onChange={handleChangeForServiceData}
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
                <input
                  {...getInputProps()}
                  name="image"
                  value={onHoldServiceData.image || ""}
                  onChange={handleChangeForServiceData}
                  type="file"
                />
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
                onClick={(e) => addService(e)}
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
        </div>
        <br />
        <section className={` w-full relative my-3`}>
          <ul className="grid grid-cols-1 gap-5 w-full">
            <p className="opacity-50 text-center">
              {servicesData.length === 0 && `You haven't added a service yet.`}
            </p>
            {servicesData
              .filter((item) => item.id !== currentIdToUpdate)
              .sort((a, b) => b.id - a.id)
              .map((item, index) => (
                <li
                  className="box-shadow-dull p-6 rounded flex items-center w-full"
                  key={index}
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="border-dull-gray-bottom mb-3 pb-1 flex items-center justify-end w-full">
                      <div className="flex items-center gap-2 text-semi-dark text-sm">
                        <button
                          className="text-primary-dark"
                          onClick={(e) => {
                            setOnEditMode(true);
                            setCurrentIdToUpdate(item.id);
                            setOnHoldServiceData({
                              service_name: item.serviceName,
                              service_desc: item.serviceDesc,
                              image: "user.png",
                            });
                          }}
                        >
                          <BorderColorIcon fontSize="small" />
                        </button>
                        <button
                          className="pt-1 text-red"
                          onClick={(e) => {
                            deleteService(e, item.id);
                          }}
                        >
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
                        {item.serviceName}
                      </h3>

                      <p className="text-secondary-dark text-center font-medium mt-4 text-sm">
                        {item.serviceDesc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </section>
        <br />
      </article>
    </div>
  );
};

export default AdminServiceCategory;
