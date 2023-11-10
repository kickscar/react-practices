import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/error/Error404";
import Error from "./component/error/Error";

import {About} from "./component/about";
import {Login, Join} from "./component/user";

import './assets/scss/App.scss'
import {SiteLayout} from "./layout";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SiteLayout />}>
                    <Route index path='' element={<Main />} />
                    <Route path='about' element={<About />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='guestbook' element={<Guestbook />} />
                    <Route path='user/login' element={<Login />}/>
                    <Route path='user/join' element={<Join />}/>
                    <Route path='error' element={<Error />}/>
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </Router>
    );
}