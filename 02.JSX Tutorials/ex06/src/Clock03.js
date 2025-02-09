import React from 'react';

function Clock03({hours, minutes, seconds}) {
    return (
        <div>
            { ('0' + hours).slice(-2) }
            {':'}
            { ('0' + minutes).slice(-2) }
            {':'}
            { ('0' + seconds).slice(-2) }
        </div>
    );
}

export default Clock03;