import React from "react";
import Style from "../../Header.module.scss";
import exit_logo from "./Img/exit-log.webp";
import config from '../../../../config';
import {Link} from 'react-router-dom'

export const Menu = () => {
  return (
    <ul className="profileMenu">
      <li className="profileMenu__button">Профиль</li>
      <li className="border_bottom">Рейтинг</li>
      {/* <li className="profileMenu__button">Приватность</li>
      <li className="profileMenu__button">Ваши подписки</li>
      <li className="profileMenu__button">Ваши билеты</li>
      <li className="profileMenu__button">Ваши призы</li>
      <li className="profileMenu__button">Настройка игры</li>
      <li className="border_bottom">Черный список</li>
      <li className="profileMenu__button">Правосудие</li> */}
      <li className="profileMenu__button">Поддержка</li>
      <a href={config.api_path + '/auth/logout'}>
        <li className={``} >
          Выйти
          <img src={exit_logo} alt="" />
        </li>
      </a>
    </ul>
  );
};
