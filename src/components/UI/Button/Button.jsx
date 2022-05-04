import React from 'react';
import Styles from './Button.module.css';
import Icon from "../Icon/Icon";

const Button = ({children, icon, size, type, modifier, ...props}) => {

    const defaultClasses = [Styles.button];

    switch (type) {
        case 'fab':
            defaultClasses.push(Styles.fab);
            break;
        default:
            break;
    }

    if (modifier)
        defaultClasses.push(modifier)

    if (icon && children) {
        return (
            <button className={defaultClasses.join(' ')} {...props}>
                {children}
                <Icon size={size} name={icon}/>
            </button>
        )
    } else if (icon) {
        defaultClasses.push(Styles.iconOnly);

        return (
            <button className={defaultClasses.join(' ')} {...props}>
                <Icon size={size} name={icon}/>
            </button>
        )
    }

    return (
        <button className={defaultClasses.join(' ')} {...props}>
            {children}
        </button>
    )
};

export default Button;