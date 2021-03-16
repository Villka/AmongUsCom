import React from "react";
import classes from "../Header.module.scss";
import { Link } from "./Link/Link";

export const Nav = () => {
  return (
    <div className={classes.header__menuRow}>
      <nav className={classes.header__menu}>
        <Link to={"/main"}>Главная</Link>
        <Link to={"/game"}>Играть</Link>
        <Link to={"/info"}>Информация</Link>
      </nav>
    </div>
  );
};
