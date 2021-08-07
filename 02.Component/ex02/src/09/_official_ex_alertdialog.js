import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dialogActionsRoot: {
        justifyContent: 'center'
    },
    dialogTitleRoot: {
        backgroundColor: '#dedede'
    },
    dialogContentRoot: {
        width: 300,
        wordBreak: 'normal'
    }
});

export default function AlertDialog({ open, title, message }) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={ 'body' }>
                <DialogTitle classes={ {root: classes.dialogTitleRoot} }>{ '타이틀입니다.' }</DialogTitle>
                <DialogContent>
                    <DialogContentText classes={ {root: classes.dialogContentRoot} }>
                        { `이름이 비어 있습니다.\n이름은 필수 입력 항목입니다.` }
                    </DialogContentText>
                </DialogContent>
                <DialogActions classes={ {root: classes.dialogActionsRoot} }>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}