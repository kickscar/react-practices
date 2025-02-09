import React from 'react';

function Clock02(props) {
    const now = new Date();

    return (
        <div>
            { ('0' + now.getHours()).slice(-2) }
            {':'}
            { ('0' + now.getMinutes()).slice(-2) }
            {':'}
            { ('0' + now.getSeconds()).slice(-2) }
        </div>
    );
}

export default Clock02;