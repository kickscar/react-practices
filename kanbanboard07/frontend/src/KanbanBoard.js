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
    const [deckTitles, setDeckTitles] = useState(['ToDo', 'Doing', 'Done']);
    const [deckMap, setDeckMap] = useState(() => deckTitles.reduce((result, title) => {
        result[title] = [];
        return result;
    }, {}));

    const moveCard = async (no, movingInfo) => {
        console.log(no, movingInfo);

        try {
            const response = await fetch(`/api/card/${no}/moving`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(movingInfo)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            console.log(json.data);
            const newdeckMap = Object.assign({}, deckMap, json.data);
            setDeckMap(newdeckMap);

        } catch (err) {
            console.error(err);
        }
    }

    const fetchCards = async () => {
        try {
            const response = await fetch('/api/card', {
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

            const newDeckMap = Object.assign({}, deckMap);
            json.data.forEach((card) => (card.deckTitle in newDeckMap) && newDeckMap[card.deckTitle].push(card));

            setDeckMap(newDeckMap);
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

            //
            // 업데이트 API 호출 결과가 'success'일 때 할 것
            //
            const newDeckTitles = Array.from(deckTitles);

            const [removed] = newDeckTitles.splice(source.index, 1);
            newDeckTitles.splice(destination.index, 0, removed);

            setDeckTitles(newDeckTitles);

            return;
        }

        // 4. 두 개의 다른 덱들 또는 하나의 같은 덱에서 카드 이동 하기
        if (result.type === 'CARD') {
            console.info('Moving Card between 2 Different Decks or in a Same Deck');

            moveCard(result.draggableId, {
               dest: {
                   deckTitle: destination.droppableId,
                   orderNo: destination.index
               },
               src: {
                   deckTitle: source.droppableId,
                   orderNo: source.index
               }
            });
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    console.log("!!!!!");

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
                {deckTitles.map((title, index) => (<Deck
                    key={title}
                    index={index}
                    title={title}
                    cards={deckMap[title]}/>))}
                {provided.placeholder}
            </Container>)}
        </Droppable>
    </DragDropContext>);
}