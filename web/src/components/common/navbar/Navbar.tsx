import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import {
    NavbarContainer,
    NavbarMenu,
    NavbarMenuItem,
    NavbarLogo,
    NavbarButton
} from './'

import { Container } from '../'
import {ISession, setToken} from '../../../redux/slices/session'

interface INavbarProps {
    contact?: boolean,
    dashboard?: boolean
}

export const Navbar = ({ contact, dashboard }: INavbarProps) => {
    const history = useHistory()
    const session = useSelector(({ session }: ISession) => session)
    const dispatch = useDispatch()

    const handleContactButtonClick = (e) => {
        e.preventDefault()
        window.location.href = 'mailto:jasonvanmalder@gmail.com'
    }

    const handleSignOutButtonClick = (e) => {
        e.preventDefault()
        dispatch(setToken(undefined))
        history.push('/')
    }

    return (
        <NavbarContainer>
            <Container flex fullHeight>
                <NavbarLogo to='/'>
                    <span>J</span>
                    <span>V</span>
                    <span>M</span>
                </NavbarLogo>
                <NavbarMenu>
                    {/*
            <NavbarMenuItem>
              <Link to="/">About</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link to="/">Lab</Link>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Link to="/">Blog</Link>
            </NavbarMenuItem>
          */}
                    { dashboard && (
                        <NavbarMenuItem>
                            <Link to="/dashboard/">Landing Data</Link>
                        </NavbarMenuItem>
                    )}
                </NavbarMenu>
                { contact && (
                    <NavbarButton aria-label='Contact' to="/" onClick={handleContactButtonClick}>
                        Contact
                    </NavbarButton>
                )}
                { !contact && session.token && (
                    <NavbarButton aria-label='Sign out' to="/" onClick={handleSignOutButtonClick}>
                        Sign out
                    </NavbarButton>
                )}
            </Container>
        </NavbarContainer>
    )
}