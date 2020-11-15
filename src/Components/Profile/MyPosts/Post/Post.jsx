import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="data:image/jpeg;base64,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" alt="" />
            { props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;