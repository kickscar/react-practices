import React from 'react';
import {useRoutes} from 'react-router';
import Main from "./component/main";
import Guestbook from "./component/guestbook";
import Gallery from './component/gallery';
import SignIn from "./component/user/SignIn";
import SignUp from "./component/user/SignUp";
import Settings from "./component/user/Settings";
import Error404 from "./component/error/Error404";

import './assets/scss/App.scss';

export default () => {
    return useRoutes([
        { path:'/', element: <Main /> },
        { path:'gallery', element: <Gallery /> },
        { path:'guestbook', element: <Guestbook /> },
        { path:'user/signin', element: <SignIn /> },
        { path:'user/signup', element: <SignUp /> },
        { path:'user/settings', element: <Settings /> },
        { path:'*', element: <Error404 /> }
    ]);
}