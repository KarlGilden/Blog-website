import React, { useState } from 'react'
import {Link} from "react-router-dom"
import profile from '../images/dp2.jpg'
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext'

function Menubar() {
    const { user, logout } = useAuth()

    return (   
        <>
        {user ? 
     
            <div className="side-nav">
                <div className="nav-header">
                    <h1>Karl Gildenhuys</h1>
                    <div className="profile-wrapper">
                        <img className="profile" src={profile} alt="photo" />
                    </div>
                    <p>Welcome to my blog. This is a space where I can write about my experiences and growth as a web developer</p>
                </div>

                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">All Posts</Link>
                <Link className="nav-link" to="/add-post">New Post</Link>
                <Link onClick={logout} className="nav-button" to="/">Log out</Link>
            </div>

        :
        <div className="side-nav">

            <div className="nav-header">
                <h1>Karl Gildenhuys</h1>
                <div className="profile-wrapper">
                    <img className="profile" src={profile} alt="photo" />
                </div>
                <p>Welcome to my blog. This is a space where I can write about my experiences and growth as a web developer</p>
            </div>

            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">All Posts</Link>
            <Link className="nav-button" to="/login">Log in</Link>

        </div>

        }
        </>
    )
}

export default Menubar
