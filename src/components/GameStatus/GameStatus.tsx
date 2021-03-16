import Style from "./GameStatus.module.scss";
import {Redirect, useParams, withRouter} from "react-router-dom";

import React from 'react';
import API from '../../utils/API'

import {GeneralContext, GeneralState} from '../../GeneralContext';
import { css } from "react-select/src/components/Control";

function Loader() {
    return <div className={Style.loader} />;
}

class GameStatus extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            status: "LOADING",
            //game: "WAITING" //WAITING, STARTED, ENDED
            game: "FINISHED",
            id: this.props.match.params.id,
            iAmReady: false,
            gameCancelled: false
        }
        console.log('gameStatus ID: ' + this.state.id);
        //this.setState.bind(this);
        this.Steps = this.Steps.bind(this);
    } 

    interval: NodeJS.Timeout | undefined = undefined;

    StepsItem(props: any) {
        const number = props.number;
        const children = props.children;
        const active = props.active;
        if (active) {
            return (
                <div className={Style.item_active}><p>{number.toString()}</p>{children}</div>
            )
        } else {
            return (
                <div className={Style.item}><p>{number.toString()}</p>{children}</div>
            )
        }
    }

    Steps = () => {
        const context = this.context as GeneralState;
        let currentStep = 0;
        const players = this.context.players ? this.context.players.length : 0;
        //if (this.state.status === "WAITING")
        if (this.state.status === "JOINED") {
            currentStep = 3;
            if (this.state.iAmReady) {
                currentStep = 4;
            }
            if (context.players && context.room && context.players.length >= context.room.plys_enough_to_play) {
                currentStep = 5;
                if (!this.state.iAmReady) {
                    this.setState({
                        ...this.state,
                        iAmReady: true
                    })
                }
            }
        }
        if (this.state.status === "WAITING") {
            currentStep = 1;
            if (this.state.iAmReady) {
                currentStep = 2;
            }
        }
        if (this.state.game === "STARTED") {
            currentStep = 6;
        }
        const notifDisabled = context.user ? context.user.disable_notif : false;
        if (currentStep === 1 && notifDisabled) currentStep = 2;
        return (
            <div className={Style.steps_wrap}>
                <div className={Style.steps}>
        <this.StepsItem number={1} active={currentStep === 1}>{(notifDisabled && 'Оповещения от бота отключены') || 'Проверьте сообщения от бота в Discord'}</this.StepsItem>
                    <this.StepsItem number={2} active={currentStep === 2}>Подключитесь к голосовому каналу</this.StepsItem>
                    <this.StepsItem number={3} active={currentStep === 3}>Подключитесь к игре
                    <div className={Style.btn}
                        onClick={() => {
                            this.setState({...this.state, iAmReady: true})
                        }}
                    >Я готов</div></this.StepsItem>
                    <this.StepsItem number={4} active={currentStep === 4}>Подбор игроков... ({players}/10)
                    <div className={Style.content}><div className={Style.loader + ' ' + Style.loader__mini} /><div className={Style.playercount}></div></div></this.StepsItem>
                    <this.StepsItem number={5} active={currentStep === 5}>Подождите, пока хост запустит игру...</this.StepsItem>
                </div>
            </div>
        );
    }


    StatusBar = () => {
        let title = "";
        let status = "";
        switch (this.state.game) {
            case "WAITING": {
                title = "Ожидание начала игры";
                break;
            }
            case "STARTED": {
                title = "Игра началась";
                break;
            }
            case "ENDED": {
                title = "Игра завершена, подсчет результатов..."
                break;
            }
            case "JOINED": {
                status = "Ожидание других игроков...";
                break;
            }
            case "CANCELLED": {
                title = "Хост отменил игру"
                status = 'Причина: ' + this.state.status;
                break;
            }
            default: {
                title = "Ожидание начала игры";
                break;
            }
        }
        switch (this.state.status) {
            case "OFFLINE": {
                if (this.state.game !== "CANCELLED")
                title = "Вы наблюдаете за игрой";
                break;
            }
            case "WAITING": {
                status = "Пожалуйста, подключитесь к голосовому каналу";
                break;
            }
            case "JOINED": {
                if (this.state.game === 'WAITING')
                    status = "Ожидание других игроков...";
                else if (this.state.game === 'STARTED') {
                    status = "Удачи!";
                }
                break;
            }
            default: {
                break;
            }
        }
        if (this.state.status === "LOADING") {
            return <Loader />;
        }
        if (this.state.game === "INPUT_REQUIRED") {
            return <Redirect to={"/game/room/"+this.state.id+"/prompt"} />
        }
        else {
            return (
                <>
                    <h1 className={Style.finished_title}>{title}</h1>
                    {/* <h2 className={Style.gf__h2}>{status}</h2> */}
                    {this.Steps()}
                </>
            )
        }
    }

    async fetchGameStatus() {
        //const context = this.context as GeneralState;
        // if (!context.loaded) {
        //     console.log(false);
        //     setTimeout(() => {
        //         this.fetchGameStatus();
        //     }, 100);
        //     return;
        // }
        if (this.state.gameCancelled) return;
        const res = await API.get('/game/status');
        console.log(res.data);
        this.setState({
            ...this.state,
            status: res.data.message,
            game: res.data.game
        })
    }

    async componentDidMount() {
        const context = this.context as GeneralState;
        
        this.fetchGameStatus();
        this.interval = setInterval(() => {
            this.fetchGameStatus();
        }, 15000);

        context.socket.on('gameCancelled', (reason: string) => {
            this.setState({
                ...this.state,
                status: reason,
                game: "CANCELLED",
                gameCancelled: true
            });
            console.log('game cancelled.');
        })

        context.socket.on('userConnected', (discordId: string) => {
            if (discordId === this.context.user.discordId) {
                console.log('You joined the vc.');
                this.setState({
                    ...this.state,
                    status: "JOINED"
                })
            }
        });

        context.socket.on('userDisconnected', (discordId: string) => {
            if (discordId === this.context.user.discordId) {
                console.log("You've left the vc.");
                this.setState({
                    ...this.state,
                    status: "WAITING"
                })
            }
        });
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            console.log('interval cleared.');
        }
    }
    
    render() {
        if (this.state.game === "ENDED")
            return <Redirect to={"/game/room/" + this.props.match.params.id + "/results"} />;
        return (
            <div className={Style.strap}>
                <div className={Style.gf_block}>
                    <this.StatusBar />
                </div>
            </div>
        );
    }
}
GameStatus.contextType = GeneralContext;
export default withRouter(GameStatus);