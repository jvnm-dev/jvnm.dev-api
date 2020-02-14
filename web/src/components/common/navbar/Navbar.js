import React from 'react'
import { Link } from 'react-router-dom'

import {
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem,
  NavbarLogo,
  NavbarButton
} from './'

import { Container } from '../'

export const Navbar = () => (
  <NavbarContainer>
    <Container flex fullHeight>
      <NavbarLogo to='/'>
        <span>J</span>
        <span>V</span>
        <span>M</span>
      </NavbarLogo>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to="/">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/">Lab</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/">Blog</Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarButton to="/">
        Contact
      </NavbarButton>
    </Container>
  </NavbarContainer>
)
