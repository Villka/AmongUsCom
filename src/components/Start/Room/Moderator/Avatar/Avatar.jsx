import React from "react";
import Style from "../../../Start.module.scss";

export const Avatar = (props) => {
  return (
    <div className={`${Style.moderator__avatar} avatar`}>
      <img src={props.avatar} alt="" />
    </div>
  );
};
