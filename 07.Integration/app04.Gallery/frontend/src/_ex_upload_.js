import React, {Fragment, useState, useRef} from 'react';
import Modal from "react-modal";
import styles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function _ex_upload_() {
    const refForm = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = async function (e) {
        try {
            e.preventDefault();

            // Validation
            if (e.target['comment'].value === '') {
                throw `validation ${e.target['comment'].placeholder} is empty ''`;
            }

            if (e.target['uploadImage'].files.length === 0) {
                throw `validation ${e.target['uploadImage'].placeholder} is empty`;
            }

            // Create FormData
            const formData = new FormData();
            formData.append('comments', e.target['comment'].value);
            formData.append('file', e.target['uploadImage'].files[0]);

            // Post
            const response = await fetch(`/api`, {
                method: 'post',
                headers: {'Accept': 'applcation/json'},
                body: formData
            });

            // fetch success?
            if (!response.ok) {
                throw `${response.status} ${response.statusText}`;
            }

            // API success?
            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            // re-rendering(update)
            console.log(json.data);
            setModalIsOpen(false);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment>
            <button onClick={() => setModalIsOpen(true)}>upload</button>
            <br/><br/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{content: {width: 350}}}
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    <form
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
                <div className={styles['modal-dialog-buttons']}>
                    <button onClick={() => {
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    }}>확인
                    </button>
                    <button onClick={() => setModalIsOpen(false)}>취소</button>
                </div>
            </Modal>


        </Fragment>
    );
}