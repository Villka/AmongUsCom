import React from "react";
import Style from "./Footer.module.scss";
import scrollWEBP from "./Img/scroll.webp";
import scrollPNG from "./Img/scroll.png";

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.footer__row}>
          <div className={Style.footer__scroll}>
            <picture>
              <source srcset={scrollWEBP} type="image/webp" />
              <img src={scrollPNG} alt="scroll" />
            </picture>
            <p className={Style.footer__text}>Узнать больше</p>
          </div>
          <div className={Style.footer__social}>
            <a href={"/main"} className={`${Style.footer__link} discord`}>
              Discord
            </a>
            <a href={"/main"} className={`${Style.footer__link} vkontakte`}>
              Vkontakte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
