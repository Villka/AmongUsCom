import React from "react";
import Style from "../Header.module.scss";
import config from '../../../config';

export function LogIn(props) {
  if (props.isLoggedIn === false) {
    return (
      <a href={config.api_path + '/auth'} className={`${Style.header__log} ${Style.header__log_close} button-purple log-close`}>Войти</a>
    );
  } else {
    return (
      <div className={`${Style.header__log} ${Style.header__log_close} button-purple log-close`}>Войти</div>
    )
  }
}
