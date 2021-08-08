import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes  from "prop-types";

const useStyles = theme => ({
    dialogActionsRoot: {
        justifyContent: 'center'
    },
    dialogTitleRoot: {

    },
    dialogContentRoot: {
        width: 300,
        wordBreak: 'normal'
    }
});

class AlertDialog extends Component {
    constructor() {
        super(...arguments);
        this.classes = useStyles;
        this.state = {
            open: false,
            title: '',
            message: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(!nextProps.open) {
            AlertDialog.visible = false;
            return null;
        }

        console.log(nextProps, prevState);
        return {
            open: (AlertDialog.visible = !AlertDialog.visible),
            title: AlertDialog.visible ? nextProps.title : '',
            message: AlertDialog.visible ? nextProps.message : ''
        };
    }

    render() {
        const { classes } = this.props;
        return <Dialog
            open={this.state.open }
            /* onClose={handleClose} */
            scroll={'body'}>
            <DialogTitle classes={ {root: classes.dialogTitleRoot} }>{ this.state.title }</DialogTitle>
            <DialogContent>
                <DialogContentText classes={ {root: classes.dialogContentRoot} }>
                    { this.state.message }
                </DialogContentText>
            </DialogContent>
            <DialogActions classes={ {root: classes.dialogActionsRoot} }>
                <Button onClick={ () => this.setState({open: false}) } color="primary" autoFocus>
                    확인
                </Button>
            </DialogActions>
        </Dialog>
    }
}

AlertDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

AlertDialog.defaultProps = {
    open: false
}

// HOC
export default withStyles(useStyles)(AlertDialog);