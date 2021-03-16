import React from 'react';
import {GeneralContext, GeneralState} from '../../GeneralContext';
import {withRouter} from 'react-router';
import Style from '../Start/Start.module.scss';
import LStyle from './RoomLog.module.scss';
import { defaultCipherList } from 'constants';

class RoomLog extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        console.log(props);
        this.state = {
            roomId: props.match.params.id,
            logs: []
        }
    }

    logsAdd(type: string, message: string) {

        let style;
        let title;
        switch(type) {
            case "JOIN": {
                title = "[JOIN]";
                style = {color: 'green'};
                break;
            }
            case "LEAVE": {
                title = "[LEAVE]";
                style = {color: 'red'};
                break;
            }
            case "CODE": {
                title = "[CODE]";
                style = {color: '#115382'};
                break;
            }
            case "START": {
                title = "[START]";
                style = {color: '#118240'};
                break;
            }
            case "END": {
                title = "[END]";
                style = {color: '#118240'};
                break;
            }
            default: {
                title = "[...]";
                style = {color: 'gray'};
                break;
            }
        }

        this.setState({
            ...this.state,
            logs: [
                {
                    title,
                    style,
                    message
                },
                ...this.state.logs,
            ]
        })
    }

    componentDidMount() {
        this.logsAdd('JOIN', `Вы зашли в комнату.`);
        const context: GeneralState = this.context;
        context.socket.emit('joinRoom', this.state.roomId);
        context.socket.on('userJoined', (user: any) => {
            console.log(user.username + ' has joined your room.');
            this.logsAdd('JOIN', `${user.username} зашел в комнату.`);
        });
        context.socket.on('userLeft', (user: any) => {
            console.log(user.username + ' has left your room.');
            this.logsAdd('LEAVE', `${user.username} вышел из комнаты.`);
        });
        context.socket.on('roomCodeSet', (code: string) => {
            console.log('room code ' + code + ' was set by the host.');
            this.logsAdd('CODE', `Хост установил код комнаты.`);
        })
        context.socket.on('gameStart', () => {
            console.log('game started.');
            this.logsAdd('START', `Хост запустил игру.`);
        })
        context.socket.on('gameEnd', () => {
            console.log('game ended.');
            this.logsAdd('END', `Игра завершена!`);
        })
    }

    render() {
        return (
            <div>
                <div className={`${Style.start__room} ${Style.room}`}>
                    <div className={Style.room__info}>
                        <div className={LStyle.logs}>
                            {this.state.logs.map((item: any) => {
                                return <div className={LStyle.single}><div style={item.style}>{item.title}</div> {item.message}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
RoomLog.contextType = GeneralContext;
export default withRouter(RoomLog)