import 'normalize.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Redirect } from 'react-router-dom'

import montserratRegular from './assets/fonts/Montserrat-Regular.ttf'
import montserratSemibold from './assets/fonts/Montserrat-SemiBold.ttf'
import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import { Home, Maintenance, SignIn, Dashboard } from './screens'
import { themes } from './constants'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: url(${montserratRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: url(${montserratSemibold}) format('truetype');
  }

  body {
    background-color: ${({ theme }) => theme.background};
    transition: background 0.2s;
  }

  a, a:visited {
    color: ${({ theme }) => theme.colorPrimary};
  }
`

const ProtectedRoute = ({ component: Component, session, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (session.token) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to='/signin' />
        }
      }
    } />
  )
}

export const Router = () => {
  const { theme, session } = useSelector(({ theme, session }) => ({ theme, session }))

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {
        process.env.REACT_APP_MAINTENANCE_MODE === 'yes'
          ? <Maintenance />
          : (
              <>
                <ErrorBoundary>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path='/signin' component={SignIn} />
                      <ProtectedRoute exact path='/dashboard' session={session} component={Dashboard} />
                      <Route component={Home} /> {/* fallback for all others routes */}
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


