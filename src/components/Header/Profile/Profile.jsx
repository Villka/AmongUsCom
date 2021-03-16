import { Menu } from "./Menu/Menu";
import React from "react";
import { Notify } from "./Notify/Notify";
import Style from "../Header.module.scss";

import { Rating } from "./Rating/Rating";
import { Avatar } from "./Avatar/Avatar";
import { User } from "./User/User";

export const Profile = (props) => {
  return (
    <div className={`${Style.header__log} ${Style.header__logActiveBotton} logActiveBotton`}>
      <div className={`${Style.header__log_row} button-purple log-active`}>
        <Avatar img={props.user.avatar}/>
        <div className={Style.header__active_text}>
          <div className={Style.header__nickname}>{props.user.username}</div>
          <Rating points={props.user.points}/>
        </div>
        {/* <Notify /> */}
        <User />
      </div>
      <Menu />
    </div>
  );
};
