import Style from "../Picker.module.scss";
import close from "./Img/close.svg";
import classNames from "classnames";

export default function RoomClose(props) {
  return (
    <div className={`${Style.picker__map}`}>
      <div className={classNames(Style.picker__map_row, Style.map__close)}>
        <div className={Style.picker__text}>
        <div className={Style.picker__map_up}>
            <div className={Style.picker__go}>Комната переполнена</div>
            <img src={close} alt="" className={Style.picker__close} />
          </div>
          <div className={Style.picker__subtitle}>Комната №{props.id}</div>
          <div className={Style.picker__title}>
            Rating PM<p>Map: The Skeld</p>
          </div>
          <div className={Style.picker__users}>
            <img
              className={`${Style.picker__avatar_map} avatar`}
              src={props.moderator.avatar}
              alt=""
            />
            <p className={Style.picker__name_map}>
              хост: {props.moderator.name}
            </p>
            <p className={Style.picker__players}>
              {props.players.length}
              <span>/</span>10 игроков
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
