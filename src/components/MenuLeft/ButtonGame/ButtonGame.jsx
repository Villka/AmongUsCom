import React from "react";
import Style from "./Style/ButtonGame.module.scss";
import { NavLink } from "react-router-dom";
import { Arrow } from "./Arrow/Arrow";

export const ButtonGame = (props) => {
  const [activeStyle, setActiveStyle] = React.useState(Style.menu_left__text);
  return (
    <NavLink
      to={props.to}
      id="buttonGame"
      className={
        activeStyle === Style.menu_left__text_purple
          ? `${Style.menu_left__button} button-purple`
          : Style.menu_left__button
      }
      isActive={(match, location) => {
        if (match) {
          setActiveStyle(Style.menu_left__text_purple);
        } else {
          setActiveStyle(Style.menu_left__text);
        }
      }}
    >
      <img className={Style.menu_left__svg} src={props.icon} alt="" />
      <div className={activeStyle}>{props.title}</div>
      <Arrow />
    </NavLink>
  );
};
