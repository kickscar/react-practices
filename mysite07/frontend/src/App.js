import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import './assets/scss/App.scss';

import {MySiteLayout} from './layout';
import {Main} from './component/main';
import {Guestbook} from './component/guestbook';
import {Gallery} from './component/gallery';
import SignIn from './component/user/SignIn';
import SignUp from './component/user/SignUp';
import Settings from './component/user/Settings';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MySiteLayout /> }>
                    <Route index path='' element={<Main />}/>
                    <Route path='gallery' element={<Gallery />}/>
                    <Route path='guestbook' element={<Guestbook />}/>
                    <Route path='user/join' element={<SignUp />}/>
                    <Route path='user/login' element={<SignIn />}/>
                    <Route path='*' element={<Main />}/>
                </Route>
            </Routes>
        </Router>
    );
}