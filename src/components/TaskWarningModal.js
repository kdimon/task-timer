import React from 'react';
import Modal from 'react-modal';
import FlatButton from 'material-ui/FlatButton';
import styles from '../index.scss';

const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const TaskWarningModal = props => (
    <Modal
        isOpen={!!props.filledDescription}
        onRequestClose={props.handleClearFilledDescription}
        style={customStyles}
        contentLabel="You are trying to close your task without name, enter title and try again!"
        ariaHideApp={false}
    >
        <h3 className={styles.titleModal}>Empty task name</h3>
        <p>You are trying to close your task without name, enter title and try again!</p>
        <FlatButton
            label="Close"
            primary={true}
            className={styles.right}
            onClick={props.handleClearFilledDescription}
        />
    </Modal>
);

export default TaskWarningModal;