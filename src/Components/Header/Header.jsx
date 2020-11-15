import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header_icon} src='https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg' />
        </header>
    );
}

export default Header;