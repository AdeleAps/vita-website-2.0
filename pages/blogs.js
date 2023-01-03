import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";

const Blogs = (props) => {
  return (
    <WebpageLayout
      openMobileNav={props.openMobileNav}
      setMobileNav={props.setMobileNav}
      setOpenFormModal={props.setOpenFormModal}
    >
      <div>Blogs page</div>
    </WebpageLayout>
  );
};

export default Blogs;
