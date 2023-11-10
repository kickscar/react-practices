import React from 'react';
import styles from '../../assets/scss/component/about/Me.scss';
import {useNavigate} from "react-router";

export default function Me() {
    const navigate = useNavigate();
    setTimeout(function() {
        navigate('/error');
    }, 2000);

    return (
            <div className={styles.Me}>
                <h2>kickscar 입니다.</h2>
            </div>
    );
}