import Button from "../reusables/Button/Button";
import Logo from "../reusables/Logo/Logo";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import MobileNavBtn from "./MobileNavBtn/MobileNavBtn";
import { useState } from "react";

const Header = () => {
  const [openMobileNav, setMobileNav] = useState(false);

  const handleOpenMobileNav = () => {
    setMobileNav(!openMobileNav);
  };

  return (
    <header className={`${styles.header} ${
      openMobileNav ? `${styles.mobileNav}` : ""
    }`}>
      <Logo />
      <Nav openMobileNav={openMobileNav} setMobileNav={setMobileNav} />
      <Button className="navBtn" />
      <MobileNavBtn
        className={openMobileNav ? "active" : ""}
        onClick={handleOpenMobileNav}
      />
    </header>
  );
};

export default Header;
