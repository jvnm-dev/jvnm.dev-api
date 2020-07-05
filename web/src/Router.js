import React from 'react'
import 'normalize.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import { Home, Maintenance } from './screens'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    transition: 0.2s;
  }
`;

export const Router = () => {
  const theme = useSelector(({ theme }) => theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {
        process.env.REACT_APP_MAINTENANCE_MODE === 'yes'
          ? <Maintenance />
          : (
              <>
                <ErrorBoundary>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path='/' component={Home} />
                    </Switch>
                  </BrowserRouter>
                </ErrorBoundary>
              </>
            )
      }
      <ThemeSwitcher />
    </ThemeProvider>
  )
}


