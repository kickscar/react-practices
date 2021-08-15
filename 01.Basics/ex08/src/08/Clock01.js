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
        // HTML 태그를 동적으로 생성하여 JSX에 추가 하는 작업은 기본적으로 금지(XSS 공격 방지 기능 기본 내장)
        //
        <div>
            {contents}
        </div>
    );
}