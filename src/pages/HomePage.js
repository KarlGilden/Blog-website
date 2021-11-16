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
    const [posts, setPosts] = useState()
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
        <div className="page-wrapper">
        {loading ? 
        <div className="content">
            <Tag text={"Latest Posts"}/>
        </div>
        :
        <div className="content">
                <Tag text={"Latest Posts"}/>
                {posts.map((post)=>{
                    return <Link to={`/post/${post.id}`}><Post title={post.title} content={post.content.slice(0, 50) + "..."} date={post.timeCreated}/></Link>
                })}
        </div>
        }
            
            
        </div>
    )
}

export default HomePage
