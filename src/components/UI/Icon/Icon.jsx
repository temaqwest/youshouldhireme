import React from 'react';
import Sprite from '../../../assets/images/sprite.svg';
import Styles from './Icon.module.css';

const Icon = ({name, modifier, size}) => {

    const styles = () => {
        let result = `${Styles.icon} `;

        switch (size) {
            case 'sm':
                result += Styles.icon__small;
                break;
            case 'md':
                result += Styles.icon__medium;
                break;
            case 'lg':
                result += Styles.icon__large;
                break;
            case 'xl':
                result += Styles.icon__xlarge;
                break;
            default:
                break;
        }

        return modifier ? `${result} ${modifier}` : result;
    }

    return (
        <svg className={styles()}>
            <use href={Sprite + "#" + name}></use>
        </svg>
    );
};

export default Icon;