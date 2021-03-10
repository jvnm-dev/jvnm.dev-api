import 'normalize.css'
import React, { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    Redirect,
    HashRouter,
    RouteProps,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import montserratRegular from './assets/fonts/montserrat-regular-webfont.woff'
import montserratRegular2 from './assets/fonts/montserrat-regular-webfont.woff2'
import montserratSemibold from './assets/fonts/montserrat-semibold-webfont.woff'
import montserratSemibold2 from './assets/fonts/montserrat-semibold-webfont.woff2'

import { Loader } from './components/common'
import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import { ITheme, THEMES } from './constants/themes'
import { ISession, ISessionReducer } from './redux/slices/session'
import { IThemeReducer, IThemes } from './redux/slices/themes'
import { Tools } from './screens/Tools.tsx'

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
    background-color: ${({ theme }: { theme: ITheme }) => theme.background};
    transition: background 0.2s;
  }
  a, a:visited {
    color: ${({ theme }) => theme.colorPrimary};
  }
`

const NotAuthenticated = (): JSX.Element => {
    return <Redirect to="/" />
}

const AuthenticatedRoute = ({
    session,
    component,
    ...options
}: RouteProps & { session: ISession }): JSX.Element => (
    <Route
        {...options}
        component={session?.token ? component : NotAuthenticated}
    />
)

export const Router = () => {
    const {
        theme,
        session,
    } = useSelector(
        ({
            theme,
            session,
        }: {
            theme: IThemeReducer
            session: ISessionReducer
        }) => ({ theme, session })
    )

    // @ts-ignore
    const selectedTheme = THEMES[theme]
    const maintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE

    return (
        <ErrorBoundary>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyle />
                {maintenanceMode === 'yes' ? (
                    <Suspense fallback={<Loader full />}>
                        <Maintenance />
                    </Suspense>
                ) : (
                    <>
                        <HashRouter>
                            <Suspense fallback={<Loader full />}>
                                <Switch>
                                    <Route
                                        exact
                                        path="/signin"
                                        component={SignIn}
                                    />
                                    <Route
                                        exact
                                        path="/tools"
                                        component={Tools}
                                    ></Route>
                                    <AuthenticatedRoute
                                        exact
                                        path="/dashboard"
                                        session={session}
                                        component={Dashboard}
                                    />
                                    <Route component={Home} />{' '}
                                    {/* fallback for all others routes */}
                                </Switch>
                            </Suspense>
                        </HashRouter>
                    </>
                )}
                <ThemeSwitcher />
            </ThemeProvider>
        </ErrorBoundary>
    )
}
