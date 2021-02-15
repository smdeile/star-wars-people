import React from "react";
import logo from "../../pictures/Star_Wars_Logo.svg";
import css from "./Wrapper.module.css";

export default function Wrapper({ children }) {
  return (
    <div className={css.wrapper}>
      <nav className={css.navLogo}>
        <img src={logo} alt="logo" className={css.logo} />
      </nav>
      {children}
    </div>
  );
}
