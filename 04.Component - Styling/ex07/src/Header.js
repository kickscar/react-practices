import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    width: 280px;
    font-size: 14px;
    text-align: center;
    margin: 100px auto;
    padding: 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce
`;

export default function(props) {
    return (
        <StyledH1>
            CSS in JS: Styled Component
        </StyledH1>
    );
}