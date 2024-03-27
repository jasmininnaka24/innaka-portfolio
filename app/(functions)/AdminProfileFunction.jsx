import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const AdminProfileFunction = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (acceptedFiles) => {},
  });

  const [image, setImage] = useState([]);

  // starting data
  const startingData = {
    fullname: "",
    email: "",
    socialLinks: [
      { id: null, platform: "Github", link: "", label: "" },
      { id: null, platform: "LinkedIn", link: "", label: "" },
      { id: null, platform: "Facebook", link: "", label: "" },
      { id: null, platform: "Instagram", link: "", label: "" },
    ],
  };

  // States
  const [informationData, setInformationData] = useState(startingData);
  const [updateBtn, setUpdateBtn] = useState(false);

  const handleChangeForPersonalDetails = (e) => {
    const { name, value } = e.target;
    setInformationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getinformationData = async () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      const res = await fetch(`/api/personalDetailsApi`, data);
      const response = await res.json();
      if (response?.data[0] !== undefined) {
        setInformationData((prevState) => ({
          ...prevState,
          id: response?.data[0].id,
          fullname: response?.data[0].fullname,
          email: response?.data[0].email,
          age: response?.data[0].age,
          role: response?.data[0].role,
          interest: response?.data[0].interest,
          approach: response?.data[0].approach,
        }));
        setUpdateBtn(true);
      }
    }
  };

  const saveinformationData = async (e) => {
    e.preventDefault();
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: informationData?.fullname,
        email: informationData?.email,
        age: informationData?.age,
        role: informationData?.role,
        interest: informationData?.interest,
        approach: informationData?.approach,
      }),
    };

    if (data) {
      const res = await fetch(`/api/personalDetailsApi`, data);
      console.log(data);

      if (res) {
        getinformationData();
      }
    }
  };

  const updateinformationData = async (e) => {
    e.preventDefault();
    const data = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: informationData?.id,
        fullname: informationData?.fullname,
        email: informationData?.email,
        age: informationData?.age,
        role: informationData?.role,
        interest: informationData?.interest,
        approach: informationData?.approach,
      }),
    };

    if (data) {
      const res = await fetch(`/api/personalDetailsApi`, data);

      if (res) {
        getSocialLinks();
        if (informationData.socialLinks.length === 0) {
          saveSocialLinks();
        } else {
          updateSocialLinks();
        }
      }
    }
  };

  const handleChangeForSocialLinks = (e, index) => {
    const { name, value } = e.target;

    // Create a copy of the socialLinks array using spread syntax
    const updatedSocialLinks = [...informationData.socialLinks];

    // Update the specific social link object
    updatedSocialLinks[index] = {
      ...updatedSocialLinks[index],
      [name]: value,
    };

    // Update the state using setInformationData with the entire updated object
    setInformationData((prevState) => ({
      ...prevState,
      socialLinks: updatedSocialLinks,
    }));

    console.log(informationData.socialLinks);
  };

  const getSocialLinks = async () => {
    const data = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      const res = await fetch(`/api/personalDetailsSocialLinksApi`, data);
      const response = await res.json();
      console.log(response?.data);
      if (response?.data.length > 0) {
        setInformationData((prevState) => ({
          ...prevState,
          socialLinks: response?.data,
        }));
        setUpdateBtn(true);
      }
    }
  };

  const saveSocialLinks = async () => {
    informationData?.socialLinks?.map(async (item) => {
      const data = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platform: item.platform,
          link: item.link,
          label: item.label,
          PersonalDetailsId: informationData.id,
        }),
      };

      if (data) {
        await fetch(`/api/personalDetailsSocialLinksApi`, data);
      }
    });
  };

  const updateSocialLinks = async () => {
    informationData?.socialLinks?.map(async (item) => {
      const data = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item?.id,
          platform: item.platform,
          link: item.link,
          label: item.label,
          PersonalDetailsId: informationData.id,
        }),
      };

      if (data) {
        await fetch(`/api/personalDetailsSocialLinksApi`, data);
        getSocialLinks();
      }
    });
  };

  useEffect(() => {
    setImage(acceptedFiles[0]);
  }, [acceptedFiles]);

  return {
    functions: {
      handleChangeForPersonalDetails,
      getinformationData,
      saveinformationData,
      updateinformationData,
      handleChangeForSocialLinks,
      getSocialLinks,
    },
    stateFunctions: {
      getRootProps,
      getInputProps,
    },
    stateVariables: {
      acceptedFiles,
      informationData,
      updateBtn,
    },
  };
};

export default AdminProfileFunction;
