import React from 'react';
import css from './UserProfile.module.scss';

export default function MiniProfile(props: any) {
    return (
        <div className={css.wrap}>
            <div className={css.miniProfile}>
                <div className={css.miniProfile__circle1} />
                <div className={css.miniProfile__circle2} />
            </div>
            <div className={css.layout}>
                    <img src="https://cdn.discordapp.com/avatars/210805918550458369/c5271a8266b75cb3ef0b3ae670756a67"
                        alt="" 
                        className={css.avatar} 
                    />
                    <div className={css.username}>
                        <h2>Friendly#1111</h2>
                        <p>Рейтинг: 944.26</p>
                    </div>
            </div>
        </div>

    );
}