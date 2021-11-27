import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const FooterContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height: 150px;
    background-color: #1D2228;
    padding: 0px 5%;
`

export const FooterText = styled.div``
export const FooterLinks = styled.div``

export const FooterLink = styled.a`
    color: #323d4a;
    font-size: 2rem;
    margin: 0px 25px;
    cursor: pointer;

    &:hover{
        color: #242c36;
    }
`

