import React from 'react';

export default function TitelBar02() {

    const onClickHeader = function () {
        console.log('TitleBar02 Clicked');
    }

    return (
        <h1
            onClick={ onClickHeader }
            style={{
                cursor: 'pointer'
            }}>
            TitleBar02
        </h1>
    )
}