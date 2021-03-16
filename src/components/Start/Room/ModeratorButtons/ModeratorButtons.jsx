import React from "react";
import Style from "../../Start.module.scss";
import {ProfileMenu} from "./ProfileMenu/ProfileMenu"

export const ModeratorButtons = (props) => {
  
  return (
    <div className={Style.room__buttons}>
      <div className={`${Style.room__button_end}`}>
        <div className={`${Style.button_purple} button-purple`}>
          Завершить игру
        </div>
      </div>
      <div className={Style.room__buttonsImposter}>
      {/* <div className={Style.room__imposter}>
        <p>Imposter №1</p>
        <div className={`${Style.logActiveBotto} logActiveBotton`}>
          <div className={`${Style.buttonPurple} button-purple`}>
              #1
          </div>
          <ProfileMenu />
        </div>
      </div>
      <div className={Style.room__imposter}>
        <p>Imposter №2</p>
        <div className={`${Style.logActiveBotto} logActiveBotton`}>
          <div className={`${Style.buttonPurple} button-purple`}>
              #2
          </div>
          <ProfileMenu />
        </div>
      </div> */}
      </div>
    </div>
  );
};
