import styled from 'styled-components'
import { device } from '../../../constants/responsive.ts'
import {IThemeContainer} from '../../../constants/themes'

export const NavbarMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    div {
        height: 100%; /* react-reveal height tweak */
    }

    @media ${device.mobileL} {
        transition: 0.2s;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        padding: 0;
        width: 100vw;
        height: 100%;
        background-color: ${({ theme }: IThemeContainer) => theme.background};
        z-index: 3;
        flex-direction: column;

        &.show {
            visibility: visible;
            opacity: 1;
        }
    }
`
