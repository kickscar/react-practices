import React from 'react';
import {_Email} from './assets/scss/Email.scss';

function Email({no, firstName, lastName, email}) {
    return (
        <li className={_Email}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href='' onClick={(e) => {
                e.preventDefault();
                
                console.log('과제입니다:' + no);
            }}/>
        </li>
    );
}

export default Email;