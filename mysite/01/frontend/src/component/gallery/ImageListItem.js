import React from 'react';
import styles from '../../assets/scss/component/gallery/ImageListItem.scss';

export default ({no, url, comment, notifyImage}) => {
    return (
        <li className={styles.ImageListItem}>
            <span style={{
                backgroundImage: `url(${url})`
            }}/>
            <a onClick={() => notifyImage.delete(no)}>삭제</a>
        </li>
    )
}