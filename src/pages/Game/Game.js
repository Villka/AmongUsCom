import Style from "./Style/Game.module.scss";
import { MenuLeft } from "../../components/MenuLeft/MenuLeft";
import { Waiting } from "../../components/Waiting/Waiting";
import {GameFinished} from '../../components/GameFinished/GameFinished';
import {GameSearch} from '../../components/GameSearch/GameSearch';
import React, {useState, useEffect, useContext} from "react";
import {useParams, useHistory, Redirect} from 'react-router-dom'
import { Routes } from "./routes";
import API from '../../utils/API'
import {GeneralContext} from '../../GeneralContext';


export function Game() {

  const context = useContext(GeneralContext);
  
  const [searching, setSearching ] = useState(false);
  const [insideRoom, setInsideRoom] = useState(false);
  const [alreadyIngame, setAlreadyIngame] = useState(false);
  
  
  async function fetchGameStatus() {
    const res = await API.get('/game/status');
    console.log(res.data);
    if (res.data.message === 'OFFLINE') {
      setAlreadyIngame(false);
    } else if (res.data.message === 'WAITING' ||
    res.data.message === 'JOINED' ) {
      if (!res.data.game || res.data.game !== 'ENDED') {
        
        //if user already has an active room
        setAlreadyIngame(true);
      }
    }
  }
  
  useEffect(() => {
    fetchGameStatus();
  })
  
  const history = useHistory();
  function GetGame() {
    let {action} = useParams();
    console.log(action);
    if (alreadyIngame && action !== 'leave') {
      return <GameSearch onCancelSearch={handleStopSearch} alreadyInGame={true}/>;
    }
    if (action === 'leave') {
      window.location.assign('/game/rating');
    }
    if (action === 'newgame') {
      //window.location.assign('/game/rating');
      //context.setState({lookingForAGame: true});
      setSearching(true);
      return <Redirect to="/game/rating" />;
    }
    // if (insideRoom) {
    //   return null;
    // }
    if (!searching) {
        return (
          <>
            <div id="game" className={Style.game}>
              <div className="container-body">
                <Waiting onStartSearch={handleStartSearch}/>
              </div>
            </div>
          </>
        );
    } else {
      return <GameSearch onCancelSearch={handleStopSearch}/>;
    }
  }

    function handleStartSearch(props) {
      setSearching(true);
    }
    
    function handleStopSearch(success) {
      setSearching(false);
      if (success === true) {
        setInsideRoom(true);
      }
    }
    
    return (
      <>
          {/* {<GameFinished />} */}
          {/* {<GameSearch />} */}
          {/* <MenuLeft /> */}
      {/* {<GetGame />} */}
      <Routes getGame={GetGame}/>
    </>
  );
}
