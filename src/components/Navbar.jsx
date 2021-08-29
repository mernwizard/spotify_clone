import React from 'react';
import styled from "styled-components";

const Nav = styled.nav`
    background:black;
    position:fixed;
    top:0;
    right:0;
    width:80%;
    height :10vh;
`

const Navbar = () => {
    return (
        <Nav> 
          Navbar  
        </Nav>
    )
}

export default Navbar
