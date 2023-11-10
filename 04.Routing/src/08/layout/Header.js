import React, {Fragment, useState} from 'react';
import '../assets/scss/layout/Header.scss';
import {NavLink} from "react-router-dom";

export default function Header() {
    console.log("Header() redering...");
    
    return (
        <header>
            <h1>
                <NavLink to={'/'}>Header</NavLink>
            </h1>
            <ul>
                {
                    <Fragment>
                        <li><NavLink to={'/user/settings'}>회원정보수정</NavLink></li>
                        <li><NavLink to={'/user/login'}>로그인</NavLink></li>
                        <li><NavLink to={'/user/join'}>회원가입</NavLink></li>
                    </Fragment>
                }
            </ul>
        </header>
    );
}