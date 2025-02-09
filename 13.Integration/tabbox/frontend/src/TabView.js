import React from 'react';
import {Tab_View} from './assets/scss/TabView.scss';

function TabView({contents}) {
    return (
        <div className={Tab_View}>
            {contents}
        </div>
    );
}

export default TabView;