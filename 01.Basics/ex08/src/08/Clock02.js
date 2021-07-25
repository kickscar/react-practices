import React from 'react';

export default function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    const contents =
        "<span>" +
        ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2) +
        " : " +
        minutes +
        " : " +
        seconds +
        " " +
        (hours > 12 ? "PM" : "AM") +
        "</span>";

    return (
        //
        // JSX에 동적으로 생성된 HTML을 렌더링하는 것을 금지하고 있지만
        // XSS 보호기능을 끄고 HTML을 렌더링하는 속성을 제공한다.
        //
        <div dangerouslySetInnerHTML={{__html: contents}} />
    );
}