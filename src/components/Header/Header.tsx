import React, {FC} from 'react';
import {HeaderWrapper, Logo, TextLogo, NavMenu, TextNav, SocialIcon, Container} from './header.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
 
const Header: FC = () => {
    return ( 
        <HeaderWrapper>
            <Container>
            <Logo>
                <TextLogo>Music</TextLogo>
                <TextLogo p={({
                    fontWeight: '400',
                })}>NFT Platform</TextLogo>
            </Logo>
            <NavMenu>
                <TextNav>Marketplace</TextNav>
                <TextNav>About</TextNav>
                <TextNav>Resources</TextNav>
                <TextNav>Faq</TextNav>
            </NavMenu>
            <SocialIcon>
            <FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter} color="#fff" size="lg"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} color="#fff" size="lg"></FontAwesomeIcon>
            </SocialIcon>
            </Container>
        </HeaderWrapper>
    );
}
 
export default Header;