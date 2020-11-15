import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

    // список 3 лучших друзей

    let friends = props.friends;
    console.log(friends);


    // перебор трех друзей


    let friendsElements = friends.map((friend) => {
        return (
            <li>
                <img src={friend.avatar} />
                <h3 className={s.friend_title}>{friend.name}</h3>
            </li>
        )
    })

    return (
        <nav className={s.navigation}>
            <ul className={s.navigation_list}>
                <li className={s.navigation_list_item}>
                    <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.navigation_list_item}>
                    <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </li>
                <li className={s.navigation_list_item}>
                    <NavLink to='/News' activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.navigation_list_item}>
                    <NavLink to='/Music' activeClassName={s.activeLink}>Music</NavLink>
                </li>
                <li className={s.navigation_list_item}>
                    <NavLink to='/Settings' activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>

            <h2 className={s.friends_title}>Friends</h2>
            <ul className={s.friends_list}>

                {/* рендеринг друзей */}

                {friendsElements}

            </ul>
        </nav>
    );
}

export default Navbar;