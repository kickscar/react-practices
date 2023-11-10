import React from 'react';
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";
import CardList from "./CardList";
import styles from "./assets/scss/Deck.scss";

const Container = styled.div``;
const Header = styled.div``;

export default function Deck({index, deck}) {
    return (<Draggable
        draggableId={`deck:${deck.no}`}
        index={index}>
        {(provided, snapshot) => (<Container
            className={styles.Container}
            isDragging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}>
            <Header
                className={styles.Header}
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}>
                <h4>
                    {deck.title}
                </h4>
                <div>
                    <small>no: {deck.no}</small>
                    <small>index: {index}</small>
                    <small>order no: {deck.orderNo}</small>
                </div>
            </Header>
            <CardList
                deckNo={deck.no}
                cards={deck.cards} />
        </Container>)}
    </Draggable>);
}