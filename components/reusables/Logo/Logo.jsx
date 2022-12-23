import styles from "./Logo.module.scss";
import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className={styles.logo}>placeholder</div>
    </Link>
  );
}

export default Logo;
