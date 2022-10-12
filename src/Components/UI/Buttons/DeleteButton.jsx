import React from 'react';
import rmv from './DeleteButton.module.css'

const DeleteButton = () => {
    return (
        <button
            className={rmv.rmvbtn}
        >
            Delete post
        </button>
    );
};

export default DeleteButton;