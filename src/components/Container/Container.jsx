import React, {useRef} from 'react';
import Styles from './Container.module.css';
import useOnScreen from "../../hooks/useOnScreen";

const Container = ({children, type, modifier, autoHeight}) => {
    const classes = [Styles.wrapper];
    
    if (modifier) classes.push(modifier);
    
    const backgrounds = {
        lightPink: '#DFCCD8',
        pink: '#D72483',
        dark: '#2F2F2F',
        lightGrey: '#FBFBFB',
        gradient: 'linear-gradient(110.41deg, #2F2D2E 6.48%, #41292C 35.68%, #792359 68.78%, #D72483 95.87%)',
    };
    
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    
    return (
        <div
            ref={ref}
            data-background={type}
            className={classes.join(' ')}
            style={{
                background: backgrounds[type],
                minHeight: !autoHeight ? '100vh' : 'initial'
            }}
        >
            <div className={Styles.container}>
                {children}
            </div>
        </div>
    );
};

export default Container;