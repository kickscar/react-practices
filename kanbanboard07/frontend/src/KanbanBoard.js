import React, {useEffect, useState} from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "@emotion/styled";
import styles from "./assets/scss/KabanBoard.scss";
import Deck from "./Deck";

const Container = styled.div``;

export default function KanbanBoard() {
    const [decks, setDecks] = useState([]);
    const [cardMoving, setCardMoving] = useState(null);
    const [deckMoving, setDeckMoving] = useState(null);

    const moveDeck = async () => {
        try {
            const response = await fetch(`/api/deck/mv`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(deckMoving)
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

            const [,deckNo] = result.draggableId.split(":");
            const srcDeckIndex = source.index;
            const destDeckIndex = destination.index;

            const newDecks = [...decks];
            const [deckRemoved] = newDecks.splice(srcDeckIndex, 1);
            newDecks.splice(destDeckIndex, 0, deckRemoved);

            setDecks(newDecks);
            setDeckMoving({
                no: deckNo,
                destOrderNo: destDeckIndex,
                srcOrderNo: srcDeckIndex
            });

            return;
        }

        // 4. 두 개의 다른 덱들 또는 하나의 같은 덱에서 카드 이동 하기
        if (result.type === 'CARD') {
            console.info('Moving Card between 2 Different Decks or in a Same Deck');

            const [,cardNo] = result.draggableId.split(":");
            const [,srcDeckNo] = source.droppableId.split(":");
            const srcCardIndex = source.index;
            const [,destDeckNo] = destination.droppableId.split(":");
            const destCardIndex = destination.index;

            const newDecks = [...decks];
            const indexSrcDeck = newDecks.findIndex(e => e.no == srcDeckNo)
            const indexDestDeck = newDecks.findIndex(e => e.no == destDeckNo)

            const [cardRemoved] = newDecks[indexSrcDeck].cards.splice(srcCardIndex, 1);
            newDecks[indexDestDeck].cards.splice(destCardIndex, 0, cardRemoved);

            setDecks(newDecks);
            setCardMoving({
                no: cardNo,
                dest: {
                   deckNo: destDeckNo,
                   orderNo: destCardIndex
                },
                src: {
                   deckNo: srcDeckNo,
                   orderNo: srcCardIndex
                }
            });
        }
    }

    useEffect(() => {
        fetchDecks();
    }, []);

    useEffect(() => {
        deckMoving && moveDeck();
    }, [deckMoving]);

    useEffect(() => {
        cardMoving && moveCard();
    }, [cardMoving]);

    return (<DragDropContext
        onDragEnd={onDragEnd}>
        <Droppable
            droppableId="kanbanboard"
            type="DECK"
            direction="horizontal"
            ignoreContainerClipping={false}
            isCombineEnabled={false}>
            {(provided) => (<Container
                className={styles.Container}
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