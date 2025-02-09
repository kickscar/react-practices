import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
`;

function App() {
    return (
        <StyledDiv>
           <Header />
        </StyledDiv>
    );
}

export default App;