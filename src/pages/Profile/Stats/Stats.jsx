import React from "react";
import Style from "../Style.module.scss";
import { Statistics } from "./Statistics"

export const Stats = (props) => {
    const statistics = [
        {name: "Всего игр", title:"15", color:"purple",},
        {name: "Побед", title:"15", color:"green",},
        {name: "Поражений", title:"15", color:"black",},
        {name: "За крюмейта", title:"15", color:"purple",},
        {name: "Побед", title:"15", color:"purple",},
        {name: "Поражений", title:"15", color:"black",},
        {name: "За крюмейта", title:"15", color:"purple",},
        {name: "Побед", title:"15", color:"purple",},
        {name: "Поражений", title:"15", color:"black",},
    ]
    return(
        <div className={Style.stats}>
            <div className={Style.stats__row}>
                {/* <div className={Style.stats__elipses}></div>
                <div className={Style.stats__elipsAvatar}></div>
                <div className={Style.stats__elipseInfo}> */}
                <div className={Style.stats__user}>
                    <div className={Style.stats__avatar}><img src={props.avatar} alt="" /></div>
                    <div className={Style.stats__info}>
                        <div className={Style.stats__name}>Friendly#1111</div>
                        <div className={Style.stats__rang}>Рейтинг: 944.26</div>
                    </div>
                </div>
                <div className={Style.stats__data}>
                    <div className={Style.stats__title}>Общая статистика</div>
                    <div className={Style.stats__statistics}>
                    {statistics.map((x, i) => {
                        return(
                            <Statistics num={i} title={x.title} name={x.name} color={x.color}/>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}