import React, {useState} from 'react';
import Styles from './Select.module.css';
import Icon from "../Icon/Icon";

/**
 *
 * @param options <Array>
 * @param name <String>
 * @param callback <Object.prototype.function>
 * @returns {JSX.Element}
 */
const Select = ({options, name, callback}) => {

    const [activeSelect, setActiveSelect] = useState(false);
    const [activeOption, setActiveOption] = useState({})

    function toggleSelect() {
        setActiveSelect(!activeSelect);
    }

    function chooseOption(opt) {
        setActiveOption(opt);
        setActiveSelect(!activeSelect);
        if (callback)
            callback(opt);
    }

    return (
        <div className={Styles.customSelect}>
            <div onClick={toggleSelect} className={Styles.customSelectContainer}>
                <span className={Styles.customSelectValue}>{activeOption.title ?? name}</span>
                <Icon name={activeSelect ? 'select_down' : 'select_up'} modifier={Styles.customSelectIcon} size="sm"/>
            </div>
            <div className={
                activeSelect ?
                    Styles.optionsContainer + ' ' + Styles.optionsContainerActive :
                    Styles.optionsContainer
            }>
                {
                    options.map((opt) =>
                        <div
                            onClick={() => chooseOption(opt)}
                            className={
                                activeOption.id === opt.id ?
                                    Styles.customOption + " " + Styles.customOptionActive:
                                    Styles.customOption
                            }
                            key={opt.id}
                            data-value={opt.value}
                        >
                            {opt.title}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Select;