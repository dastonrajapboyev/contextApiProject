import React, {useContext} from 'react'
import { Container } from './style'
import { MovieContext } from "../../Context";

function Navbar() {
  const {movie} = useContext(MovieContext)
  return (
    <Container>
      <Container.Logo>Kino Context Api</Container.Logo>
      <Container.Nav>
        <Container.NavItem>Home</Container.NavItem>
        <Container.NavItem>New Movies</Container.NavItem>
        <Container.NavItem>Genre</Container.NavItem>
        <Container.NavItem>{movie.length}</Container.NavItem>
      </Container.Nav>
    </Container>
  )
}

export default Navbar