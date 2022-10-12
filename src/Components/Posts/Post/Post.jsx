import React from 'react';
import post from './Post.module.css'

const Post = (props) => {

    let deletePostEvent = () => {
        props.deletePost()
    }

    return (
        <div className={post.posts}>
            <img src={props.img}/>
            <div>{props.name}</div>
            <div>Like-{props.likes} </div>
            <div>
                <button onClick={() => deletePostEvent()}>Delete post</button>
            </div>
        </div>
    );
};

export default Post;