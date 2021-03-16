import React, { useState, useEffect, useContext } from "react";
import Style from "../../Start.module.scss";

import {GeneralContext, GeneralState} from '../../../../GeneralContext';

export const Code = (props: any) => {
  // const [code, setCode] = useState(props.code);

  // useEffect(() => {
  //   if (props.code !== code) {
  //     setCode(props.code);
  //   }
  // }, [props.code, code])
  const context = useContext(GeneralContext) as GeneralState;
  if (!context.room) return null;
  const code = context.room.code;
  //if (!code && !context.isHost) return null;
  console.log(context.isHost);
  return (
    <div className={Style.visionPlayer__code}>
      <p>Код комнаты {context.isHost &&
      <span onClick={props.changeCode}>✏️</span>}</p>
      <p className={Style.visionPlayer__code_vote}>{code
      || (context.isHost && 'Установите код') || 'Ожидание хоста...'}</p>
    </div>
  );
};
