import React from 'react'
import {useNavigate} from 'react-router-dom'
function Post(props) {
    const navigate = useNavigate()

    const imageStyle = {
        backgroundImage: 'url(' + props.image + ')',
        backgroundSize: 'cover',
      };

    return (
        <div onClick={()=>{navigate(`/post/${props.id}`)}} style={imageStyle}  className="post primary-text primary-bg">
            <div className="post-wrapper">
                <h1>{props.title}</h1>
                <small>{props.date}</small>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Post
