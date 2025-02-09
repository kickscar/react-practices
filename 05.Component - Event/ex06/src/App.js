import React, {Component} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                ref={ref => this.outerRef = ref}
                className={'App'}
                onScroll={() => {
                    console.log(this.outerRef.scrollTop, this.outerRef.clientHeight, this.innerRef.clientHeight)
                }}>
                <div ref={ref => this.innerRef = ref}>
                    <ul>
                    {
                        Array.from({length:100}, (_, i) => i+1).map(e => <li key={e}>{`아이텀 ${e}입니다.`}</li>)
                    }
                    </ul>
                </div>
            </div>
        );
    }
}