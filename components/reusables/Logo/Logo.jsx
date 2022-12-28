import styles from "./Logo.module.scss";
import React from "react";
import Link from "next/link";

const Logo = (props) => {
  return (
    <Link onClick={props.onClick} href="/">
      <div className={styles.logo}>placeholder</div>
    </Link>
  );
}

export default Logo;
