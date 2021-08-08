import React, { Fragment, useState } from 'react';
import AlertDialog from './AlertDialog';

export default function App() {
    const [alert, Alert] = useState({open: false, title:'', message:'' });

    function handleClick01() {
        Alert({
            open: true,
            title: '팝업 다이알로그 01',
            message: 'Matrial-UI 다이얼로그 좋습니다.'
        });
    }

    function handleClick02() {
        Alert({
            open: true,
            title: '팝업 다이알로그 02',
            message: '안녕하세요, 팝업 다이알로그 예제 입니다.'
        });
    }

    return (
        <Fragment>
            <AlertDialog { ...alert  } />
            <button onClick={ handleClick01 }>팝업 다이알로그 01</button>
            <br/><br/>
            <button onClick={ handleClick02 }>팝업 다이알로그 02</button>
        </Fragment>
    );
}