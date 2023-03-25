import styles from "./Logo.module.scss";
import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Logo = (props) => {
  return (
    <Link className={styles.logo} onClick={props.onClick} href="/">
{/* TODO: Make this responsive width....  */}
      <Image src="/svg/logo.svg" alt="Logo" width={200} height={40} />
    </Link>
  );
}

export default Logo;
