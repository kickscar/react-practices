import React, { Component } from 'react';

// export default function() {
//     return (
//         <div>
//             <h2>Ex01</h2>
//             <p>
//                 예제입니다.
//             </p>
//             <hr />
//         </div>
//     );
// }
export default class _ extends Component {
    render() {
        return (
            <div>
                <h2>{ this.props.name }</h2>
                <p>
                    { this.props.desc }
                </p>
                {/*
                    오류: 꼭 closing 할 것
                    <hr>
                */}
                <hr/>
            </div>
        )
    }
}