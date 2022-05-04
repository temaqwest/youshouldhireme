import React from 'react';
import Styles from './Modal.module.css';
import Button from "../Button/Button";

const Modal = ({children, visible, setVisible, ...props}) => {

    const defaultClasses = [Styles.modalOverlay];

    if (visible) {
        defaultClasses.push(Styles.active);
    }

    return (
        <div className={defaultClasses.join(' ')}>
            <div className={Styles.modalContent}>
                <Button icon="close" type="fab" size="lg" onClick={setVisible} modifier={Styles.modalButtonClose}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;