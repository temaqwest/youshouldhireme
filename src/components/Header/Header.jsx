import React from 'react';
import Styles from './Header.module.css';
import Logo from '../../assets/images/Logo.png';

const Header = () => {
    const listItems = [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'About', path: '/'},
        {id: 3, title: 'Progress', path: '/'},
        {id: 4, title: 'Projects', path: '/'},
        {id: 5, title: 'Contact', path: '/', special: true},
    ];

    const linkClasses = (listItem) =>
        listItem.special ? [Styles.listItemLink, Styles.special] : [Styles.listItemLink];

    return (
        <header className={Styles.header}>
            <img src={Logo} className={Styles.logo} alt="Логотип"/>
            <nav className={Styles.nav}>
                <ul className={Styles.list}>
                    {
                        listItems.map(listItem => (
                            <li className={Styles.listItem} key={listItem.id}>
                                <a href={listItem.path} className={linkClasses(listItem).join(' ')}>
                                    {listItem.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;