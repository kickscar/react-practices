import React from 'react';

export default function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    return (
        //
        // HTML은 공백을 다소 제한적으로 표시하지만,
        // JSX는 명확한 표현({" "})이 있어야 표시한다.
        //
        <div>
            {('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2)}
            :
            {minutes}
            :
            {seconds}
            {hours > 12 ? "PM" : "AM"}
        </div>
    );
}