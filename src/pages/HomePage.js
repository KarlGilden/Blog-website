import React, {useState, useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { collection, getDocs } from "firebase/firestore"
import {db} from "../firebase/firebase"
import Tag from '../components/Tag'
import Header from '../components/Header'
import Posts from '../components/Posts'

function HomePage() {
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
        <div className="off-white">
            <Header title="Welcome to my blog" text="This is a place where I can post updates on the projects I'm working on and my thoughts on the web development space"/>
            <Posts/>
        </div>
    )
}

export default HomePage
