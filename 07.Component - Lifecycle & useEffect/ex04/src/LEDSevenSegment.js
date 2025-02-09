import React, {Fragment} from "react";
import * as PropTypes from "prop-types";
import * as styles from './assets/scss/LEDSevenSegment.scss';

function LEDSevenSegment({number, colon}) {
    return (
        <Fragment>
            <div className={styles.LED_Seven_Segment}>
                <p>{number}</p>
                <p className="placeholder"/>
            </div>
            {colon ? <div><p>:</p></div> : null}
        </Fragment>
    );
}

LEDSevenSegment.propTypes = {
    colon: PropTypes.bool.isRequired
};

LEDSevenSegment.defaultProps ={
    colon: true
}

export default LEDSevenSegment;