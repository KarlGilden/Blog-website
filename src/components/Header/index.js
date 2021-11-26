import React from 'react'
import { HeaderContainer, HeaderText, HeaderTitle } from './HeaderElements'
import logo from '../../images/Untitled.svg'
function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderTitle>Welcome to  <img className="logo" src={logo} alt="" />blog</HeaderTitle>
                <HeaderText>This is a place where I can post updates on the projects I'm working on and my thoughts on the web developemetn sapce</HeaderText>
            </HeaderContainer>
        </>
    )
}

export default Header
