import React from "react";
import icon from "./Img/icon.png";
import classes from "../Header.module.scss";

export const Logo = () => {
  return (
    <div className={classes.header__logo}>
      <img src={icon} alt="" />
      <div className="logo-text">amc</div>
    </div>
  );
};
