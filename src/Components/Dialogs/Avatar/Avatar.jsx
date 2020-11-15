import React from 'react';
import s from './Avatar.module.css';

const Avatar = (props) => {

    console.log(props);
    
    return (
        <li className={s.avatars}><img src={props.image}/></li>
    );
}

export default Avatar;