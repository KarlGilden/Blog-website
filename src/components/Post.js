import React from 'react'
import {useNavigate} from 'react-router-dom'
function Post(props) {
    const navigate = useNavigate()

    const imageStyle = {
        backgroundImage: 'url(' + props.image + ')',
        backgroundSize: 'cover',
      };

    return (
        <div onClick={()=>{navigate(`/post/${props.id}`)}} className="post primary-text">
            <div className="image-wrapper">
                <img className="post-image" src={props.image} alt="" />
            </div>
            <div className="post-text">
                <h1 className="secondary-text">{props.title}</h1>
                <small className="secondary-text">{props.date}</small>
            </div>



        </div>
    )
}

export default Post
