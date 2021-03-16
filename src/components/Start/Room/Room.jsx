import React from "react";
import globus from "../Img/globus.webp";
import Style from "../Start.module.scss";

import { LeaveButton } from "./LeaveButton/LeaveButton";
import { Code } from "./Code/Code";
import { EndGame } from "./EndGame/EndGame";

function RoomComponent(props) {
  // React.useEffect(() => {
  //   for (let elem of props.rooms) {
  //     if (elem.id === props.id) {
  //       props.setActiveRoom(elem);
  //       break;
  //     }
  //   }

  //   // TODO: Логика для проверки на модератора

  //   return () => {
  //     props.setActiveRoom({ moderator: [], players: [] });
  //   };
  // }, [props.id, props.rooms]);

  return (
    <div>
      <div className={`${Style.start__room} ${Style.room}`}>
        <div className={Style.room__info}>
          <div className={Style.room__number}>
            Комната <p>{props.data.id}</p> Карта<br/><p>The Skield</p>
          </div>
          <div className={Style.room__locale}>
            <img src={globus} alt="" />
            {/* {props.activeRoom.server} */}
            EU
          </div>
          <div className={Style.room__discon}>
            <div className={Style.room__disconnect}>Покинуть комнату</div>
            <LeaveButton />
          </div>
        </div>
        <Code /*code={props.activeRoom.code}*/ changeCode={props.changeCode} PopUp={props.PopUp}/>
      </div>
      <EndGame />
    </div>
  );
}

export const Room = RoomComponent;
