import React from 'react'
import { IconesFooter, IconesRedesSociais, MainContainer, TextFooter } from './styled';


const Footer = () => {
    return (
        <>
        <MainContainer>
            <TextFooter>
                 <p>LABEX © 2022</p>
            </TextFooter>
            
            <IconesFooter>
                <IconesRedesSociais src='/img/Facebook.png' alt="Facebook" />
                <IconesRedesSociais src='/img/Instagram.png' alt="Instagram" />
                <IconesRedesSociais src='/img/Twitter.png' alt="Twitter" />                   
            </IconesFooter>             
        </MainContainer>
        </>
    )
}
export default Footer;