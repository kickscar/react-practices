import React from 'react';
import styled from "@emotion/styled";
import {Draggable} from "react-beautiful-dnd";
import CardList from "./CardList";
import styles from "./assets/scss/Deck.scss";

const Container = styled.div`
    margin: 8px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px 2px 0 0;
    background-color: rgb(235, 236, 240);
    transition: background-color 0.2s ease 0s;
`;

const Title = styled.h4`
    background-color: rgb(235, 236, 240);
    transition: background-color 0.2s ease 0s;
    padding: 8px;
    margin: 12px 0 0 0;
    flex-grow: 1;
    user-select: none;
    position: relative;
    cursor: grab;
`;

export default function Deck({index, deck}) {
    return (<Draggable
        draggableId={`deck:${deck.no}`}
        index={index}>
        {(provided, snapshot) => (<Container
            isDragging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}>
            <Header
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}>
                <Title>{deck.title}</Title>
                <div className={styles.deck_val}>
                    <small className={styles.no}>no:{deck.no}</small>
                    <small className={styles.index}>index:{index}</small>
                    <small className={styles.order_no}>order no:{deck.orderNo}</small>
                </div>
            </Header>
            <CardList
                deckNo={deck.no}
                cards={deck.cards} />
        </Container>)}
    </Draggable>);
}