import React from 'react';

export default function({name, desc}) {
    return (
        // <div>
        //     <h2>Ex02</h2>
        //     <p>
        //         예제입니다.
        //     </p>
        //     <hr/>
        // </div>
        React.createElement('div', null,
            React.createElement('h2', null, name),
            React.createElement('p', null, desc),
            React.createElement('hr', null)
        )
    );
}