import React from 'react';
import PropTypes from 'prop-types';
import EmaillistItem from './EmaillistItem';

export default class Emaillist extends React.Component {
    shoudComponentUpdate() {
        console.log('Emaillist:shoudComponentUpdate()');
    }

    componentWillUpdate() {
        console.log('Emaillist:componentWillUpdate()');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // this.props.keyword : new, prevProps.keyword : old
        console.log('Emaillist:getSnapshotBeforeUpdate:' + this.props.keyword + "-" + prevProps.keyword);
        return {
            snapshot: 'test'
        };
    }

    render() {
        return (
            <div className='EmaillistApp_Emaillist'>
                <ul>
                    { this.props.emails
                        .filter( (element) => element.firstName.indexOf(this.props.keyword) != -1 || element.lastName.indexOf(this.props.keyword) != -1 || element.email.indexOf(this.props.keyword) != -1)
                        .map( (element) => <EmaillistItem
                        key={ element.no } 
                        fullName = { `${element.firstName}${element.lastName}` }
                        email = { element.email }
                    />)}
                </ul>
            </div>
        )
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Emaillist:componentDidUpdate():' + snapshot);
    }    
}

Emaillist.propTypes = {
    keyword: PropTypes.string,
    emails: PropTypes.arrayOf(PropTypes.object)    
}