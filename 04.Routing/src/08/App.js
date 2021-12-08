import React from 'react';
import {useRoutes} from 'react-router';

import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

import About from "./component/about/About";
import Me from "./component/about/Me";
import Location from "./component/about/Location";

import Error404 from "./component/error/Error404";

import Login from "./component/user/Login";
import Join from "./component/user/Join";
import Settings from "./component/user/Settings";

import './assets/scss/App.scss'

export default function App() {
    return useRoutes([
        { path:'/', element: <Main /> },
        { path:'gallery', element: <Gallery /> },
        { path:'guestbook', element: <Guestbook /> },
        {
            path:'about',
            element: <About />,
            children: [{
                path:'me',
                element: <Me />
            }, {
                path:'location',
                element: <Location />
            }]
        },
        { path:'user/login', element: <Login /> },
        { path:'user/join', element: <Join /> },
        { path:'user/settings', element: <Settings /> },
        { path:'*', element: <Error404 /> }
    ]);
}