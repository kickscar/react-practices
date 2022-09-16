import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import styled from "@emotion/styled";
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    border: 2px solid transparent;
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    box-sizing: border-box;
    padding: 8px;
    min-height: 40px;
    margin-bottom: 8px;
    user-select: none;
    color: rgb(9, 30, 66);  
`;

export default function Card({index, card}) {
    return (<Draggable
        draggableId={`card:${card.no}`}
        index={index}>
        {(dragProvided, dragSnapshot) => (<Container
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={dragSnapshot.isGroupedOver}
            ref={dragProvided.innerRef}
            {...dragProvided.draggableProps}
            {...dragProvided.dragHandleProps}>
            <h4
                className={styles.card_title}>
                {card.title}
            </h4>
            <div
                className={styles.card_desc}>
                {card.description}
            </div>
            <div
                className={styles.card_val}>
                <small className={styles.no}>no:{card.no}</small>
                <small className={styles.index}>drag index:{index}</small>
                <small className={styles.order_no}>order no:{card.orderNo}</small>
            </div>
        </Container>)}
    </Draggable>);
}