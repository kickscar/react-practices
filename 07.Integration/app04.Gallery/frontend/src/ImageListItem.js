import React from 'react';
import styles from './assets/scss/ImageListItem.scss';

export default function ImageListItem({no, url, comment, notifyImage}) {
    return (
        <li className={styles.ImageListItem}>
            <span style={{
                backgroundImage: `url(${url})`
            }}/>
            <a onClick={() => notifyImage.delete(no)}>삭제</a>
        </li>
    )
}