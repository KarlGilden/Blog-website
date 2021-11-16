import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import {db} from "../firebase"
import { AiOutlineArrowLeft } from 'react-icons/ai';


function PostView() {
    const {id} = useParams()
    const docRef = doc(db, "posts", id);
    const [post, setPost] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
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
            <div className="content">
                <h1>Loading...</h1>
            </div>
            :
            <div className="content">
                <div><AiOutlineArrowLeft className="back-arrow" onClick={() => navigate(-1)}/></div>
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
