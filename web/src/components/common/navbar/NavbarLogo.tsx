import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarLogo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 27px;
  span {
    display: inline-block;
    color: #6961FB;
    text-shadow: -1px 1px 1px #6961FB;
    transition: 0.4s;
  }
  span:first-child {
    color: ${({theme}) => theme.title?.default};
    text-shadow: -1px 1px 1px ${({theme}) => theme.title?.default};
  }
  span:last-child {
    color: #AECAD2;
    text-shadow: -1px 1px 1px #AECAD2;
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