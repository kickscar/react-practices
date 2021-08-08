import React, {useState, useEffect} from 'react';
import ReactModal from "react-modal";

let _show02 = false;
ReactModal.setAppElement('body');

export default function ModalEx01({ show, callback }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(show && !open) {
            _show02 = false;
            callback({
                show: _show02
            })
        }
        console.log("[ModalEx02]:update", _show02, show, open);
    }, [open]);

    console.log("[ModalEx02]:render", _show02, show, open);

    if (!show) {
        _show02 = false;
        return null;
    }

    if(!_show02) {
        _show02 = !_show02;
        setOpen(true);
        return null;
    }

    return (
        <ReactModal
            isOpen={open}
            contentLabel="Modal Example">
            <h1>ModalEx02</h1>
            <button onClick={() => setOpen(false) }>
                Close
            </button>
        </ReactModal>
    );
}