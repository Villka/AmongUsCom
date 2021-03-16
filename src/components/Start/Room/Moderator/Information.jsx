import React from "react";
import Style from "../../Start.module.scss";
import { Avatar } from "./Avatar/Avatar";

export const Information = (props) => {
  return (
    <div className={Style.moderator__info}>
      <Avatar avatar={props.activeRoom.moderator.avatar} />
      <div className={Style.moderator__text}>
        <div className={Style.moderator__name}>
          {props.activeRoom.moderator.name}
        </div>
        <div className={Style.moderator__numb}>
          {props.activeRoom.moderator.id}
        </div>
      </div>
    </div>
  );
};
