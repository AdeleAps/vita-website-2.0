import styles from "./Logo.module.scss";
import React from "react";
import Link from "next/link";

const Logo = (props) => {
  return (
    <Link className={styles.logo} onClick={props.onClick} href="/">
      <div>placeholder</div>
    </Link>
  );
}

export default Logo;
