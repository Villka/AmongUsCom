import React, {useState, useContext} from "react";
import Style from "./Style/Main.module.scss";
import css from './Style/Landing.module.scss';
import minion from "./Img/minion.png";
import arrow_down from './Img/arrow_down.png';
import discord_logo from './Img/discord-logo.png';
import arrow_small from './Img/arrow_small.png';
import pts_gained from './Img/pts_gained.png';
import plus from './Img/plus.png';
import ScrollableAnchor from 'react-scrollable-anchor'
import * as platform from 'platform';
import {GeneralContext, GeneralState} from '../../GeneralContext';
//import rectangle_6 from './img/pts_gained.png'

import {Container, Row, Col} from 'react-bootstrap';

export const Main = () => {

  const [isOnWindows, setIsOnWindows] = useState(false);

  if (platform.os && platform.os.family) {
    console.log(platform.os.family.toString());
    const win = platform.os.family.toString().includes('Windows');
    if (win !== isOnWindows)
      setIsOnWindows(win);
  }

  function AmongApp() {
    const context = useContext(GeneralContext) as GeneralState;
    if (context.client) return null;
    if (!isOnWindows) return null;
    return (<>
    <Container fluid>
      <Row className={css.among_app}>
      </Row>
    </Container>
        <Container fluid className={css.app_container}>
          <ScrollableAnchor id={'amongapp'}> 
            <Row className={css.app_contents}>
              <h1 className={css.title}>
              А еще...<br/>
              Попробуй наш клиент!
              </h1>  
            </Row>
            </ScrollableAnchor>
            <Row className={css.pros_list}>
              <Col xs={12} lg="auto" className={css.pros}>
                <img src={plus} alt="" />
                <p>Расширенная статистика</p>
              </Col>
              <Col xs={12} lg="auto" className={css.pros}>
                <img src={plus} alt="" />
                <p>Оверлей в игре</p>
              </Col>
              <Col xs={12} lg="auto" className={css.pros}>
                <img src={plus} alt="" />
                <p>+100 рейтинга за установку</p>
              </Col>
              <Row>
                <Col sm={2} className={css.pros} />
                <Col sm={8} className={css.pros}>
                  <div className={css.pros__big}>
                    <img src={plus} alt="" />
                    <div>
                      <h3>Помощь проекту</h3>
                      <p>Рейтинговый режим работает только благодаря пользователям с приложением</p>
                    </div>
                  </div>
                </Col>
                <Col sm={2} className={css.pros} />
                <a href="https://github.com/Friendly42/amc-app/releases/download/v0.9.11/amongcommunity.com-Setup-0.9.11.exe" className={css.among_app_button}>
                  Скачать Among App
                </a>
              </Row>
            </Row>
        </Container>
        </>);
  }


  return (
    <div id="main" className={Style.main}>
      <div className={`${Style.container_body} container-body`}>
        <div className={Style.main__row}>
          <div className={Style.main__text}>
            <h1 className={`${Style.main__title} title`}>
              Больше, чем просто игра
            </h1>
            <h2 className={`${Style.main__subtitle} subtitle`}>
              Ваша ведущая платформа соревновательных игр в Among Us
            </h2>
            <div className={css.top_buttons}><a href={"/game"} className={`${Style.main__button}  button-purple button-main`}>
              ИГРАТЬ
            </a>
            <GeneralContext.Consumer>
            {(state: any) => !state.client && isOnWindows && (
            <>
              <p>или</p> 
              <a href='#amongapp' className={css.among_app_button_2}>
                Among App
              </a>
            </>)}
            </GeneralContext.Consumer>
            </div>
          </div>
          <div className={Style.main__bg}>
            <picture>
              <img src={minion} alt="amongus" />
            </picture>
          </div>
        </div>
      </div>
      <Container fluid="md">
        <Row>
          <Col>
            <div className={css.wrapper}>
              <h1 className={`${css.title} ${css.clip}`}>
                  Представляем соревновательную платформу
              </h1>
            </div>
          </Col>
        </Row>
        <Row className={css.steps}>
              <div className={css.item}>
                <img src={discord_logo} className={css.icon} alt=""/>
                <div className={css.item}>Войди через Discord</div>
              </div>
              <img src={arrow_small} className={css.arrow} alt=""/>
              <div className={css.item}>Найди оппонентов</div>
              <img src={arrow_small} className={css.arrow} alt=""/>
              <div className={css.item}>Зайди в голосовой канал</div>
              <img src={arrow_small} className={css.arrow} alt=""/>
              <div className={css.item}>
                <div>Получи рейтинг</div>
              <img src={pts_gained} className={css.pts_gained} alt=""/>
              </div>
        </Row>
      </Container>
      <Container fluid className={css.blocks}>
          <Row>
            <Col xl={4}>
              <div className={css.block}>
                <h3>Как играть?</h3>
                <p>После входа нажми на кнопку “Играть” и найди комнату.</p>
                <p>Ты получишь сообщение от бота с приглашением в голосовой канал, где тиммейты будут ждать тебя! Начинайте игру, как обычно.</p>
                <a href={"/game"} className={`${css.fw} ${Style.main__button} button-purple button-main`}>
                  НАЧАТЬ ИГРУ
                </a>
              </div>
            </Col>
            <Col xl={4}>
              <div className={css.block}>
                <h3>Сезонные турниры</h3>
                <p>В каждом сезоне проводятся турниры с материальными (и не очень) призами!</p>
                <p>Победителям и участникам каждого сезона также выдаются уникальные значки для профиля: собери их все :D <br /></p>
              </div>
            </Col>
            <Col xl={4}>
              <div className={css.block}>
                <h3>Обычный режим</h3>
                <p>Для тех, кому не нравится турнирный формат - “вечный” режим также доступен.</p>
                <p>Это рейтинговый сезон, который никогда не закончится. Копите очки, пока не отстали!</p>
              </div>
            </Col>
          </Row>
      </Container>
      <AmongApp />
    </div>
  );
};
