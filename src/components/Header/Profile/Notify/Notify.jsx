import React from "react";
import Style from "./Notify.module.scss";
import bell from "./Img/bell.webp";

export const Notify = () => {
  return (
    <div className={Style.header__notify}>
      <img src={bell} alt={""} className={Style.header__bell} />
      <div className={Style.notify}>
        <p>5</p>
      </div>
    </div>
  );
};
