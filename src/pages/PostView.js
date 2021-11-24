import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import {db} from "../firebase"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

import { useAuth } from '../contexts/AuthContext'

function PostView() {
    const {id} = useParams()
    const docRef = doc(db, "posts", id);
    const [post, setPost] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    useEffect(()=>{
        getPost()
    },[])
    const getPost = async () => {
        setLoading(true)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setPost(docSnap.data())
            setLoading(false)
          } else {
            console.log("No such document!");
          }
    }


    return (
        <div className="page-wrapper">
            {loading ? 
            <div className="content off-white">
                <h1>Loading...</h1>
            </div>
            :
            <div className="content off-white">
                <div className="header">
                <AiOutlineArrowLeft className="post-icon back-arrow" onClick={() => navigate(-1)}/>
                {user ? 
                    <AiFillEdit className="post-icon edit" onClick={() => navigate(`/edit/${id}`)}/>
                :
                <></>
                }
                </div>
                <hr className="separator" />
                <div className="scrollable">
                    <h1>{post.title}</h1>
                    <small>{post.timeCreated}</small>
                    <p className="post-content">{post.content}</p>
                </div>

            </div>
            }

        </div>
    )
}

export default PostView
