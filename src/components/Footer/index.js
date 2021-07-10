import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import {FooterContainer, FooterLink, FooterLinkItems,
    FooterLinkTitle, FooterLinksWrapper,  FooterWrap, 
    FooterLinksContainer, SocialMedia, SocialMediaWrap, SocialIconLink,
    SocialLogo, SocialIcons, WebsiteRights } from './FooterElements'
    import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    const toggleHome =() => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">FaceBook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Iyengars +++
                        </SocialLogo>
                        <WebsiteRights>Iyengars +++ Copyright {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                                aria-label="Facebook"><FaFacebook />
                            </SocialIconLink> 
                            <SocialIconLink href="/" target="_blank"
                                aria-label="Instagram"><FaInstagram />
                            </SocialIconLink> 
                            <SocialIconLink href="/" target="_blank"
                                aria-label="Youtube"><FaYoutube />
                            </SocialIconLink> 
                            <SocialIconLink href="/" target="_blank"
                                aria-label="Twitter"><FaTwitter />
                            </SocialIconLink> 
                        </SocialIcons>
                    </SocialMediaWrap>

                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
