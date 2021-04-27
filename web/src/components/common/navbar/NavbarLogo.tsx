import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {IThemeContainer} from '../../../constants/themes'

export const NavbarLogo = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    font-size: 27px;
    span {
        display: inline-block;
        color: #6961fb;
        text-shadow: -1px 1px 1px #6961fb;
        transition: 0.4s;
    }
    span:first-child {
        color: ${({ theme }: IThemeContainer) => theme.title?.default};
        text-shadow: -1px 1px 1px ${({ theme }: IThemeContainer) => theme.title?.default};
    }
    span:last-child {
        color: #aecad2;
        text-shadow: -1px 1px 1px #aecad2;
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
