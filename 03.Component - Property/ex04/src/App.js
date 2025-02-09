import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div id={'App'}>
            <MyComponent
                props02={20}
                props03={true} 
                props04={{no:1, name:'둘리'}}
                props05={['javascript', 'react', 'es6']}
                props06={() => '함수'}
                props07={10}
                props08={[true, false, true]}
                props09={{
                    no: 10,
                    name: '마이콜',
                    email: 'michol@gmail.com'
                }}/>
        </div>
    );
}

export {App};