import React, {useState, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom'
import { projectStorage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {db} from '../firebase/firebase'
function EditPage() {
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const [content, setContent] = useState("")
    const [url, setUrl] = useState(null)
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpg', 'image/jpeg']
    const navigate = useNavigate()
    let {id} = useParams()

    useEffect(()=>{
        getPost()
    },[])

    const handleSubmit = async() => {
        const docRef = doc(db, "posts", id);

        const storageRef = ref(projectStorage, '/' + image.name);
        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

        const url = await getDownloadURL(ref(projectStorage, '/'+image.name))
        setUrl(url);

        await updateDoc(docRef, {
            title: title,
            content: content,
            imageUrl: url
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

    const handleImageChange = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setImage(selected)
            setError(null)
        } else{
            setImage(null);
            setError("Please select a valid image file")
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
                    className="title-input"
                    value={title}
                    placeholder="Title" 
                    type="text" 
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    />
                    <div className="editor">
                    <CKEditor 
                            editor={ClassicEditor}
                            data={content}
                            onChange={(e, editor) => {
                                const data = editor.getData()
                                setContent(data)
                            }}
                        />
                    </div>

                    <input 
                    type="file" 
                    onChange={handleImageChange}
                    />
                    {error && <p>{error}</p>}
                    <button onClick={handleSubmit}>Post!</button>
                </div>
            </div>
            }
            
        </div>
    )
}

export default EditPage
