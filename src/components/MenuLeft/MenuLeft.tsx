import Style from "./Style/MenuLeft.module.scss";
import rang from "./Img/menu-game/rang.svg";
import star from "./Img/menu-game/star.webp";
import avatar from "../Header/Profile/User/Img/user.webp";
import standard from "./Img/menu-game/standart.webp";
import heart from "./Img/menu-game/heart.svg";
import lock from "./Img/menu-game/lock.webp";
import { ButtonGame } from "./ButtonGame/ButtonGame";
import React, { useContext } from "react";
import {GeneralContext, GeneralState} from '../../GeneralContext';


export function MenuLeft() {
  const context = useContext(GeneralContext) as GeneralState;
  const Buttons = [
    {
      title:"Новости", icon:heart, to:"/Info/News"
    },
    {
      title:"Тест", icon:rang, to:"/Info/Test"
    },
    {
      title:"Правила", icon:standard, to:"/Info/Rules"
    },
    {
      title:"Топ", icon:avatar, to:"/Info/Top"
    },
    {
      title:"Модератор", icon:lock, to:"/Info/Moderator"
    }
  ]

  // if (!context.loaded) {
  //   return null;
  // }

  console.log(context.user);

  return (
    <nav className={Style.menu_left}>
      <div className={Style.menu_left__row}>
          {Buttons.map((item) => {
                if (item.title === "Модератор" && (!context.user || !context.user.is_editor)) {
                  return null;
                } else {
                  return(
                    <ButtonGame title={item.title} icon={item.icon} to={item.to} />
                  )
                }
            })}
      </div>
    </nav>
  );
}
