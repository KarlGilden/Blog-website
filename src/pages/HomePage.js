import React, {useState, useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { collection, getDocs } from "firebase/firestore"
import { Link} from 'react-router-dom'

import {db} from "../firebase"
import Post from '../components/Post'
import Tag from '../components/Tag'

function HomePage() {
    const { user, logout } = useAuth()
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(["No posts yet!"])
    const postCollectionRef = collection(db, "posts")
    useEffect(()=>{
        getPosts()
    },[])

    const getPosts = async () => {
        setLoading(true)
        const data = await getDocs(postCollectionRef);
        console.log(data)
        setPosts(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setLoading(false)
    }

    return (
        <div className="page-wrapper off-white">
        {loading ? 
        <div className="content">
            <Tag text={"Latest Posts"}/>
        </div>
        :
        <div className="content">
                <Tag text={"Latest Posts"}/>   
                <div className="latest">
                    {posts.map((post)=>{
                        if(posts[0] == "No posts yet!"){
                            return <p>No posts yet!</p>
                        }else{
                            return <Post key={post.id} id={post.id} title={post.title.slice(0, 25) + "..."} content={post.content.slice(0, 50) + "..."} date={post.timeCreated}/>
                        } 
                    })}
                </div>             


        </div>
        }
            
            
        </div>
    )
}

export default HomePage
