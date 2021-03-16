import React from "react";
import Style from "../Style.module.scss";

export const Statistics = (props) => {
    const styleName = () => {
        if (props.color === "green") {
            return Style.stats__green;
        } else if (props.color === "purple") {
            return Style.stats__purple;
        } else {
            return Style.stats__black;
        }
    }
    const addElipse = () => {
        if (props.num === 0) {
            return Style.stats__addElipse;
        }
    }
    return(
        <div className={`${Style.stats__statistic} ${styleName()} ${addElipse()}`}>
            <div className={Style.stats__sum}>{props.title}</div>
            <div className={Style.stats__comment}>{props.name}</div>
        </div>
    )
}