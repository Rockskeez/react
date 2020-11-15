import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.profile_wallpaper} src='https://i.pinimg.com/originals/6a/8b/50/6a8b50ac0aa0e64f224bcee2f0afbd66.jpg' />
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;