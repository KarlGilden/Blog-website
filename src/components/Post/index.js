import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PostContainer, ImageContainer, PostText, PostDate, PostTitle } from './PostElements'
function Post(props) {
    const navigate = useNavigate()
    return (
        <PostContainer onClick={()=>{navigate(`/post/${props.id}`)}}>
            <ImageContainer>
                <img className="post-image" src={props.image} alt="" />
            </ImageContainer>
            <PostText>
                <PostTitle>{props.title}</PostTitle>
                <PostDate>{props.date}</PostDate>
            </PostText>
        </PostContainer>
    )
}

export default Post
