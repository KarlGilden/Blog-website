import React, {useState, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom'
import { doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import {db} from '../firebase'
function EditPage() {
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState("")
    const navigate = useNavigate()
    let {id} = useParams()

    useEffect(()=>{
        getPost()
    },[])

    const handleSubmit = async() => {
        const docRef = doc(db, "posts", id);

        await updateDoc(docRef, {
            title: title,
            content: content
          });
          navigate('/')
    }

    const deletePost = async () => {
        await deleteDoc(doc(db, "posts", id));
        navigate('/')
    }

    const getPost = async () => {
        setLoading(true)
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setContent(docSnap.data().content)
            setTitle(docSnap.data().title)
            setLoading(false)
          } else {
            console.log("No such document!");
          }
    }

    return (
        <div className="form-wrapper">
            {loading ? 
            <div className="content">
                <div className="header">
                <AiOutlineArrowLeft className="post-icon back-arrow" onClick={() => navigate(-1)}/>
                <AiFillDelete className="post-icon delete" onClick={deletePost}/>
                </div>
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
            : 
            <div className="content">
                <div className="header">
                    <AiOutlineArrowLeft className="post-icon back-arrow" onClick={() => navigate(-1)}/>
                    <AiFillDelete className="post-icon delete" onClick={deletePost}/>
                </div>
                <hr className="separator" />
                <div className="form">
                    <input
                    value={title}
                    placeholder="Title" 
                    type="text" 
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    <textarea 
                    value={content}
                    placeholder="Write away..." 
                    type="text" 
                    onChange={(e)=>{
                        setContent(e.target.value)
                    }}
                    />
                    <button onClick={handleSubmit}>Post!</button>
                </div>
            </div>
            }
            
        </div>
    )
}

export default EditPage
