import React from "react";
import styled from "@emotion/styled";
import {Draggable, Droppable} from "react-beautiful-dnd";
import styles from "./assets/scss/CardList.scss";
import Card from "./Card";

const Container = styled.div``;

export default function CardList({deckNo, cards}) {
    return (<Droppable
        droppableId={`deck:${deckNo}`}
        type={"CARD"}>
        {(dropProvided, dropSnapshot) => (<Container
            className={styles.Container}
            ref={dropProvided.innerRef}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDraggingFrom={false}
            {...dropProvided.droppableProps}>
            {cards.map((card, index) => (<Card
                key={card.no}
                index={index}
                card={card}/>))}
            {dropProvided.placeholder}
        </Container>)}
    </Droppable>);
}