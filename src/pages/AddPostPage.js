import React, {useState} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase'
function AddPostPage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async() => {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            content: content,
            timeCreated: new Date(Date.now()).toLocaleString('en-GB')
          });
          navigate('/')
    }

    return (
        <div className="page-wrapper">
            <div className="content">
                <div><AiOutlineArrowLeft className="back-arrow" onClick={() => navigate(-1)}/></div>
                <hr className="separator" />
                <div className="form">
                    <input
                    placeholder="Title" 
                    type="text" 
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    <textarea 
                    placeholder="Write away..." 
                    type="text" 
                    onChange={(e)=>{
                        setContent(e.target.value)
                    }}
                    />
                    <button onClick={handleSubmit}>Post!</button>
                </div>
            </div>
        </div>
    )
}

export default AddPostPage
