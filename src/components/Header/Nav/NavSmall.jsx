import React from "react";
import classes from "../Header.module.scss";
import style from "./Style/Style.module.scss";
import { Link } from "./Link/Link";

export const NavSmall = () => {
  return (
  <div className={`${style.ul} ${classes.header__menuRowSmall}`}>
    <li>
      <input type="checkbox" defaultChecked />
        <div className={style.arrow}></div>
        <i />
      <nav className={classes.header__menu}>
          <Link to={"/main"}>Главная</Link>
          <Link to={"/game"}>Играть</Link>
          {/* <Link to={"/info"}>Информация</Link> */}
      </nav>
    </li>
  </div>
  );
};

