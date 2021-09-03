import React, {useState, useRef, useEffect, Fragment} from 'react';

export default function Hook({color}) {
    const [boxColor, setBoxColor] = useState('#000');
    const [title, setTitle] = useState('');
    const h3Ref = useRef(null);

    /**
     *  ex01. Alternative of getDerivedStateFromProps
     */
    if (boxColor !== color) {
        setBoxColor(color);
    }

    /**
     *   02. After Rendering(Combination componentDidUpdate and componentDidMount)
     */
    useEffect(() => {
        console.log('After Rendering');
        // const hexColor = h3Ref.current.style.backgroundColor.replace(/[^\d,]/g, '').split(',').map(e => parseInt(e)).reduce((s, e) => s + ('0' + e.toString(16)).slice(-2), "#");
        // console.log(`called after redering(boxColor=${ boxColor }, h3ref.style.color=${ hexColor }`);
    });

    /**
     *   03. Calling Depend on State Changed : Seperation of Concern
     */
    useEffect(() => {
        console.log('Update Color Using APIs....');
    }, [boxColor]);

    /**
     *  04. Alternative of componentWillUnmount and componentWillUnmount
     */
    useEffect(() => {
        console.log('After Mount');
        return (function () {
            console.log('After Unmount(Clean-Up)');
        });
    }, []);

    return (
        <Fragment>
            <h3 style={{backgroundColor: boxColor, width: 190, height: 100}} ref={h3Ref}/>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </Fragment>
    );
}