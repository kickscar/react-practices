import React from "react";
import styled from 'styled-components';
import * as styles from "./assets/scss/MementoMoriContainer.scss"

const WeekBox = styled.div`
    background-color: ${props => (props.idx+1) % 52 === 0 ? 'rgb(140, 231, 152)' : 'rgb(230, 232, 236)'};
    border-color: ${props => (props.idx+1) % 52 === 0 ? 'rgb(133, 218, 145)' : 'rgb(217, 219, 214)'};
    margin-right: ${props => (props.idx+1) % 26 === 0 ? '3px' : '1px'};
    margin-top: ${props => (Math.ceil((props.idx+1) / 52) - 1) % 10 === 0 ? '3px' : '1px'};
`;

export default function MementoMoriContainer() {
    return (<div className={styles.mementoMoriContainer}>
        {[...Array(52*80).keys() ].map(idx => <WeekBox
            key={idx}
            className={styles.weekBox}
            idx={idx} />)}
    </div>);
}