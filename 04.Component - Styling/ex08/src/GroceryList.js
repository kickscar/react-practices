import React from 'react';
import GroceryItem from './GroceryItem';
import styled from 'styled-components';

const StyledOL = styled.ol`
    padding-left: 50px;
`;

function GroceryList({groceries}) {
    return (
        <StyledOL>
            { 
                groceries.map(e => <GroceryItem
                                     key={e.no} 
                                     name={e.name}
                                     count={e.count} />)
            }
        </StyledOL>
    );
}

export default GroceryList;