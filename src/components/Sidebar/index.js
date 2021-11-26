import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu} from './SidebarElements'
import { useAuth } from '../../contexts/AuthContext'

function Sidebar({isOpen, toggle}) {
    const { user, logout } = useAuth()

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="/">Home</SidebarLink>
                    <SidebarLink onClick={toggle} to="/categories">Categories</SidebarLink>
                    {user && 
                        <>
                        <SidebarLink to="/add-post">New Post</SidebarLink>
                        <SidebarLink onClick={logout} to="/">Log out</SidebarLink>
                        </>
                        }
                    {!user &&
                         <SidebarLink to="/login">Login in</SidebarLink>
                        }
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
