import React from 'react'
import styles from "./Button.module.scss"
const Button = (props) => {
  return (
    <button type={props.type ?? null} onClick={props.onClick} className={`${styles.button} ${styles[props.className] ?? ""}`}>{props.children}</button>
  )
}

export default Button