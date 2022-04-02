import React from 'react';
import styles from '../../assets/scss/component/gallery/ImageListItem.scss';

export default function ImageListItem({no, url, comment, notifyDeleteImage}) {
    return (
        <li className={styles.ImageListItem}>
            <span style={{backgroundImage: `url(${url})`}}/>
            <a onClick={() => notifyDeleteImage(no)}>삭제</a>
        </li>
    )
}