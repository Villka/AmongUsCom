import Style from "./GameFinished.module.scss";

import {Link} from 'react-router-dom';

import React, {useContext} from 'react';
import API from '../../utils/API';

import {GeneralContext} from '../../GeneralContext';


class GameFinished extends React.Component {
    
    //     players: game.players,
    //     impostors: game.impostors,
    //     points_crewmates: game.points_crewmates,
    //     points_impostors: game.points_impostors,
    //     result: game.result,
    //     won: game.result === 1 ? 'crewmates' : 'impostors'
    
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    
    fetchResults() {
        Promise.all([
            API.get('/game/results'),
            API.get('/user')
        ])
        .then(res => {
            const data = res[0].data;
            const data2 = res[1].data;
            this.setState({
                ...data.results,
                user: data2.user,
                loading: false
            })
        })
    }


    componentDidMount() {
        this.fetchResults();
        this.context.setState({
            game: null,
            alreadyInGame: false
        })
    }

    Loader = () => {
        return <div className={Style.loader} />;
    }

    render() {
        if (this.state.loading) {
            return <this.Loader />
        }
        return (
            <div className={Style.strap}>
                <div className={Style.gf_block}>
                    <h1 className={Style.finished_title}>Игра завершена</h1>
                    <h2 className={Style.gf__h2}>{
                        this.state.result === 1
                        ? 'Победа команды корабля'
                        : 'Победа предателей'
                    }</h2>
                    <div className={Style.gf__rating}>
                        {/* {Among<sub className={Style.gf_underline}>pts</sub>: <br/>   } */}
                        <img src={this.state.user.avatar}/> {this.state.user.username}:
                    </div>
                    <div className={Style.points}>{this.state.user.points}
                        <p className={this.state.you_won ? Style.gf__good : Style.gf__bad}>
                        ({this.state.you_won ? '+' : ''}{this.state.is_impostor ? this.state.points_impostors : this.state.points_crewmates })
                        </p>
                    </div>

                    <div className={Style.gf__buttons}>
                        <Link to="/main" className={Style.gf__button}>Профиль</Link>
                        <Link to="/game/rating/newgame" className={Style.gf__button}>Найти новую игру</Link>
                    </div> 
                </div>
            </div>
        );
    }
}
GameFinished.contextType = GeneralContext;

export {GameFinished};