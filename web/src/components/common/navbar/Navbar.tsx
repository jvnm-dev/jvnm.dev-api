import React, { MouseEvent, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import {
    NavbarContainer,
    NavbarMenu,
    NavbarMenuItem,
    NavbarLogo,
    NavbarButton,
    NavbarMenuIconMobile,
} from './'

import { Container } from '../'
import { ISessionReducer, setToken } from '../../../redux/slices/session'

interface INavbarProps {
    contact?: boolean
    dashboard?: boolean
    signin?: boolean
}

export const Navbar = ({ contact, dashboard, signin }: INavbarProps) => {
    const history = useHistory()
    const session = useSelector(({ session }: ISessionReducer) => session)
    const dispatch = useDispatch()
    const navbarMenu = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleContactButtonClick = (e: MouseEvent) => {
        e.preventDefault()
        window.location.href = 'mailto:jasonvanmalder@gmail.com'
    }

    const handleSignOutButtonClick = (e: MouseEvent) => {
        e.preventDefault()
        dispatch(setToken(undefined))
        history.push('/')
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

    return (
        <NavbarContainer>
            <Container fullheight flex>
                <NavbarLogo to="/">
                    <span>J</span>
                    <span>V</span>
                    <span>M</span>
                </NavbarLogo>
                <NavbarMenu ref={navbarMenu}>
                    {!dashboard && (
                        <>
                            <NavbarMenuItem mobileOnly>
                                <Link
                                    aria-label="Contact"
                                    to="/"
                                    onClick={handleContactButtonClick}
                                >
                                    Contact
                                </Link>
                            </NavbarMenuItem>
                        </>
                    )}
                    {dashboard && (
                        <NavbarMenuItem>
                            <Link to="/dashboard/">Landing Data</Link>
                        </NavbarMenuItem>
                    )}
                </NavbarMenu>

                <NavbarMenuIconMobile
                    isOpen={isMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                />

                {contact && shouldShowContact && (
                    <NavbarButton
                        aria-label="Contact"
                        to="/"
                        onClick={handleContactButtonClick}
                    >
                        Contact
                    </NavbarButton>
                )}

                {shouldShowSignIn && !session.token && (
                    <NavbarButton
                        aria-label="Sign in"
                        to="/signin"
                        style={{ marginLeft: '8px' }}
                    >
                        Sign in
                    </NavbarButton>
                )}

                {shouldShowSignIn && session.token && !dashboard && (
                    <NavbarButton
                        aria-label="Dashboard"
                        to="/dashboard"
                        style={{ marginLeft: '8px' }}
                    >
                        Dashboard
                    </NavbarButton>
                )}

                {!contact && session.token && (
                    <NavbarButton
                        aria-label="Sign out"
                        to="/"
                        onClick={handleSignOutButtonClick}
                        style={{ marginLeft: '8px' }}
                    >
                        Sign out
                    </NavbarButton>
                )}
            </Container>
        </NavbarContainer>
    )
}
