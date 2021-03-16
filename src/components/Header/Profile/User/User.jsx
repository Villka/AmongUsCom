import React from "react";
import user from "./Img/user.webp";
import Style from "../../Header.module.scss";

export const User = () => {
  return <img src={user} className={Style.header__user} alt={""} />;
};
