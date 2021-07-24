import React, { Component } from 'react';

export default class extends Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        const session = hours > 12 ? 'PM' : 'AM';

        return (
            <div>
                { ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2) }
                :
                { minutes }
                :
                { seconds }
                { session }
            </div>
        );
    }
}