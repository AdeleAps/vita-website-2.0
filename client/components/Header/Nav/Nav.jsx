import React, { useState, useRef, useEffect } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowResize from "../../../utils/hooks/useWindowResize";

const Nav = (props) => {
  //TODO: Refactor logic, split nav into components.

  const [dropdown, setDropdown] = useState({
    izglitiba: false,
    pakalpojumi: false,
  });

  const handleIzglitibaDropdown = () => {
    setDropdown({
      izglitiba: !dropdown.izglitiba,
      pakalpojumi: props.openMobileNav ? dropdown.pakalpojumi : false,
    });
  };

  const handlePakalpojumiDropdown = () => {
    setDropdown({
      izglitiba: props.openMobileNav ? dropdown.izglitiba : false,
      pakalpojumi: !dropdown.pakalpojumi,
    });
  };

  const closeDropDown = () => {
    setDropdown({
      izglitiba: false,
      pakalpojumi: false,
    });
  };

  const izglitibaRef = useRef();
  const pakalpojumiRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [dropdown]);

  const closeOnOutsideClick = (event) => {
    if (
      (dropdown.izglitiba &&
        !props.openMobileNav &&
        izglitibaRef.current &&
        !izglitibaRef.current.contains(event.target)) ||
      (dropdown.pakalpojumi &&
        !props.openMobileNav &&
        pakalpojumiRef.current &&
        !pakalpojumiRef.current.contains(event.target))
    ) {
      closeDropDown();
    }
  };

  const router = useRouter();

  const activeLink = (href) => {
    if (router.pathname === href) {
      return styles.active;
    }
    return "";
  };

  const closeNav = () => {
    if (props.openMobileNav) {
      props.setMobileNav(false);
    }
    closeDropDown();
  };

  let size = useWindowResize();

  if (size.width >= 950 && props.openMobileNav) {
    props.setMobileNav(false);

    if (dropdown.izglitiba || dropdown.pakalpojumi) {
      closeDropDown();
    }
  }

  return (
    <nav
      className={`${styles.nav} ${
        props.openMobileNav ? `${styles.mobileNav}` : ""
      }`}
    >
      <ul>
        <li
          className={`${styles.dropdown} ${
            dropdown.izglitiba ? `${styles.activeDropdown}` : ""
          } ${props.openMobileNav ? `${styles.mobileDropdown}` : ""}`}
          ref={izglitibaRef}
        >
          <button
            aria-label="navigation header"
            onClick={handleIzglitibaDropdown}
          >
            Izglītība un pieredze
          </button>
          <div className={styles.dropdownWrapper}>
            <ul className={styles.dropdown}>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  href="/izglitiba"
                  className={activeLink("/izglitiba")}
                >
                  Izglītība/sertifikācija
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  href="/darba-pieredze"
                  className={activeLink("/darba-pieredze")}
                >
                  Darba pieredze
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={`${styles.dropdown} ${
            dropdown.pakalpojumi ? `${styles.activeDropdown}` : ""
          } ${props.openMobileNav ? `${styles.mobileDropdown}` : ""}`}
          ref={pakalpojumiRef}
        >
          <button
            aria-label="navigation header"
            onClick={handlePakalpojumiDropdown}
          >
            Pakalpojumi
          </button>
          <div className={styles.dropdownWrapper}>
            <ul className={styles.dropdown}>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/diagnostika")}
                  href="/pakalpojumi#diagnostika"
                >
                  Psiholoģiskā diagnostika
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/smilsu-speles")}
                  href="/pakalpojumi#smilsu-speles"
                >
                  Smilšu spēles terapija
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/psihoterapija")}
                  href="/pakalpojumi#psihoterapija"
                >
                 Ģimenes terapija
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/traumu-terapija")}
                  href="/pakalpojumi#traumu-terapija"
                >
                  Traumu terapija - EMDR metode
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/teraspele")}
                  href="/pakalpojumi#teraspele"
                >
                  Teraspēle
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/baha-ziedi")}
                  href="/pakalpojumi#baha-ziedi"
                >
                  Baha ziedu terapija
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/supervizija")}
                  href="/pakalpojumi#supervizija"
                >
                  Supervīzija
                </Link>
              </li>
              <li>
                <Link
                  aria-label="navigation link"
                  onClick={closeNav}
                  className={activeLink("/pakalpojumi/supervizija")}
                  href="/pakalpojumi#psihologu-parraudziba"
                >
                  Psihologu pārraudzība
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            aria-label="navigation link"
            onClick={props.openMobileNav && closeNav}
            className={activeLink("/maksa")}
            href="/maksa"
          >
            Maksa
          </Link>
        </li>
        <li>
          <Link
            aria-label="navigation link"
            onClick={props.openMobileNav && closeNav}
            className={activeLink("/kontakti")}
            href="/kontakti"
          >
            Kontakti
          </Link>
        </li>
        {/* <li>
          <Link
            onClick={props.openMobileNav && closeNav}
            className={activeLink("/blogs")}
            href="/blogs"
          >
            Blogs
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
