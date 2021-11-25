import React, {useState} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"; 
import { projectStorage } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {db} from '../firebase/firebase'
function AddPostPage() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    const types = ['image/png', 'image/jpg', 'image/jpeg']
    const navigate = useNavigate()

    const handleSubmit = async() => {
        const storageRef = ref(projectStorage, '/' + image.name);
        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');

        });
        const url = await getDownloadURL(ref(projectStorage, '/'+image.name))
        setUrl(url);
        console.log(url)

        const docRef = await addDoc(collection(db, "posts"), {
            title: title,
            content: content,
            timeCreated: new Date(Date.now()).toLocaleString('en-GB'),
            imageUrl: url
          });
          navigate('/')
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
            <div className="content">
                <div><AiOutlineArrowLeft className="back-arrow" onClick={() => navigate(-1)}/></div>
                <hr className="separator" />
                <div className="form">
                    <input
                    className="title-input"
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
                    <input 
                    type="file" 
                    onChange={handleImageChange}
                    />
                    {error && <p>{error}</p>}
                    <button onClick={handleSubmit}>Post!</button>
                </div>
            </div>
        </div>
    )
}

export default AddPostPage
