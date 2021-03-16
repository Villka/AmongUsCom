import Style from "./Style/Waiting.module.scss";
import people from "./Img/people.webp";
import circle_green from "./Img/circle-green.webp";
import circle_red from "./Img/circle-red.webp";
import React from 'react';

export function Waiting(props: any) {

  function startSearch() {
    props.onStartSearch()
  }

  return (
    <div className={Style.waiting}>
      <div className="container">
        <div className={Style.waiting__row}>
          <div className={Style.waiting__map}>
            <div className={Style.waiting__text}>
              <div className={Style.waiting__players}>
                <div className={Style.waiting__title}>Сбор игроков</div>
                <div className={Style.waiting__user_all}>
                  <img src={people} alt="" />
                  <div>64</div>
                </div>
              </div>
              <div className={Style.waiting__dates}>
                <div className={Style.waiting__date}>
                  <img src={circle_green} alt="" />
                  <div>Старт сезона 26.11.2020</div>
                </div>
                <div className={Style.waiting__date}>
                  <img src={circle_red} alt="" />
                  <div>Завершение 10.12.2020</div>
                </div>
              </div>
              <div className={Style.waiting__connect}>
                <div className={Style.waiting__time}>Рейтинговый режим</div>
                <div
                  onClick={startSearch}
                  className={`${Style.waiting__end} button-purple`}
                >
                  Подключиться
                </div>
                <div className={Style.waiting__season}>Season two</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
