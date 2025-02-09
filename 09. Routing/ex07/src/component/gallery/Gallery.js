import React from 'react';
import {SiteLayout} from "../../layout";
import * as styles from '../../assets/scss/component/Gallery.scss';

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Gallery}>
                <h2>Gallery</h2>
            </div>
        </SiteLayout>
    );
}