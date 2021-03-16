import Style from "./GameSearch.module.scss";
import {Redirect} from "react-router-dom"

import React from 'react';
import API from '../../utils/API'

import {GeneralContext} from '../../GeneralContext';

export class GameSearch extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isSearchInProgress: true,
            roomId: undefined,
            unauthorized: false
        }
    } 

    async search() {
        const res = await API.post('/game/search');
        if (this.props.alreadyInGame) {
            this.setState({
                loading: true,
                roomId: res.data.room,
                isSearchInProgress: false,
                redirect: true
            });
            return;
        }
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1100)
        setTimeout(() => {
            this.setState({
                roomId: res.data.room,
                isSearchInProgress: false,
                unauthorized: res.data.error && res.data.error.code === 401
            });
            setTimeout(() => {
                this.setState({
                    redirect: true
                });
                this.props.onCancelSearch(true); //success
            }, 2000);
        }, 5000);
    }

    componentDidMount() {
        this.search();
    }

    componentWillUnmount() {
        this.setState({
            loading: false,
            roomId: null,
            isSearchInProgress: false,
            redirect: false
        });
    }

    componentDidUpdate() {
        if (this.state.unauthorized) {
            window.location.pathname = '/api/auth';
        }
    }

    GetTitle = () => {
        if (this.state.loading) {
            return(
                <>
                    <h1 className={Style.finished_title}>Подключение...</h1>
                    <h2 className={Style.gf__h2}> Система поиска игроков загружается </h2>
                </>
            );
        }
        if (this.state.isSearchInProgress) {
            return (
                <>
                    <h1 className={Style.finished_title}>Поиск игры</h1>
                    <h2 className={Style.gf__h2}> Подбираем лучших тиммейтов... </h2>
                </>
            );
        } else {
            return (
                <>
                    <h1 className={Style.finished_title}>Игра найдена</h1>
                    <h2 className={Style.gf__h2}>Подключение к комнате {this.state.roomId}</h2>
                </>
            );
        }
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to={"/game/room/" + this.state.roomId} />;
        }
        return (
            <div className={Style.strap}>
                <div className={Style.gf_block}>
                    <this.GetTitle />
                    <div className={Style.loader}></div>
                    <GeneralContext.Consumer>
                        {state => 
                            <div className={Style.gf__rating}>
                                {state.user && <img src={state.user.avatar}/>} {state.user && `${state.user.username}`}
                            </div>
                        }
                    </GeneralContext.Consumer>
                    {/* {<div className={Style.points}>800<sub>pts</sub></div>} */}

                    <div className={Style.gf__buttons}>
                        <div className={Style.gf__button} onClick={this.props.onCancelSearch}>Отменить</div>
                    </div> 
                </div>
            </div>
        );
    }
}