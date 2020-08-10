import 'normalize.css'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Redirect } from 'react-router-dom'

import montserratRegular from './assets/fonts/montserrat-regular-webfont.woff'
import montserratRegular2 from './assets/fonts/montserrat-regular-webfont.woff2'
import montserratSemibold from './assets/fonts/montserrat-semibold-webfont.woff'
import montserratSemibold2 from './assets/fonts/montserrat-semibold-webfont.woff2'

import { Loader } from './components/common'
import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import { THEMES } from './constants'

const Home = lazy(() => import('./screens/Home'))
const Maintenance = lazy(() => import('./screens/Maintenance'))
const SignIn = lazy(() => import('./screens/SignIn'))
const Dashboard = lazy(() => import('./screens/Dashboard'))

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular2}) format('woff2'),
        url(${montserratRegular}) format('woff');
    font-weight: normal;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url(${montserratSemibold2}) format('woff2'),
          url(${montserratSemibold}) format('woff');
      font-weight: bold;
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
    <ErrorBoundary>
      <ThemeProvider theme={THEMES[theme]}>
        <GlobalStyle />
        {
          process.env.REACT_APP_MAINTENANCE_MODE === 'yes'
            ? <Maintenance />
            : (
                <>
                    <BrowserRouter>
                      <Suspense fallback={<Loader full />}>
                        <Switch>
                          <Route exact path='/signin' component={SignIn} />
                          <ProtectedRoute exact path='/dashboard' session={session} component={Dashboard} />
                          <Route component={Home} /> {/* fallback for all others routes */}
                        </Switch>
                      </Suspense>
                    </BrowserRouter>
                </>
              )
        }
        <ThemeSwitcher />
      </ThemeProvider>
    </ErrorBoundary>
  )
}


