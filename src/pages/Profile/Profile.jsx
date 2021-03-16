import React, {useState, useContext} from "react";
import Style from "./Style.module.scss";
import {GeneralContext, GeneralState} from '../../GeneralContext';
import { Stats } from "./Stats/Stats";
import { History } from "./History/History";
import avatar from "./Frend.png"

export const Profile = () => {
    return(
        <div className="container-body">
            <div id="info" className={Style.profile}>
                <Stats avatar={avatar}/>
                <History />
            </div>
        </div>
    )
}