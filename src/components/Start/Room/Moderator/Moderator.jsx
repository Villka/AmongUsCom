import React from "react";
import Style from "../../Start.module.scss";
import { Information } from "./Information";
import {Avatar} from './Avatar/Avatar';

export class Moderator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      room: props.data
    }
  }

  //props.data == room
  render() {
    if (!this.state.room || !this.state.room.moderator) return null;
    return (
      <div className={`${Style.start__moderator} ${Style.moderator}`}>
        <div className={Style.moderator__user}>
          <div className={Style.moderator__title}>Модератор комнаты</div>
          <div className={Style.moderator__info}>
          <Avatar avatar={this.state.moderator.avatar} />
          <div className={Style.moderator__text}>
            <div className={Style.moderator__name}>
              {this.state.moderator.username}
            </div>
            <div className={Style.moderator__numb}>
              {this.state.moderator.id}
            </div>
          </div>
        </div>
        </div>
        <div className={Style.moderator__sum}>0/3</div>
        <div className={`${Style.moderator__button} button-purple`}>
          Вызов модератора
        </div>
      </div>
    );
  }
};
