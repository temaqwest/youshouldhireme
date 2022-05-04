import React from 'react';
import Styles from './Input.module.css';

const Input = ({modifier, ...props}) => {
    return (
        <input className={Styles.input + ' ' + modifier} {...props}/>
    );
};

export default Input;