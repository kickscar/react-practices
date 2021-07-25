import React from 'react';
import TaskList from './TaskList';

import styles from './Card.css';

export default class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }

    onTitleClick(event) {
        this.setState({ 
            showDetails: !this.state.showDetails 
        });
    }

    render() {

        const styleSideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className={ styles.Card }>
                <div style={ styleSideColor } />
                <div className={ styles[this.state.showDetails ? 'Card__Title--is-open' : 'Card__Title'] } onClick={ this.onTitleClick.bind(this) }>
                    { this.props.title }
                </div>
                { !this.state.showDetails ? 
                    null :
                    <div className={ styles.Card__Details }>
                        { this.props.description }
                        <TaskList tasks={ this.props.tasks } />
                    </div> }
            </div>
        );        
    }
}