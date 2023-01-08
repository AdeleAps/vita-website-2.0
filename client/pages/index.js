import LandingPage from "../components/LandingPage/LandingPage";
import WebpageLayout from "../components/reusables/WebpageLayout/WebpageLayout";
import WebsiteHead from "../components/reusables/WebsiteHead/WebsiteHead";

export default function Home(props) {
  return (
    <div>
      <WebsiteHead title="Psiholoģe Vita Apsīte" />
      <WebpageLayout
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
        setOpenFormModal={props.setOpenFormModal}
      >
        <LandingPage setOpenFormModal={props.setOpenFormModal} />
      </WebpageLayout>
    </div>
  );
}
