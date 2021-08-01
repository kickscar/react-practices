import React from 'react';
import MyComponent from './MyComponent';

export default function() {
    return (
        <MyComponent
            /* props01={ '문자열' } : Not Required but Default Value Set Alternatively */
            props02={ 1 }
            props03={ true }
            props04={ { val: '객체' }  }
            props05={ [1, 2, 3, 4] }
            props06={ () => '함수' }
            props07={ 999 }
            props08={ [true, false, true]}
            props09={ { no: 10 } }
            props10={{
                no: 1,
                name: '둘리',
                email: 'dooly@mysite.com'
            }}/>
    );
}
