import React from 'react'
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import logo from '../../images/Untitled.svg'
function Navbar({toggle}) {
    const { user, logout } = useAuth()

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/"><span><img className="logo" src={logo} alt="" /></span>Blog</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/categories">Categories</NavLinks>
                        </NavItem>
                        {user && 
                            <>
                            <NavItem>
                                <NavLinks to="/add-post">New Post</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks onClick={logout} to="/">Log out</NavLinks>
                            </NavItem>
                            </>
                        }

                        {!user && 
                            <NavItem>
                                <NavLinks to="/login">Login</NavLinks>
                            </NavItem>
                        }       
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
