import React from "react";
import header_avatarWEBP from "./Img/avatar-header.webp";
import header_avatarPNG from "./Img/avatar-header.png";
import classes from "./Avatar.module.scss";

export const Avatar = (props) => {
  return (
    <picture>
      {/* {<source srcSet={header_avatarWEBP} type="image/webp" />} */}
      <img src={props.img} alt="" className={classes.header__avatar} />
    </picture>
  );
};
