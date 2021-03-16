import React, {useEffect, useState} from "react";
import Style from "./Style/Moderator.module.scss";
import Tabs from "./Style/Tabs.module.scss";
import ConnectedEditNews  from "./Edit/EditNews";
import { EditTest } from "./Edit/EditTest";
import API from '../../../utils/API';


export const Moderator = () => {
  const [posts, setPost] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(()=> {
    API.get('/news')
    .then(result => {
      setPost(result.posts)
    })
  },[])

  useEffect(()=> {
    API.get('/news')
    .then(result => {
      setQuestion(result.questions)
    })
  },[])

  const handleSubmit = (event) => {
    alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }

  return (
    <div className={Style.moderator}>
        <div className={`${Style.moderator__row} ${Tabs.tabs}`}>
          <input type="radio" id="tab1" name="tab-control" defaultChecked />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <input type="radio" id="tab4" name="tab-control" />
          <ul>
            <li title="News"><label htmlFor="tab1" role="button"><br /><span>Новости</span></label></li>
            <li title="Test"><label htmlFor="tab2" role="button"><br /><span>Тест</span></label></li>
            <li title="Rules"><label htmlFor="tab3" role="button"><br /><span>Правила</span></label></li>
            <li title="Returns"><label htmlFor="tab4" role="button"><br /><span>В разработка</span></label></li>
          </ul>
          <div className={Tabs.slider}><div className={Tabs.indicator} /></div>
          <div className={Tabs.content}>
            <section>
              <ConnectedEditNews />
            </section>
            <section>
              <EditTest />
            </section>
            <section>
              <h2>Правила для Редактора</h2>
              <b>1. </b>Не постите новости/тесты без ведома админимтрации или модерации.<br/>
              <b>2. </b>Перед публикацией поста/вопроса необходимо его дать на рассмотрение админимтрации или модерации.<br/>
              <b>3. </b>Старайтесь быть кратким в заголовке и информативным в посте. <br/>
              <b>4. </b>Цениться изысканый и лаконичный вопрос, подумайте о маслятах, которые скачивают данные в админке.
              </section>
            <section>
              <h2>В разработка</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae architecto libero reprehenderit aliquam magnam ratione quidem? Nobis doloribus molestiae enim deserunt necessitatibus eaque quidem incidunt.</section>
              <div className={`${Tabs.button} button-purple`}>Отправить</div>
          </div>
          {/* <div className={`${Style.moderator__button} button-purple`}>Отправить</div> */}
        </div>
    </div>
  );
};
