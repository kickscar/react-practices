import React, {useState} from 'react';

function Incrementor02({begin, step}) {
    const [val, setVal] = useState(begin);
    // const [val2, setVal2] = useState(20);

    return (
        <div>
            <button onClick={() => {
                setVal(val + step);
            }}>
                {'+'}
            </button>
            {' '}
            {val}
            {' '}
            <button onClick={() => {
                setVal(val - step);
            }}>
                {'-'}
            </button>
        </div>
    );
}

export default Incrementor02