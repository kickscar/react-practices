import React, {useState} from "react";
import {Draggable} from "react-beautiful-dnd";
import styled from "@emotion/styled";
import styles from './assets/scss/Card.scss';

const Container = styled.div``;

export default function Card({index, card}) {
    return (<Draggable
        draggableId={`card:${card.no}`}
        index={index}>
        {(dragProvided, dragSnapshot) => (<Container
            className={styles.Card}
            ref={dragProvided.innerRef}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={dragSnapshot.isGroupedOver}
            {...dragProvided.draggableProps}
            {...dragProvided.dragHandleProps}>
            <h4 className={styles.Title}>
                {card.title}
            </h4>
            <div className={styles.Desc}>
                {card.description}
            </div>
            <div className={styles.Val}>
                <small>no: {card.no}</small>
                <small>index: {index}</small>
                <small>order no: {card.orderNo}</small>
            </div>
        </Container>)}
    </Draggable>);
}