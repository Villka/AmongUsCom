import React from "react";
import Style from "./Style/Style.module.scss";

export const User = (props) => {
    const styleName = () => {
        if (props.id === 1) {
            return Style.top__1;
        } else if (props.id === 2) {
            return Style.top__2;
        } else if (props.id === 3) {
            return Style.top__3;
        } else {
            return Style.top__casual;
        }
    }
    return(
        <div className={`${Style.top__user} ${styleName()}`}>
            <div className={Style.top__first}>{props.id}.</div>
            <div className={Style.top__next}>
                <div className={Style.top__name}>{props.name}</div>
                <div className={Style.top__points}>{props.points}</div>
            </div>
        </div>
    )
}