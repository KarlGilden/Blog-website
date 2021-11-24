import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from '../images/Untitled.svg'
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext'
import { FaBars } from 'react-icons/fa';


function Menubar() {
    const { user, logout } = useAuth()
    const [clicked, setClicked] = useState(false)

    const showMenu = () => {
        setClicked(!clicked)
        console.log("passed")
    }
    return (   
        <>
        {user ? 

            <div className="nav off-white">
                <div className="logo-wrapper">
                    <h3><img className="logo" src={logo} alt="NA" /><span className="blog-title">Blog</span></h3>
                </div>
                <div className="links menu-text">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/add-post">New Post</Link>
                    <Link className="nav-link" to="/categories">Categories</Link>
                    <Link onClick={logout} className="nav-button" to="/">Log out</Link>
                </div>
                {clicked ? 
                        <div className="small-links menu-text">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/add-post">New Post</Link>
                            <Link className="nav-link" to="/categories">Categories</Link>
                            <Link onClick={logout} className="nav-button" to="/">Log out</Link>
                        </div>
                    :
                    <></>
                }
                <div className="navbars" onClick={()=>{setClicked(!clicked)}}onClick={()=>{setClicked(!clicked)}}>
                    <FaBars />
                </div>

            </div>

        :
        <div className="nav off-white">
            <div className="logo-wrapper">
                <h3><img className="logo" src={logo} alt="NA" /><span className="blog-title">Blog</span></h3>
            </div>
            <div className="links menu-text">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/categories">Categories</Link>
                <Link className="nav-button" to="/login">Log in</Link>
            </div>
            {clicked ? 
                <div className="small-links menu-text">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/categories">Categories</Link>
                    <Link className="nav-button" to="/login">Log in</Link>
                </div>
                    :
                    <></>
                }
            <div className="navbars" onClick={()=>{setClicked(!clicked)}}>
                <FaBars />
            </div>
        </div>

        }
        </>
    )
}

export default Menubar
