import 'normalize.css'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import montserratRegular from './assets/fonts/montserrat-regular-webfont.woff'
import montserratRegular2 from './assets/fonts/montserrat-regular-webfont.woff2'
import montserratSemibold from './assets/fonts/montserrat-semibold-webfont.woff'
import montserratSemibold2 from './assets/fonts/montserrat-semibold-webfont.woff2'

import { Loader } from './components/common'
import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import {ITheme, THEMES} from './constants/themes'
import {ISession, ISessionReducer} from "./redux/slices/session";
import {IThemeReducer, IThemes} from "./redux/slices/themes";

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
    background-color: ${({ theme }: { theme: ITheme}) => theme.background};
    transition: background 0.2s;
  }
  a, a:visited {
    color: ${({ theme }) => theme.colorPrimary};
  }
`

const ProtectedRoute = ({ component: Component, session, exact, path, ...rest }: {
    component: any
    session: ISession
    exact: boolean
    path: string
}) => {
    return (
        <Route exact={exact} path={path} {...rest} render={
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
    const { theme, session } = useSelector(({ theme, session }: { theme: IThemeReducer, session: ISessionReducer}) => (
        { theme, session })
    )

    // @ts-ignore
    const selectedTheme = THEMES[theme]

    return (
        <ErrorBoundary>
            <ThemeProvider theme={selectedTheme}>
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
                                            <ProtectedRoute exact path='/dashboard' session={session.session} component={Dashboard} />
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
