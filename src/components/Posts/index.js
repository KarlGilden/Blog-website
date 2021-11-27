import { PostsContainer, Category, CategoriesContainer, PostsWrapper } from './PostsElements'
import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { collection, getDocs } from "firebase/firestore"
import {db} from "../../firebase/firebase"
import Post from '../Post/index'

function Posts() {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(["No posts yet!"])
    const postCollectionRef = collection(db, "posts")
    const [currentPosts, setCurrentPosts] = useState(null)
    const [tag, setTag] = useState(null)
    useEffect(()=>{
        getPosts()
    },[])

    useEffect(()=>{
        if(tag == null){
            setCurrentPosts(posts)
        }else{
            setCurrentPosts(posts.filter((e)=>{
                return e.tag == tag
            }))
        }
    },[tag])
    
    const getPosts = async () => {
        setLoading(true)
        const data = await getDocs(postCollectionRef);
        setPosts(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setCurrentPosts(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setLoading(false)
    }

    return (
        <>
            <CategoriesContainer>
                <Category tag={tag == null} onClick={()=>{setTag(null)}}>All</Category>
                <Category tag={tag == "Dev"} onClick={()=>{setTag("Dev")}}>Dev Logs</Category>
                <Category tag={tag == "Pattern"} onClick={()=>{setTag("Pattern")}}>Design patterns</Category>
                <Category tag={tag == "Tech"} onClick={()=>{setTag("Tech")}}>Technology</Category>
            </CategoriesContainer>
            {loading ? 
                <PostsContainer>
                    Loading...
                </PostsContainer>
                :
                <PostsWrapper>
                    <PostsContainer>
                        {currentPosts.map((post)=>{
                                if(posts[0] == "No posts yet!"){
                                    return <p>No posts yet!</p>
                                }else{
                                    return <Post key={post.id} id={post.id} title={post.title} content={post.content} date={post.timeCreated} image={post.imageUrl}/>
                                } 
                            })}
                    </PostsContainer>
                </PostsWrapper>
                }

        </>
    )
}

export default Posts
