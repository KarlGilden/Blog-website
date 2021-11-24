import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from '../images/Untitled.svg'
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext'

function Menubar() {
    const { user, logout } = useAuth()

    return (   
        <>
        {user ? 
     
            <div className="nav off-white">
                <div className="logo-wrapper">
                    <h3><img className="logo" src={logo} alt="NA" />Blog</h3>
                </div>
                <div className="links menu-text">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/add-post">New Post</Link>
                    <Link onClick={logout} className="nav-button" to="/">Log out</Link>
                </div>
            </div>

        :
        <div className="nav off-white">
            <div className="logo-wrapper">
                <h3><img className="logo" src={logo} alt="NA" />Blog</h3>
            </div>
            <div className="links menu-text">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-button" to="/login">Log in</Link>
            </div>
        </div>

        }
        </>
    )
}

export default Menubar
