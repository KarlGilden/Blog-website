import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Post(props) {
    const navigate = useNavigate()
    return (
        <div onClick={()=>{navigate(`/post/${props.id}`)}} className="post primary-text primary-bg">
            <h1>{props.title}</h1>
            <small>{props.date}</small>
            <p>{props.content}</p>
        </div>
    )
}

export default Post
