import React from 'react';
import {useRoutes} from 'react-router';


import {Main} from "./component/main";
import {Guestbook} from "./component/guestbook";
import {About} from "./component/about";
import {Gallery} from "./component/gallery";
import {Login, Join} from "./component/user";
import {Error404} from "./component/error";

import './assets/scss/App.scss'

export default function App() {
    return useRoutes([
        { path: '/', element: <Main /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/guestbook', element: <Guestbook /> },
        { path: '/about', element: <About /> },
        { path: '/user/join', element: <Join /> },
        { path: '/user/login', element: <Login /> },
        { path: '*', element: <Error404 /> }
    ]);
}