import Button from "../reusables/Button/Button";
import Logo from "../reusables/Logo/Logo";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import MobileNavBtn from "./MobileNavBtn/MobileNavBtn";

const Header = (props) => {
  const handleOpenMobileNav = () => {
    props.setMobileNav(!props.openMobileNav);
  };

  const closeMobileNav = () => {
    props.setMobileNav(false);
  };

  return (
    <header
      className={`${styles.header} ${
        props.openMobileNav ? `${styles.mobileNav}` : ""
      }`}
    >
      <Logo onClick={closeMobileNav} />
      <Nav
        openMobileNav={props.openMobileNav}
        setMobileNav={props.setMobileNav}
      />
      <Button
        onClick={() => {
          props.setOpenFormModal(true);
        }}
        className="navBtn"
      >
        Pieteikties
      </Button>
      <MobileNavBtn
        className={props.openMobileNav ? "active" : ""}
        onClick={handleOpenMobileNav}
      />
    </header>
  );
};

export default Header;
