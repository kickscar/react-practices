import React, { Fragment, useRef } from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);

    const onKeyPressInput = function(e) {
        if(e.key = 'Enter') {
            console.log(e.target.value);
        }
    }

    const onFocusInput = function(e) {
        console.log('focused');
    }

    const onBlurInput = function(e) {
        console.log('blured');
    }

    const onMouseOverImage = function(e) {
        console.log('mouseover', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseMoveImage = function(e) {
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;

        console.log('mousemove', `x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`);
    }

    const onMouseOutImage = function(e) {
        console.log('mouseout', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseDownImage = function(e) {
        console.log('mousedown', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onMouseUpImage = function(e) {
        console.log('mouseup', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onClickImage = function(e) {
        console.log('clicked', `x=${e.clientX}, y=${e.clientY}`);
    }

    const onDoubleClickImage = function(e) {
        console.log('double clicked', `x=${e.clientX}, y=${e.clientY}`);
    }


    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
            <br/>
            <br/>
            <img
                ref = { imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}