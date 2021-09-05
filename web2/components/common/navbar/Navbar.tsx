import React, { MouseEvent, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Toolbar } from '@material-ui/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

import { NavbarButtons } from './NavbarButton'
import { ISessionReducer, setToken } from '../../../redux/slices/session'
import { NavbarButton, NavbarContainer, NavbarLogo } from './'
import { device } from '../../../constants/responsive'

interface INavbarProps {
    contact?: boolean
    dashboard?: boolean
    signin?: boolean
}

const NavbarAppBar = styled(AppBar)`
    background-color: transparent;
    box-shadow: none;
`

const NavbarToolbar = styled(Toolbar)`
    justify-content: space-between;
    height: 80px;
    @media ${device.tablet} {
        padding: 24px;
    }
`

export const Navbar = ({ contact, dashboard, signin }: INavbarProps) => {
    const session = useSelector(({ session }: ISessionReducer) => session)
    const dispatch = useDispatch()
    const navbarMenu = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    const handleContactButtonClick = (e: MouseEvent) => {
        e.preventDefault()
        window.location.href = 'mailto:jasonvanmalder@gmail.com'
    }

    const handleSignOutButtonClick = (e: MouseEvent) => {
        e.preventDefault()
        dispatch(setToken(undefined))
        router.push('/')
    }

    const toggleMobileMenu = () => {
        setIsMenuOpen((currentIsMenuOpen: boolean) => {
            const menu = navbarMenu.current as HTMLElement | null

            if (!currentIsMenuOpen) {
                menu?.classList?.add('show')
                document.body.classList.add('stop-scrolling')
            } else {
                menu?.classList?.remove('show')
                document.body.classList.remove('stop-scrolling')
            }

            return !currentIsMenuOpen
        })
    }

    const shouldShowContact = !localStorage.getItem('jvnm')
    const shouldShowSignIn = !shouldShowContact && !signin

    const getLogo = () => {
        if (!dashboard) {
            return (
                <>
                    <span>Jason</span>
                    <span>&nbsp;Van Malder</span>
                </>
            )
        }

        const path = router.pathname.split('/')
        const name = path[path.length - 1].replace('-', ' ')

        let firstPart = name.slice(0, Math.floor(name.length / 2))
        firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1)

        const secondPart = name.slice(Math.floor(name.length / 2))

        return (
            <>
                <span>{firstPart}</span>
                <span>{secondPart}</span>
            </>
        )
    }

    return (
        <NavbarContainer>
            <NavbarAppBar position="static">
                <NavbarToolbar>
                    <Link href="/" passHref>
                        <NavbarLogo>{getLogo()}</NavbarLogo>
                    </Link>

                    <NavbarButtons>
                        {contact && shouldShowContact && (
                            <NavbarButton
                                aria-label="Contact"
                                onClick={handleContactButtonClick}
                            >
                                Contact
                            </NavbarButton>
                        )}

                        {shouldShowSignIn && !session.token && (
                            <Link href="/signin" passHref>
                                <NavbarButton aria-label="Sign in">
                                    Sign in
                                </NavbarButton>
                            </Link>
                        )}

                        {shouldShowSignIn && session.token && !dashboard && (
                            <Link href="/dashboard" passHref>
                                <NavbarButton aria-label="dashboard">
                                    Dashboard
                                </NavbarButton>
                            </Link>
                        )}

                        {!contact && session.token && (
                            <NavbarButton
                                aria-label="Sign out"
                                onClick={handleSignOutButtonClick}
                            >
                                Sign out
                            </NavbarButton>
                        )}
                    </NavbarButtons>
                </NavbarToolbar>
            </NavbarAppBar>
        </NavbarContainer>
    )
}
