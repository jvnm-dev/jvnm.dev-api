import React, { MouseEvent, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NavbarButton, NavbarContainer, NavbarLogo } from './'
import { ISessionReducer, setToken } from '../../../redux/slices/session'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { NavbarButtons } from './NavbarButton'

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
    padding: 0;
    height: 80px;
`

export const Navbar = ({ contact, dashboard, signin }: INavbarProps) => {
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
        // history.push('/')
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

        const firstPart = 'To'
        const secondPart = 'Do'

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
                    <NavbarLogo to="/">{getLogo()}</NavbarLogo>

                    <NavbarButtons>
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
                            <NavbarButton aria-label="Sign in" to="/signin">
                                Sign in
                            </NavbarButton>
                        )}

                        {shouldShowSignIn && session.token && !dashboard && (
                            <NavbarButton
                                aria-label="dashboard"
                                to="/dashboard"
                            >
                                Dashboard
                            </NavbarButton>
                        )}

                        {!contact && session.token && (
                            <NavbarButton
                                aria-label="Sign out"
                                to="/"
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
