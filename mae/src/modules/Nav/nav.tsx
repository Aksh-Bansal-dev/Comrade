import styles from "./styles.module.css";
import React from "react";

interface NavProps {}

const Nav:React.FC<NavProps> = () =>  {
  return (
    <div className={styles.container}>
      nav
    </div>
  );
}

export default Nav;
