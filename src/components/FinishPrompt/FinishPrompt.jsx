import Style from "./FinishPrompt.module.scss";

import Selector from './Selector';
import React from 'react';
import Select from 'react-select'
import API from "../../utils/API";
import { Redirect, withRouter } from "react-router-dom";
import {GeneralContext} from '../../GeneralContext';

class FinishPrompt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //awaitingResults
            players: props.players
        }
    }

    Loader = () => {
        return <div className={Style.loader} />;
    }

    updateSelector() {
        if (!this.state.players) return;
        let selectorOptions = this.state.selectorOptions || [];
        if (this.state.players.length !== selectorOptions.length) {
            const colourOptions = [];
            this.state.players.forEach(p => {
                colourOptions.push({
                    value: p.discordId,
                    label: p.username,
                    color: '#000'
                });
            })
            console.log('updating players...');
            this.setState({
                ...this.state,
                selectorOptions: colourOptions
            });
        }
    }

    async fetchGameStatus() {
        const res = await API.get('/game/status');
        console.log(res.data);
        this.setState({
            ...this.state,
            player_status: res.data.message,
            game_status: res.data.game
        })
    }

    componentDidMount() {
        this.updateSelector();
        this.fetchGameStatus();
        this.interval = setInterval(() => {
            this.fetchGameStatus();
        }, 15000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.game_status === 'ENDED' && !this.state.redirect) {
            //redirect to 'finish game'
            this.setState({
                ...this.state,
                redirect: true
            })
        }
        if (this.state.awaitingResults) return;
        this.updateSelector();
    }

    handleSelectorChange(multiOptions) {
        console.log(multiOptions);
        this.setState({
            ...this.state,
            impostorsPicked: multiOptions
        });
    }

    sendForm() {
        API.post('/game/finish', {
            traitors: this.state.impostorsPicked
        })
        .then(res => {
            if (res.data.error) {
                console.warn(res.data.error);
            } else {
                //success
                this.setState({
                    ...this.state,
                    awaitingResults: true
                })
            }
        })
    }

    colourOptions = [
        { value: 'chocolate', label: 'Friendly', color:'#000' },
        { value: 'strawberry', label: 'cooper', color:'#000' },
        { value: 'vanilla', label: 'flopper', color:'#000' }
      ]
    render() {
        if (this.state.redirect) {
            return <Redirect to={'/game/room/' + this.props.match.params.id + '/results' } />;
        }
        if (this.state.awaitingResults) {
            return(
                <div className={Style.strap}>
                    <div className={Style.gf_block}>
                        {/* <h1 className={Style.finished_title}>{this.state.players.length}</h1> */}
                        <h1 className={Style.finished_title}>Ожидание результатов...</h1>
                        <h2 className={Style.gf__h2}> Ждем подтверждения от других игроков </h2>
                        {/* <div className={Style.gf__rating}>
                            Кто был предателем в этой игре?
                        </div> */}
                        <this.Loader />
                    </div>
                </div>
            )
        }
        return (
            <div className={Style.strap}>
                <div className={Style.gf_block}>
                    {/* <h1 className={Style.finished_title}>{this.state.players.length}</h1> */}
                    <h1 className={Style.finished_title}>Завершение...</h1>
                    <h2 className={Style.gf__h2}> Необходима дополнительная информация </h2>
                    <div className={Style.gf__rating}>
                        {/* {Among<sub className={Style.gf_underline}>pts</sub>: <br/>   } */}
                        Кто был предателем в этой игре?
                    </div>
                    <div className={Style.points}>
                        <Selector players={this.state.players} handleChange={this.handleSelectorChange.bind(this)}
                        colourOptions={this.state.selectorOptions} />
                    </div>

                    <div className={Style.gf__buttons}>
                        {/* <div className={Style.gf__button}>Профиль</div> */}
                        <div className={Style.gf__button} onClick={this.sendForm.bind(this)}>Отправить</div>
                    </div> 
                </div>
            </div>
        );
    }
}

FinishPrompt.contextType = GeneralContext;

export default withRouter(FinishPrompt);