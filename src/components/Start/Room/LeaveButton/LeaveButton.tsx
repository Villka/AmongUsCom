import Style from "../../Start.module.scss";
import { Redirect } from "react-router-dom";
import React, { useContext } from "react";
import API from '../../../../utils/API';
import {GeneralContext, GeneralState} from '../../../../GeneralContext';

export function LeaveButton(props: any) {
  const context = useContext(GeneralContext) as GeneralState;
  const [redirect, setRedirect] = React.useState(false);
  const handleLeaveButton = (e: any) => {
    context.socket.emit('leaveRoom');
    setTimeout(() => {
      API.post('/game/leave')
      .then(res => {
        context.setGame(null);
        context.setAlreadyInGame(false);
        setTimeout(() => {setRedirect(true)}, 100);
      })
    }, 5);
  };
  if (redirect) {
    return <Redirect to={"/game/rating/leave"} />;
  }
  return (
    <button
      className={`${Style.room__x} button-purple`}
      onClick={handleLeaveButton}
    >
      ×
    </button>
  );
}
