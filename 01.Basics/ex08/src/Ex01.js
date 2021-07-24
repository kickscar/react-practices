import React from 'react';

export default function({name, desc}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>
                {desc}
            </p>
            <hr />
        </div>
    );
}