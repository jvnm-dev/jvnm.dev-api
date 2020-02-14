import React from 'react'

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
    <Container flex>
      <NavbarLogo>
        JVM
      </NavbarLogo>
      <NavbarMenu>
        <NavbarMenuItem>
          About
        </NavbarMenuItem>
        <NavbarMenuItem>
          Lab
        </NavbarMenuItem>
        <NavbarMenuItem>
          Blog
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarButton href="/">
        Contact
      </NavbarButton>
    </Container>
  </NavbarContainer>
)
