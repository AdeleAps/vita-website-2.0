import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const WebpageLayout = (props) => {
  return (
    <>
      <Header
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
        openFormModal={props.openFormModal}
      />
      {/* TODO: find a different way to do this */}
      {!props.openMobileNav && (
        <>
          {props.children}
          <Footer setOpenFormModal={props.setOpenFormModal} />
        </>
      )}
    </>
  );
};

export default WebpageLayout;
