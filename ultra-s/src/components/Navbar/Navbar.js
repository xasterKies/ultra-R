import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.element'



const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"/>
                    <NavIcon/>
                    ULTRA
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
