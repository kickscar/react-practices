import React, {useEffect, useState} from 'react';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import Deck from "./Deck";
import styled from "@emotion/styled";

const Container = styled.div`
    background-color: rgb(76, 154, 255);
    min-height: 100vh;
    min-width: 100vw;
    display: inline-flex;  
`;

export default function KanbanBoard() {
    const [decks, setDecks] = useState([]);
    const [cardMoving, setCardMoving] = useState(null);

    const moveCard = async () => {
        try {
            const response = await fetch(`/api/card/mv`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(cardMoving)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const fetchDecks = async () => {
        try {
            const response = await fetch('/api/deck', {
                method: 'get',
                headers: {'Accept': 'application/json'}
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setDecks(json.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    const onDragEnd = (result) => {
        console.info(result);

        // 1. 드롭이 가능한 곳에 드롭을 하지 않았음.
        if (!result.destination) {
            console.info('Dropped Nowhere');
            return;
        }

        const source = result.source;
        const destination = result.destination;

        // 2. 움직이지 않았음.
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            console.info('Did Not Move Anywhere')
            return;
        }

        // 3. 덱 순서 바꾸기
        if (result.type === 'DECK') {
            console.info('Reordering Deck');

            // const newDeckTitles = Array.from(deckTitles);
            // const [removed] = newDeckTitles.splice(source.index, 1);
            // newDeckTitles.splice(destination.index, 0, removed);

            // setDeckTitles(newDeckTitles);
            return;
        }

        // 4. 두 개의 다른 덱들 또는 하나의 같은 덱에서 카드 이동 하기
        if (result.type === 'CARD') {
            console.info('Moving Card between 2 Different Decks or in a Same Deck');

            const destDeckTitle = destination.droppableId;
            const destCardIndex = destination.index;
            const srcDeckTitle = source.droppableId;
            const srcCardIndex = source.index;

            // const newDeckMap = Object.assign({}, deckMap);
            // const [removed] = newDeckMap[srcDeckTitle].splice(srcCardIndex, 1);
            // newDeckMap[destDeckTitle].splice(destCardIndex, 0, removed);
            //
            // setDeckMap(newDeckMap);
            // setCardMoving({
            //     no: result.draggableId,
            //     dest: {
            //        deckTitle: destDeckTitle,
            //        orderNo: destCardIndex
            //     },
            //     src: {
            //        deckTitle: srcDeckTitle,
            //        orderNo: srcCardIndex
            //     }
            // });
        }
    }

    useEffect(() => {
        fetchDecks();
    }, []);

    useEffect(() => {
        cardMoving && moveCard();
    }, [cardMoving]);

    return (<DragDropContext
        onDragEnd={onDragEnd}>
        <Droppable
            droppableId="KanbanBoard"
            type="DECK"
            direction="horizontal"
            ignoreContainerClipping={false}
            isCombineEnabled={false}>
            {(provided) => (<Container
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {decks.map((deck, index) => (<Deck
                    key={deck.no}
                    index={index}
                    deck={deck}/>))}
                {provided.placeholder}
            </Container>)}
        </Droppable>
    </DragDropContext>);
}