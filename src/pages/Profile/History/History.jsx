import React from "react";
import Style from "../Style.module.scss";
import { GameHist } from "./GameHist"


export const History = () => {
    const Pages = () => {
        if (games.length > 5) {

        }
    }

    const games = [
        {id: "#5fb98072be5a541abe43c864", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "Побед", game:{
            result:"lose", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "Поражений", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "За крюмейта", game:{
            result:"lose", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "Побед", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "Поражений", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "За крюмейта", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "Побед", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
        {id: "Поражений", game:{
            result:"win", points:"7,15", imposters:[
                "Frendly#1232", "Villka#3322"
            ]
        }},
    ]
    return(
        <div className={Style.history}>
            <div className={Style.history__row}>
            <div className={Style.history__title}>История игр</div>
            <div className={Style.history__games}>
            {games.map((x, i) => {
                return(
                    <GameHist id={x.id} result={x.game.result} points={x.game.points} imposters={x.game.imposters}/>
                )
            })}
            </div>
            </div>
        </div>
    )
}