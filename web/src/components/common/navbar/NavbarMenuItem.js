import styled from 'styled-components'

export const NavbarMenuItem = styled.li`
  display: inline-block;
  height: 100%;
  width: 175px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1C1C1C;
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s;
    height: 100%;
  }

  :hover {
    a {
      transform: translateY(-2px);
    }
  }
`
