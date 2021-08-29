import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background:black;
    color:white;
    height:100vh;
    width:20%;
    position:fixed;
    left:0;
`

const CustomUl = styled.ul`
    // background:green;
`
        

const Sidebar = () => {
    return (
        <Container>
          <CustomUl>
              <li>Home</li>
              <li>Search</li>
              <li>Your library</li>
              <li>Create playlist</li>
              <li>Liked songs</li>
          </CustomUl> 
        </Container>
    )
}

export default Sidebar