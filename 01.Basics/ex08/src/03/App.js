import React, {Fragment} from 'react';

import Header from './Header';
import Content from './Content';

export default function () {
    return (
        // <div>
        //     <Header />
        //     <SiteLayout />
        // </div>
        //
        // 반드시 하나의 엘리멘트로 반환 하여야 함. (단일 루트 노드)
        // <div> 나 <Fragment> 로 감싼다.
        <Fragment>
            <Header/>
            <Content/>
        </Fragment>
    );
}