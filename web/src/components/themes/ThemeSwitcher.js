import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import { setTheme } from '../../redux/slices/themes'

const ThemeSwitcherButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 18px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.background };
  color: ${({ theme }) => theme.title?.default };
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.themeSwitcherShadow };
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
  const theme = useSelector(({ theme }) => theme)

  const toggleTheme = () => {
      dispatch(setTheme(
        theme === 'THEME_LIGHT'
          ? 'THEME_DARK'
          : 'THEME_LIGHT'
      ))
  }

  return (
    <ThemeSwitcherButton onClick={toggleTheme}>
      {
        theme.mode === 'THEME_LIGHT'
          ? <FontAwesomeIcon icon={faMoon} />
          : <FontAwesomeIcon icon={faSun} />
      }
    </ThemeSwitcherButton>
  )
}
