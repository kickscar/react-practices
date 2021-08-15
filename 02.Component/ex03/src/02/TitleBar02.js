import React from 'react';

export default function TitelBar02() {
    const onClickHeader = (e) => {
        console.log('TitelBar02 Click!!');
    }

    return (
        <h1 onClick={onClickHeader}
            style={{
                cursor: 'pointer'
            }}>
            ex03 - Functional Event Handler(Functional Component)
        </h1>
    )
}