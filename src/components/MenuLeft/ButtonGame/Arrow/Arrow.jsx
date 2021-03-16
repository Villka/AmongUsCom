import React from "react";
import Style from "../Style/ButtonGame.module.scss";
import arrow from "../Img/arrow.svg";

export const Arrow = () => {
  return <img className={Style.menu_left__arrow} src={arrow} alt="" />;
};
