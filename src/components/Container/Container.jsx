import React from 'react';
import Styles from './Container.module.css';

const Container = ({children, type}) => {
    const backgrounds = {
        lightPink: '#DFCCD8',
        pink: '#D72483',
        dark: '#2F2F2F',
        lightGrey: '#FBFBFB',
        gradient: 'linear-gradient(110.41deg, #2F2D2E 6.48%, #41292C 35.68%, #792359 68.78%, #D72483 95.87%)',
    };

    return (
        <div className={Styles.wrapper} style={{background: backgrounds[type]}}>
            <div className={Styles.container}>
                {children}
            </div>
        </div>
    );
};

export default Container;