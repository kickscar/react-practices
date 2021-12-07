import React, { useState } from 'react';

export default function({ begin, step }) {
    const [value, setValue] = useState(begin);

    const onClickButton = function() {
        setValue(value + step);
    }

    return (
        <div>
            <button onClick={ onClickButton }>
                <strong>+</strong>
            </button>
            { ' ' }
            <span>{ value }</span>
        </div>
    );
}