import React from "react";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

const Blogs = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Blogs" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <div>Blogs page</div>
      </WebpageLayout>
    </>
  );
};

export default Blogs;
