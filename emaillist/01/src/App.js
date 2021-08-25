import React from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import data from './assets/json/data.json';

export default function App() {
    return (
        <div className={'App'}>
            <RegisterForm/>
            <SearchBar/>
            <Emaillist emails={data}/>
        </div>
    );
}
