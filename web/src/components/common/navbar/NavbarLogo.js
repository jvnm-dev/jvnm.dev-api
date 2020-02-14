import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarLogo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  font-size: 27px;
  transition: 0.2s;

  span {
    color: #6961FB;
  }

  span:first-child {
    color: #1C1C1C;
  }

  span:last-child {
    color: #AECAD2;
  }

  :hover {
    transform: scale(1.05);
  }
`
