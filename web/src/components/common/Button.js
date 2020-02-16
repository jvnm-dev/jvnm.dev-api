import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  display: inline-block;
  color: #FFF;
  background: linear-gradient(135deg, rgba(90,81,250,1) 0%, rgba(179,204,210,1) 100%, rgba(0,212,255,1) 100%);
  box-shadow: 0px 0px 10px 0px rgba(28, 28, 28, 0.25);
  font-weight: bold;
  padding: 15px 40px 15px 40px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s;
  width: fit-content;

  :hover {
    transform: scale(1.025);
  }
`
