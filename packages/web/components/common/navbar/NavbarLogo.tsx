import styled from 'styled-components'
import { IThemeContainer } from '../../../constants/themes'

export const NavbarLogo = styled.a`
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    font-weight: bold;
    font-size: 27px;
    span {
        display: inline-block;
        color: ${({ theme }: IThemeContainer) => theme.colorPrimary};
        transition: 0.2s;
    }
    span:first-child {
        color: ${({ theme }: IThemeContainer) => theme.title?.default};
    }
    :hover {
        span {
            opacity: 0.5;
        }
    }
`
