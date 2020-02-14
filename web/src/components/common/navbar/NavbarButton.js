import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarButton = styled(Link)`
  color: #FFF;
  background: linear-gradient(135deg, rgba(90,81,250,1) 0%, rgba(179,204,210,1) 100%, rgba(0,212,255,1) 100%);
  box-shadow: 0px 0px 10px 0px rgba(28, 28, 28, 0.25);
  font-weight: bold;
  padding: 12px 20px 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s;

  :hover {
    transform: scale(1.025);
  }
`
