import React, { Fragment }from 'react';
import PropTypes from 'prop-types';

export default function MyComponent({ props01, props02, props03, props04, props05, props06, props07, props08, props09, props10 }) {
    return (
        <Fragment>
            <span>props01: { props01 ? props01 : '--not set--'}</span>
            <br />
            <span>props02: { props02 ? props02 : '--not set--' }</span>
            <br />
            <span>props03: { props03  ? props03 ? 'true' : 'false' : '--not set--'  }</span>
            <br />
            <span>props04: { props04 ?  props04.val : '--not set--' }</span>
            <br />
            <span>props05: { props05 ? props05.map(e => <b key={e}>{e}{' '}</b>) : '--not set--' }</span>
            <br />
            <span>props06: { props06 ? props06() : '--not set--' }</span>
            <br />
            <span>props07: { props07 ? props07 : '--not set--' }</span>
            <br />
            <span>props08: { props08 ? props08.map((e,i) => e ? <b key={i}>{'true '}</b> : <span key={i}>{'false '}</span>) : '--not set--' }</span>
            <br />
            <span>props09: { props09 ? props09.no : '--not set--' }</span>
            <br />
            <span>props10: { props10 ?
                                <div>
                                    <h2>{props10.no}</h2>
                                    <h3>{props10.name}</h3>
                                    <h4>{props10.email}</h4>
                                </div> : '--not set--' }
            </span>
        </Fragment>
    )
}

MyComponent.propTypes = {
    // [Built-in propType Validator : Primitive]
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // [Built-in propType Validator : Combined Primitives]
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.objectOf(PropTypes.number).isRequired,
    props10: PropTypes.shape({
      no: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired
}

// Default Value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 0,
    props03: false,
    props04: null,
    props05: [],
    props06: () => {},
    props07: ''
}