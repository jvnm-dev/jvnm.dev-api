import styled from 'styled-components'

export const NavbarMenuItem = styled.li`
    display: inline-block;
    height: 100%;
    width: 175px;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.title.default};
        text-decoration: none;
        font-weight: 600;
        transition: 0.2s;
        height: 100%;
        :visited {
            color: ${({ theme }) => theme.title.default} !important;
        }
    }
`
