import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { THEMES } from '../../constants'
import { IThemeReducer, setTheme } from '../../redux/slices/themes'
import { IThemeContainer } from '../../constants/themes'

const ThemeSwitcherButton = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 18px;
    font-size: 20px;
    background-color: ${({ theme }: IThemeContainer) => theme.background};
    color: ${({ theme }: IThemeContainer) => theme.title?.default};
    border: none;
    border-radius: 50%;
    box-shadow: ${({ theme }: IThemeContainer) => theme.themeSwitcherShadow};
    cursor: pointer;
    outline: 0 !important;
    transition: 0.2s;
    box-sizing: border-box;
    :hover {
        transform: scale(1.05);
    }
    :active {
        transform: scale(1);
    }
`

export const ThemeSwitcher = () => {
    const dispatch = useDispatch()
    const theme = useSelector(({ theme }: IThemeReducer) => theme)
    const nextTheme = Object.values(THEMES).find((t) => t.name !== theme)

    const toggleTheme = () => {
        dispatch(setTheme(nextTheme?.name))
    }

    return (
        <ThemeSwitcherButton aria-label="Switch Theme" onClick={toggleTheme}>
            {nextTheme && <FontAwesomeIcon icon={nextTheme.icon} />}
        </ThemeSwitcherButton>
    )
}
