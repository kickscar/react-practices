import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='gallery' element={<Gallery />}/>
                <Route path='guestbook' element={<Guestbook />}/>
                <Route path='about' element={<About />}/>
            </Routes>
        </Router>
    );
}