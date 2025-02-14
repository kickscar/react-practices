import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);
    const [title, setTitle] = useState('');

    /**
     *   [1] Alternative 01: getDerivedStateFromProps
     * 
     */
    if(boxColor !== color ) {
        setBoxColor(color);
    }


    /**
     *   [2-1] After Rendering 함수 -
     *  
     *  
     */
    useEffect(() => {
        console.log('After Rendering');
    });
    /**
     *  [2-2] After Rendering 함수
     * 
     *  어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수 : 관심 분리
     */
    useEffect(() => {
        console.log('Update Color');
    }, [boxColor]);

    useEffect(() => {
        console.log('Update Title');
    }, [title]);
    
    

    /**
     *  [3] Alternative 03: componentDidMount & componentWillUnmount
     * 
     */
        useEffect(() => {
            
            console.log('After Mount(componentDidMount)');

            return (function(){
                console.log('After Unmount(componentWillUnmount)');
            });

        }, []);





    // render
    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                } } />
            <input
                type='text'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) } />
        </>
    );
}