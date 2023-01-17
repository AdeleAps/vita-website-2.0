import React from "react";
import ContactsPage from "../components/ContactsPage/ContactsPage";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

const Kontakti = (props) => {
  return (
    <>
      <WebsiteHead title="Vita Apsīte - Kontakti" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <ContactsPage setOpenFormModal={props.setOpenFormModal} />
      </WebpageLayout>
    </>
  );
};

export default Kontakti;
