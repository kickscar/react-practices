import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../assets/scss/layout/Header.scss';

export default function Header() {
    return (
        <header>
            <h1><NavLink to={'/'}>MySite</NavLink></h1>
            <nav className={styles.UserMenu}>
                <NavLink to={'/login'}>로그인</NavLink>
                <NavLink to={'/signup'}>회원가입</NavLink>
                <NavLink to={'/settings'}>프로필수정</NavLink>
                <a href='#' onClick={(e) => {
                    e.preventDefault();
                    console.log('로그아웃 구현');
                }}>로그아웃</a>
                <strong>킥스카님 안녕하세요 ^^;</strong>
            </nav>
        </header>
    );
}