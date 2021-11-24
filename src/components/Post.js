import React from 'react'

function Post(props) {
    return (
        <div className="post secondary-text off-white">
            <h1>{props.title}</h1>
            <small>{props.date}</small>
            <p>{props.content}</p>
        </div>
    )
}

export default Post
