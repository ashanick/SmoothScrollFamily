import React, {useState, useEffect} from 'react'
import {NavBarContainer, NavBtnLink, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkr } from './NavBarElements'
import {FaBars} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (()=>{
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome =() => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to="/" onClick={toggleHome}>1000 Iyengars +++</NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {/* <NavItem>
                        <NavLinks to="about" 
                        smooth={true} duration={500} spy={true} exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem> */}
                    <NavItem>
                        <NavLinkr to="/members">Find People</NavLinkr>
                        {/* <NavLinks to="/members" 
                            smooth={true} duration={500} spy={true} exact='true'
                            offset={-80}
                        >Find Members</NavLinks> */}
                    </NavItem>
                    <NavItem>
                        <NavLinkr to="/templetowns">Temple Towns</NavLinkr>
                        {/* <NavLinks to="/templetowns" 
                            smooth={true} duration={500} spy={true} exact='true'
                            offset={-80}
                        >Temple Towns</NavLinks> */}
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" 
                            smooth={true} duration={500} spy={true} exact='true'
                            offset={-80}
                            >Use the Site</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" 
                            smooth={true} duration={500} spy={true} exact='true'
                            offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavMenu>
            </NavBarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar
