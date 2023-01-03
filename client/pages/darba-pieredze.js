import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import CvPage from "../components/CvPage/CvPage";

const DarbaPieredze = (props) => {
  const CvProps = {
    title: "Darba pieredze",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <CvPage {...CvProps} />
    </WebpageLayout>
  );
};

export default DarbaPieredze;
