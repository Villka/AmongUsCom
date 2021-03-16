import React from "react";
import Style from "../../Start.module.scss";
import Player from "./Player/Player";
import classNames from "classnames";

export const Players = (props) => {
  return (
    <div className={classNames(Style.players)}>
      <div className={Style.players__title}>Участники</div>
      <div className={Style.players__categories}>
        <div className={`${Style.first} ${Style.playersP}`}>Профиль</div>
        <div className={Style.playersP}>Игр</div>
        <div className={Style.playersP}>Побед</div>
        <div className={Style.playersP}>Трейтор</div>
        <div className={Style.playersP}>Among</div>
      </div>
      <div className={Style.players__stats}>
        {props.data && props.data.map((elem, index) => (
          <Player player={elem} data={elem} key={elem} players={props.players} addPlayer={props.addPlayer}/>
        ))}
      </div>
    </div>
  );
};
