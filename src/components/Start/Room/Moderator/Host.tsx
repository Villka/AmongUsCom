import React, {useContext, useState} from "react";
import Style from "../../Start.module.scss";
import { Information } from "./Information";
import Popup from 'reactjs-popup';

import {Avatar} from './Avatar/Avatar';

import {GeneralContext} from '../../../../GeneralContext';

import API from '../../../../utils/API';

function sendReport() {
  API.post('/report/host');
}

function RenderPlayer(props: any) {
    // const context = useContext(GeneralContext);
    // console.log(props);
    const context = props.context;
    if (!context.players) return null;
    const user = context.players.find((ply: any) => ply.discordId === props.id);
    if (!user) {
        console.log('WATAFUK NO USER!!');
        return null;
    } else {
        return (
        <div className={`${Style.start__moderator} ${Style.moderator}`}>
            <div className={Style.moderator__user}>
                <div className={Style.moderator__title}>Хост</div>
                <div className={Style.moderator__info}>
                <Avatar avatar={user.avatar} />
                <div className={Style.moderator__text}>
                    <div className={Style.moderator__name}>
                    {user.username}
                    </div>
                    <div className={Style.moderator__numb}>
                    {user.id}
                    </div>
                </div>
                </div>
            </div>
            <Popup
            //open={modalOpen}
            //onClose={modalClose}
            onOpen={sendReport}
            trigger={<div className={Style.host__report}>
            Пожаловаться
        </div>}
            modal
            nested
          >
            {(close: any) => (
              <div className="my_modal">
                {/* <button className="close" onClick={close}>
                  &times;
                </button> */}
                <div className="header"> Жалоба на хоста </div>
                <div className="content">
                  {' '}
                  <p>Проверьте личные сообщения в Discord. <br/>Вам высланы инструкции по подаче жалобы.</p>
                </div>
              </div>
            )}
          </Popup>
        </div>
        );
    }
}

export class Host extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    componentDidUpdate() {
        if (this.props.id !== this.state.id) {
            this.setState({
                id: this.props.id
            })
        }
    }

    render() {
        return <GeneralContext.Consumer>
            {context => 
                <RenderPlayer context={context} id={this.state.id}/>
            }
        </GeneralContext.Consumer>
    }
};
