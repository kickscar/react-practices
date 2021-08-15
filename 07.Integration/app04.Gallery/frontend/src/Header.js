import React, {Fragment, useRef, useState} from 'react';
import Modal from "react-modal";
import styles from './assets/scss/Header.scss';
import modalStyles from './assets/scss/modal.scss';

Modal.setAppElement('body');

export default function Header({notifyImage}) {

    const refForm = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = function (e) {
        e.preventDefault();

        // Validation
        if (e.target['comment'].value === '') {
            console.error(`validation ${e.target['comment'].placeholder} is empty ''`);
            return;
        }

        if (e.target['uploadImage'].files.length === 0) {
            console.error(`validation ${e.target['uploadImage'].placeholder} is empty`);
            return;
        }

        const comment = e.target['comment'].value;
        const file = e.target['uploadImage'].files[0];

        notifyImage.add(comment, file);
        setModalIsOpen(false);
    }

    return (
        <Fragment>
            <div className={styles.Header}>
                <h1>My Photos</h1>
                <a
                    className={styles.UploadButton}
                    onClick={() => setModalIsOpen(true)}>
                    이미지 올리기
                </a>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>이미지(사진) 등록</h1>
                <div>
                    <form
                        className={styles.FormUpload}
                        onSubmit={handleSubmit}
                        ref={refForm}>
                        <input
                            type={'text'}
                            name={'comment'}
                            placeholder={'설명(코멘트)'}/>
                        <br/><br/>
                        <label>이미지(사진)</label>
                        <br/>
                        <input
                            type={'file'}
                            name={'uploadImage'}
                            placeholder={'이미지(사진)'}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={() => {
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    }}>확인
                    </button>
                    <button onClick={() => setModalIsOpen(false)}>취소</button>
                </div>
            </Modal>
        </Fragment>
    )
}