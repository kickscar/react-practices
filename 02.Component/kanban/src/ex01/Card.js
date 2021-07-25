import React from 'react';
import TaskList from './TaskList';

export default class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        }
    }

    render() {
        let cardDetails;
        
        if(this.state.showDetails){
            cardDetails = (<div className='Card__Details'>
                { this.props.description }
                <TaskList tasks={ this.props.tasks }/>
            </div>);
        }

        return (
            <div className='Card'>
                <div className='Card__Title' onClick={ () => {
                    this.setState({ showDetails: !this.state.showDetails });
                } }>{ this.props.title }</div>
                { cardDetails }
            </div>
        );        
    }
}