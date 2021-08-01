import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell as farCoffee } from '@fortawesome/free-regular-svg-icons'
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default function App() {

    library.add(faBell, farCoffee, fab);

    return (
        <Fragment>
            {/* Light: Not Free*/}
            {/*<FontAwesomeIcon icon={["fal", "coffee"]} />*}
            {/* Regular: */}
            <FontAwesomeIcon icon={["far", "bell"]} />
            {/* Solid */}
            <FontAwesomeIcon icon={["fas", "bell"]} />
            {/* ...or, omit as FontAwesome defaults to solid, so no need to prefix: */}
            <FontAwesomeIcon icon={ faBell } />
            {/* Brand: */}
            <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <FontAwesomeIcon icon={['fab', 'google']} />
            {/* size */}
            <FontAwesomeIcon icon="bell" size="xs" />
            <FontAwesomeIcon icon="bell" size="lg" />
            <FontAwesomeIcon icon="bell" size="2x" />

            {/* examples */}
            <FontAwesomeIcon icon={ faCheckCircle } />
            <FontAwesomeIcon icon={ faTimesCircle } />

        </Fragment>
    );
}