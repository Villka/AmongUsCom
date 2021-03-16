//import css from './UserProdfile.module.scss';
import css from "./UserProfile.module.scss";
import React from 'react';
import MiniProfile from './MiniProfile';
import OverallStats from './OverallStats';

import {Container, Row, Col} from 'react-bootstrap';

export default function UserProfile(props: any) {
    return (
        <div className={css.container}>
            <div>
                <MiniProfile />
                <OverallStats /> 
            </div>
        </div>
    );
}