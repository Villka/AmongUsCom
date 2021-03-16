import { Redirect, Route, Switch } from "react-router-dom";
import { Start } from "../../components/Start/Start";
import GameStatus from "../../components/GameStatus/GameStatus";
import { GameFinished } from "../../components/GameFinished/GameFinished";
import FinishPrompt from "../../components/FinishPrompt/FinishPrompt";
import { Picker } from "../../components/Picker/Picker";
import React, {useState} from "react";

export class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      players: [],
    });
  }

  addPlayer(player) {
    let players = this.state.players;
    if (!players) players = [];
    if (!players.find(p => p.discordId === player.discordId)) {
      players.push(player);
      this.setState({players});
    }
  }

  // componentDidUpdate() {
  //   console.log('AYYYYYYYAAYYYYYYYYY');
  //   console.log(this.state.players);

  // }

  render() {
    return (
      <Switch>
        {/* exact - получить точный путь. Если бы не было exact, то <Start/> тоже бы показывался */}
        
        <Route path="/game/rating/:action" render={() => 
          <>
            <this.props.getGame />
            <Picker />
          </>
        }/>
        
        <Route path="/game/rating" render={() => 
          <>
            <this.props.getGame />
            <Picker />
          </>
        }/>
  
        <Route exact path="/game/standard" component={Picker} />
  
        <Route exact path="/game/mini" component={Picker} />
  
        <Route exact path="/game/private" component={Picker} />
  
        <Route path="/game/room/:id/prompt">
          <FinishPrompt players={this.state.players}/>
          <Start players={this.state.players} addPlayer={this.addPlayer.bind(this)}/>
        </Route>
        <Route path="/game/room/:id/results">
          <GameFinished />
          <Start players={this.state.players} addPlayer={this.addPlayer.bind(this)}/>
        </Route>
        <Route path="/game/room/:id">
          <GameStatus />
          <Start players={this.state.players} addPlayer={this.addPlayer.bind(this)}/>
        </Route>
        <Redirect to={"/game/rating"} />
      </Switch>
    );
  }
}

// export const Routes = (props) => {

//   return (
//     <Switch>
//       {/* exact - получить точный путь. Если бы не было exact, то <Start/> тоже бы показывался */}
//       <Route path="/game/rating" render={() => 
//         <>
//           <props.getGame />
//           <Picker />
//         </>
//       }/>

//       <Route exact path="/game/standard" component={Picker} />

//       <Route exact path="/game/mini" component={Picker} />

//       <Route exact path="/game/private" component={Picker} />

//       <Route path="/game/room/:id/prompt">
//         <FinishPrompt />
//         <Start players={players} setPlayers={handleSetPlayers}/>
//       </Route>
//       <Route path="/game/room/:id/finished">
//         <GameFinished />
//         <Start players={players} setPlayers={handleSetPlayers}/>
//       </Route>
//       <Route path="/game/room/:id">
//         <GameStatus />
//         <Start players={players} setPlayers={handleSetPlayers}/>
//       </Route>
//       <Redirect to={"/game/rating"} />
//     </Switch>
//   );
// };
