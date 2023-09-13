import React from 'react'
import { Container } from './style'
import Body from '../Body'

function Navbar() {
  return (
    <Container>
      <Container.Logo>Kino Context Api</Container.Logo>
      <Container.Nav>
        <Container.NavItem>Home</Container.NavItem>
        <Container.NavItem>New Movies</Container.NavItem>
        <Container.NavItem>Genre</Container.NavItem>
        <Container.NavItem>0</Container.NavItem>
      </Container.Nav>
    </Container>
  )
}

export default Navbar