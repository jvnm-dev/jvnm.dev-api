import styled from 'styled-components'
import { device } from '../../../constants/responsive'
import { IThemeContainer } from '../../../constants/themes'

export const NavbarMenuItem = styled.li<{
    mobileOnly?: boolean
}>`
    display: inline-block;
    height: 100%;
    width: 175px;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: $ ${({ theme }: IThemeContainer) => theme.title.default};
        text-decoration: none;
        font-weight: 600;
        transition: 0.2s;
        height: 100%;
        :visited {
            color: ${({ theme }: IThemeContainer) =>
                theme.title.default} !important;
        }
    }

    ${({ mobileOnly }) =>
        mobileOnly &&
        `
      display: none;
    `}

    @media ${device.mobileL} {
        width: 100%;
        ${({ mobileOnly }) =>
            mobileOnly &&
            `
        display: inline-block;
      `}
    }
`
