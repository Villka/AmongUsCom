import React from "react";
import Style from "../Style.module.scss";

export const GameHist = (props) => {
    const addResult = (x) => {
        if(props.result === "win") {
            return (
                <div className={Style.history__text}>Победа<span class={Style.history__win}>{x}</span></div>
            )
        } else {
            return (
            <div className={Style.history__text}>Поражение<span class={Style.history__lose}>{x}</span></div>
            )
        }
    }
    return (
        <div className={Style.history__game}>
            <div className={Style.history__id}>{props.id}</div>
            <div className={Style.history__results}>
                <div className={Style.history__result}>
                    <div className={Style.history__subtitle}>Результат:</div>
                    {addResult(props.points)}
                </div>
                <div className={Style.history__result}>
                    <div className={Style.history__subtitle}>Предатели:</div>
                    <div className={Style.history__imposter}>{props.imposters[0]}</div>
                    <div className={Style.history__imposter}>{props.imposters[1]}</div>
                </div>
            </div>
        </div>
    )
} 