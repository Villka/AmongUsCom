import Style from "../../../Start.module.scss";
import API from '../../../../../utils/API';
import React from 'react';
import {GeneralContext, GeneralState} from '../../../../../GeneralContext';
import { stat } from "fs";


export default class Player extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      player: null,
      joinStatus: "...",
      style: {

      }
    }
  }

  componentDidMount() {
      console.log('MOUNT');
      if (!this.state.player) {
        API.get('/user/' + this.props.data)
        .then(res => {
          //console.log(res.data);
          this.props.addPlayer(res.data.user);
          const player = res.data.user;
          const joined = player ? player.joined : false;

          let state: any = {player: res.data.user};
          if (joined) {
            state.joinStatus = "В голосовом канале";
            state.style = {color: '#56c461'};
          } else {
            state.joinStatus = "Не подключен";
            state.style = {};
          }

          this.setState({
            player: state.player,
            joinStatus: state.joinStatus,
            style: state.style
          });
        })
      }
      
    const context = this.context as GeneralState;
    context.socket.on('userConnected', (discordId: string) => {
      if (this.state.player && this.state.player.discordId === discordId) {
        this.setState({
          ...this.state,
          joinStatus: "Подключился",
          style: {color: '#56c461'}
        })
      }
    });
    context.socket.on('userDisconnected', (discordId: string) => {
      if (this.state.player && this.state.player.discordId === discordId) {
        this.setState({
          ...this.state,
          joinStatus: "Не в гол. канале",
          style: null
        })
      }
    })
  }

  options () {
    return (
      <div className={`${Style.players__options}`}>
        <div className={`${Style.players__option}`}>Профиль</div>
        <div className={`${Style.players__option}`}>Пожаловаться</div>
        <div className={`${Style.players__option}`}>Выгнать</div>
      </div>
    )
  }

  render() {
    let player = this.state.player;
    if (!player) {
      player = {id: 0, stats: null, points: 1000};
    }
    if (!player.stats) {
      player.stats = {
        games_played: 0,
        wins_impostor: 0,
        wins_crewmate: 0,
        games_impostor: 0
      }
    }
    if (!player || !player.username) {
      return null;
    }
    return (
      <div className={`${Style.players__player}`}>
        <div className={Style.players__profile}>
          <img
            src={player.avatar}
            alt=""
            className={`${Style.players__avatar} avatar`}
          />
          <div className={Style.players__row}>
            <div className={Style.players__number}>{player.username}</div>
            <div className={Style.players__name} style={this.state.style}>{this.state.joinStatus}</div>
          </div>
        </div>
        <p className={Style.playersP}>{player.stats.games_played}</p>
        <p className={Style.playersP}>{player.stats.wins_impostor + player.stats.wins_crewmate}</p>
        <p className={Style.playersP}>{player.stats.games_impostor}</p>
        <p className={Style.playersP}>{player.points}</p>
      </div>
    )
  }
}
Player.contextType = GeneralContext;


// export default function Player({ player }) {
//   return (
//     <div className={`${Style.players__player}`}>
//       <div className={Style.players__profile}>
//         <img
//           src={player.avatar}
//           alt=""
//           className={`${Style.players__avatar} avatar`}
//         />
//         <div className={Style.players__row}>
//           <div className={Style.players__name}>{player.name}</div>
//           <div className={Style.players__number}>#{player.id}</div>
//         </div>
//       </div>
//       <p>{player.games}</p>
//       <p>{player.winrate}</p>
//       <p>{player.imposter}</p>
//       <p>{player.among}</p>
//     </div>
//   );
// }
