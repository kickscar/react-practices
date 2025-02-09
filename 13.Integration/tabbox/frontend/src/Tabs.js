import React from 'react';
import TabItem from './TabItem';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({tabs, selectTab}) {
    return (
        <ul className={_Tabs}>
            {tabs.map(t => <TabItem key={t.no} no={t.no} name={t.name} active={t.active} selectTab={selectTab} />)}
        </ul>
    );
}

export default Tabs;