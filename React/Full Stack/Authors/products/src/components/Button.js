import React from 'react'
import axios from 'axios';

export default props => {
    const { authorId, successCallback,click } = props;
    const onclickfunction = () => {
        successCallback(authorId)
    }
    return (
        <button onClick={onclickfunction}>
            {click}
        </button>
    )
}