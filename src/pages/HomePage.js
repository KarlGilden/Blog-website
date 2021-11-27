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
        <div className="page-wrapper off-white">
            <Header/>
            <Posts/>
        </div>
    )
}

export default HomePage
