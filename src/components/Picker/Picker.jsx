import Style from "./Picker.module.scss";
import React from "react";
import RoomOpen from "./Room/RoomOpen";
import RoomClose from "./Room/RoomClose";

function PickerComponent(props) {
  return null;
  const resMaps = props.rooms.map((item) =>
    item.players.length < 10 ? (
      <RoomOpen {...item} key={`${item.id}${item.moderator}`} />
    ) : (
      <RoomClose {...item} key={`${item.id}${item.moderator}`} />
    )
  );

  return (
    <div className={Style.picker}>
      <div className="container">
        <div className={Style.picker__row}>{resMaps}</div>
      </div>
    </div>
  );
}

export const Picker = PickerComponent;
