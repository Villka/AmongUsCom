import Style from "../Picker.module.scss";
import arrow from "./Img/arrow.webp";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function RoomOpen(props) {
  return (
    <NavLink to={`/game/room/${props.id}`} className={`${Style.picker__map}`}>
      <div className={classNames(Style.picker__map_row, Style.map__open)}>
        <div className={Style.picker__text}>
          <div className={Style.picker__map_up}>
            <div className={Style.picker__go}>Принять участие</div>
            <img src={arrow} alt="" className={Style.picker__arrow} />
          </div>
          <div className={Style.picker__subtitle}>Комната №{props.id}</div>
          <div className={Style.picker__title}>
            Rating PM<p>Map: The Scaled</p>
          </div>
          <div className={Style.picker__users}>
            <img
              className={`${Style.picker__avatar_map} avatar`}
              src={props.moderator.avatar}
              alt=""
            />
            <p className={Style.picker__name_map}>
              модератор - {props.moderator.name}
            </p>
            <p className={Style.picker__players}>
              {props.players.length}
              <span>/</span>10 игроков
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
