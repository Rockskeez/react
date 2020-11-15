import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar/Avatar';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    // аватарки собеседников

    let avatars = props.images;
    console.log(avatars);

    // собеседники 

    let dialogs = props.dialogs;
    console.log(dialogs);

    // сообщения собеседников

    let messages = props.messages;
    console.log(messages);

    // преобразования массивов собеседников и сообщений
    let avatarElements = avatars.map((avatar) => {
        return <Avatar image={avatar.avatar} id={avatar.id}/>
    })
    let dialogsElements = dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} /> ;
    });
    let messagesElements = messages.map((message) => {
        return <Message message={message.message} id={message.id}/> ;
    });

    console.log(avatarElements);
    console.log(dialogsElements);

    return (
        <div className={s.dialogs}>
            <ul className={s.avatar}>

                {/* рендеринг аватарок */}

                { avatarElements }
            </ul>
            <ul className={s.dialogs_items}>

                {/* рендеринг собеседников */}

                { dialogsElements }
            </ul>
            <ul className={s.messages}>

                {/* рендеринг сообщений */}

                { messagesElements }
            </ul>
            <textarea ></textarea>
            <button>Добавить</button>
        </div>
    );
}

export default Dialogs;