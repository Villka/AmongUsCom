import React from 'react';
import css from './OverallStats.module.scss';

export default function OverallStats(props: any) {
    return (<div>
                <div className={css.wrap}>
            <div className={css.stats}>
                    {/* <h2 className={css.title}>Общая статистика</h2>
                    <div className={css.layout}>
                            <div className={css.item}>
                                <div className={css.number}>15</div>
                                <div className={css.slug}>Всего игр</div>
                            </div>
                    </div> */}
                    <div className={css.circle} />
                </div>
            </div>
    </div>);
}