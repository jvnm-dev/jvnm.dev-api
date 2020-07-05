import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarLogo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 27px;

  span {
    display: inline-block;
    color: #6961FB;
    transition: 0.2s;
  }

  span:first-child {
    color: ${({theme}) => theme.title?.default};
  }

  span:last-child {
    color: #AECAD2;
  }

  :hover {
    span {
      transform: translateY(-2px);
    }

    span:first-child {
      transform: translateY(2px);
    }

    span:last-child {
      transform: translateY(2px);
    }
  }
`
