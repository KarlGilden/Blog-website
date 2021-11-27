import React from 'react'
import {FooterContainer, FooterLinks, FooterText, FooterLink} from './FooterElements'
import { FaGithub, FaLinkedin, FaPortrait } from 'react-icons/fa'
function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterLinks>
                    <FooterLink target="_blank" href="https://github.com/KarlGilden"><FaGithub/></FooterLink>
                    <FooterLink target="_blank" href="https://www.linkedin.com/in/karl-gildenhuys-b0286720a/"><FaLinkedin/></FooterLink>
                    <FooterLink target="_blank" href="https://www.karlgildenhuys.com/"><FaPortrait/></FooterLink>
                </FooterLinks>
                <FooterText></FooterText>
            </FooterContainer>
        </>
    )
}

export default Footer
