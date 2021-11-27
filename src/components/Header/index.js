import React from 'react'
import { HeaderContainer, HeaderText, HeaderTitle } from './HeaderElements'
import logo from '../../images/Untitled.svg'
function Header(props) {
    return (
        <>
            <HeaderContainer>
                <HeaderTitle>{props.title}</HeaderTitle>
                <HeaderText>{props.text}</HeaderText>
            </HeaderContainer>
        </>
    )
}

export default Header
