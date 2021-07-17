import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { device } from '../../../constants/responsive'
import { IThemeContainer } from '../../../constants/themes'

export const NavbarMenuIconMobileContainer = styled.span<{
    onClick: any
}>`
    display: none;
    position: absolute;
    right: 24px;
    cursor: pointer;
    z-index: 4;

    .bar1,
    .bar2,
    .bar3 {
        display: block;
        width: 25px;
        height: 3px;
        background-color: ${({ theme }: IThemeContainer) => theme.text};
        margin: 6px 0;
        transition: 0.2s;
    }

    &.close .bar1 {
        transform: rotate(-45deg) translate(-5px, 5px);
    }

    &.close .bar2 {
        opacity: 0;
    }

    &.close .bar3 {
        transform: rotate(45deg) translate(-8px, -8px);
    }

    @media ${device.mobileL} {
        display: inline-block;
    }
`

interface IProps {
    toggleMobileMenu: Function
    isOpen: boolean
}

export const NavbarMenuIconMobile = ({ toggleMobileMenu, isOpen }: IProps) => {
    const menuIconRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            ;(menuIconRef.current as HTMLElement | null)?.classList?.add(
                'close'
            )
        } else {
            ;(menuIconRef.current as HTMLElement | null)?.classList.remove(
                'close'
            )
        }
    }, [isOpen])

    return (
        <NavbarMenuIconMobileContainer
            ref={menuIconRef}
            onClick={toggleMobileMenu}
        >
            <span className="bar1" />
            <span className="bar2" />
            <span className="bar3" />
        </NavbarMenuIconMobileContainer>
    )
}
