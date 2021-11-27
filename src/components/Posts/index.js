import { PostsContainer, Category, CategoriesContainer } from './PostsElements'
import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { collection, getDocs } from "firebase/firestore"
import {db} from "../../firebase/firebase"
import Post from '../Post/index'

function Posts() {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(["No posts yet!"])
    const postCollectionRef = collection(db, "posts")
    useEffect(()=>{
        getPosts()
    },[])
    const getPosts = async () => {
        setLoading(true)
        const data = await getDocs(postCollectionRef);
        setPosts(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setLoading(false)
    }
    return (
        <>
            <CategoriesContainer>
                <Category>All</Category>
                <Category>Dev Logs</Category>
                <Category>Design patterns</Category>
                <Category>Technology</Category>
            </CategoriesContainer>
            {loading ? 
                <PostsContainer>
                    Loading...
                </PostsContainer>
                :
                <PostsContainer>
                    {posts.map((post)=>{
                            if(posts[0] == "No posts yet!"){
                                return <p>No posts yet!</p>
                            }else{
                                return <Post key={post.id} id={post.id} title={post.title.slice(0, 25) + "..."} content={post.content.slice(0, 50) + "..."} date={post.timeCreated} image={post.imageUrl}/>
                            } 
                        })}
                </PostsContainer>
                }

        </>
    )
}

export default Posts
