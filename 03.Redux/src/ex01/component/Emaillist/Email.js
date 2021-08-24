import React from 'react';
import PropTypes from 'prop-types';

export default function Email({firstName, lastName, email}) {
    return (
        <li>
            {`${firstName} ${lastName}`}
            <br/>
            {email}
        </li>
    )
}

Email.propTypes = {
    fistName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}