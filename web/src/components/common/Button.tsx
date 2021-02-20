
import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Button = styled(Link)<{
    width?: string
}>`
  display: inline-block;
  color: #FFF !important;
  background: linear-gradient(135deg, rgba(90,81,250,1) 0%, rgba(179,204,210,1) 100%, rgba(0,212,255,1) 100%);
  box-shadow: 0 0 10px 0 rgba(28, 28, 28, 0.25);
  font-weight: bold;
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s;
  text-align: center;
  width: ${({ width }) => width === 'full' ? 'calc(100% - 50px);' : 'fit-content'};
  :hover {
    transform: translateY(-1px);
    box-shadow: 0 0 15px 0 rgba(28, 28, 28, 0.30);
  }
  @media only screen and (min-width: 1024px) {
    padding: 12.5px 30px 12.5px 30px;
    width: ${({ width }) => width === 'full' ? 'calc(100% - 60px);' : 'fit-content'};
  }
  @media only screen and (min-width: 1440px) {
    padding: 15px 40px 15px 40px;
    width: ${({ width }) => width === 'full' ? 'calc(100% - 80px);' : 'fit-content'};
  }
`