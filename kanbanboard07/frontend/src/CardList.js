import React from 'react';
import styled from "@emotion/styled";
import Card from "./Card";
import {Draggable, Droppable} from "react-beautiful-dnd";

const Container = styled.div`
    background-color: rgb(235, 236, 240);
    display: flex;
    flex-direction: column;
    opacity: inherit;
    padding: 8px 8px 0px;
    border: 8px;
    transition: background-color 0.2s ease 0s, opacity 0.1s ease 0s;
    user-select: none;
    border-radius: 0 0 2px 2px;
    width: 250px;
`;

export default function CardList({title, cards}) {
    return (<Droppable
        droppableId={title}
        type={"CARD"}>
        {(dropProvided, dropSnapshot) => (<Container
            ref={dropProvided.innerRef}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDraggingFrom={false}
            {...dropProvided.droppableProps}>
            {cards.map((card, index) => (<Card
                key={card.no}
                card={card}/>))}
            {dropProvided.placeholder}
        </Container>)}
    </Droppable>);
}