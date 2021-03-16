import React from "react";
import classes from "../../Header.module.scss";
import { NavLink } from "react-router-dom";

export const Link = (props) => {
  return (
    <NavLink
      to={props.to}
      activeClassName={`button-purple`}
      className={`${classes.header__button} menu-button ${classes.button_purple}`}
    >
      {props.children}
    </NavLink>
  );
};
