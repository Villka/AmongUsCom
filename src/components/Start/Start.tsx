import config from '../../config';

//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

import onlyUnique from '../../utils/onlyUnique';

import UserSearch from '../UserSearch/UserSearch';

import React, {useEffect, useRef, useState, useContext} from "react";
import './Modal.scss';
import Style from "./Start.module.scss";
import { Redirect, useParams } from "react-router-dom";

import { Room } from "./Room/Room";
import { Moderator } from "./Room/Moderator/Moderator";
import {Host} from './Room/Moderator/Host';
import { Players } from "./Room/Players/Players";
import {GeneralContext, GeneralState} from '../../GeneralContext';

import RoomLog from '../RoomLog';

import Input from '../Input';

import API from '../../utils/API';
import Popup from 'reactjs-popup';

function StartComponent(props: any) {
  //id - roomId
  let {id} = useParams() as any;

  const [data, setData] = useState({ room: {id: '...'} as any, error: {} });
  const [inputOk, setInputOk] = useState(false);
  const [roomCode, setRoomCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDidOpen, setModalDidOpen] = useState(0);
  //const [players, setPlayers] = useState([]);
  const context = useContext(GeneralContext) as GeneralState;
  const players = context.players;
  const setPlayers = context.setPlayers;

  const fetchData = async () => {
    console.log('fetching API: /room/' + id);
    const res = await API.get('/room/' + id);
    if (res) {
      if (res.data.self === res.data.room.host) {
        context.setHost(true);
      }
      setData({
        room: res.data.room,
        error: res.data.error
      })
    }
    return res;
  }

  useEffect(() => {
    // code to run on component mount
    fetchData();
    const interval = setInterval(fetchData, config.room_update_timeout);
    return function cleanup() {
      clearInterval(interval);
      console.log('clearing' + interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const players = props.players.filter(onlyUnique)
    setPlayers(props.players);
  }, [props.players, setPlayers]); 

  function updateGeneralRoom() {
    if (!data.error && data.room && data.room !== context.room) {
      context.setRoom(data.room);
    }
  }

  useEffect(() => {
    updateGeneralRoom();
  }, [data]); 

  useEffect(() => {
    if (!modalDidOpen && context.isHost) {
      setModalDidOpen(modalDidOpen+1);
      setModalOpen(true);
    }
  })

  const handleInputChange = (value: string) => {
    console.log(value);
    if (value.length >= 5 && value.length <= 8) {
      setInputOk(true);
    } else {
      setInputOk(false);
    }
    setRoomCode(value);
  }

  const sendRoomCode = () => {
    if (roomCode.length < 5) return;
    API.post('/room/code', {code: roomCode});
    //context.socket.emit('setRoomCode', roomCode);
    setModalOpen(false);
  }

  const modalClose = () => {
    setModalOpen(false);
  }

  const doChangeCode = () => {
    setModalDidOpen(modalDidOpen+1);
    console.log('setModalOpen');
    //setRoomCode('');
    setModalOpen(true);
  }
  if (props.activeRoom && props.activeRoom.players.length >= 10) {
    return <Redirect to={"/game/rating"} />;
  }
  console.log(data.room);
  return (
    <div className={Style.start}>
      {/* <UserSearch /> */}
      <GeneralContext.Consumer>
        { state => 
            <Popup
            open={modalOpen}
            onClose={modalClose}
            //trigger={props.children}
            modal
            nested
          >
            {(close: any) => (
              <div className="my_modal">
                {/* <button className="close" onClick={close}>
                  &times;
                </button> */}
                <div className="header"> Вы выбраны хостом! </div>
                <div className="content">
                  {' '}
                  <p>Вы являетесь хостом этой игры. <br/>Создайте комнату со следующими настройками:</p>
                  <ul className="list">
                    <li>Карта: The Skeld</li>
                    <li>Предателей: 2</li>
                    <li>Сервер: EU</li>
                  </ul>
                  <div>
                    <div className="room_code">
                      <Input label="Введите код комнаты" handleValueChange={handleInputChange}/>
                      <div className="accept" onClick={sendRoomCode}><p className={inputOk ? "cool" : "default"}>Подтвердить</p></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        }
      </GeneralContext.Consumer>
      <div className="container">
        <div className={Style.start__row}>
          <div className={Style.start__content}>
            <Host id={data.room.host}/>
              <Room id={id} data={data.room} changeCode={doChangeCode} />
              <RoomLog />
            <Moderator data={data.room}/>
          </div>
          <Players data={data.room.players} players={players} addPlayer={props.addPlayer}/>
        </div>
      </div>
    </div>

    // <div className={Style.start}>
    //   <Row>
    //     <Col xl={{span: 4, order: 'first'}} md={{span: 12, order: 'last'}} >
    //       <div className="container">
    //         <Moderator data={data.room}/>
    //         <EndGame />
    //       </div>
    //     </Col>
    //     <Col>
    //       <div className="container">
    //         <Room id={id} data={data.room} />
    //         <Moderator data={data.room}/>
    //       </div>
    //     </Col>
    //     <Col>
    //       <Players activeRoom={props.activeRoom} data={data.room.players} players={players} addPlayer={props.addPlayer}/>
    //     </Col>
    //   </Row>
    // </div>
  );
}

export const Start = StartComponent;
