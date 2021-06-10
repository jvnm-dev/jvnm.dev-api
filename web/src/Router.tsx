import 'normalize.css'
import React, { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    Redirect,
    HashRouter,
    RouteProps,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Loader } from './components/common'
import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import { ITheme, IThemeContainer, THEMES } from './constants/themes'
import { ISession, setToken } from './redux/slices/session'

const Home = lazy(() => import('./screens/landing/Home'))
const Journey = lazy(() => import('./screens/landing/Journey'))

const Maintenance = lazy(() => import('./screens/common/Maintenance'))
const SignIn = lazy(() => import('./screens/common/SignIn'))
const NotFound = lazy(() => import('./screens/common/NotFound'))

const DashboardHpme = lazy(() => import('./screens/dashboard/DashboardHome'))

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: block;
    font-family: 'Ubuntu';
    font-weight: normal;
  }
  
  @font-face {
    font-display: block;
    font-family: 'Ubuntu';
    font-weight: bold;
  }

  html {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
  }
  
  body {
    background-color: ${({ theme }: { theme: ITheme }) => theme.background};
    transition: background 0.2s;
    font-family: sans-serif; // fix font stress on page loading
    font-family: 'Ubuntu';
  }
  
  a, a:visited {
    color: ${({ theme }: IThemeContainer) => theme.colorPrimary};
  }

  .stop-scrolling {
      height: 100%;
      overflow: hidden;
  }

  @-moz-document url-prefix() {
      body {
          font-weight: lighter !important;
      }
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

const Authenticator = (props: any) => {
    const dispatch = useDispatch()
    const search = props.location.pathname.split('/')
    const token = search?.[2]

    if (token) {
        dispatch(setToken(token))
    }

    return <Redirect to="/" />
}

export const Router = () => {
    const { theme, session } = useSelector(
        ({ theme, session }: { theme: string; session: ISession }) => ({
            theme,
            session,
        })
    )

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
                    <Suspense fallback={<Loader full />}>
                        <HashRouter>
                            <Switch>
                                <Route
                                    exact
                                    path="/journey/:id"
                                    component={Journey}
                                />
                                <Route
                                    exact
                                    path="/signin"
                                    component={SignIn}
                                />
                                <AuthenticatedRoute
                                    path="/dashboard"
                                    session={session}
                                    component={DashboardHpme}
                                />
                                <Route
                                    exact
                                    path="/authenticate/:token"
                                    component={Authenticator}
                                />
                                <Route exact path="/" component={Home} />
                                <Route component={NotFound} />
                                {/* fallback for all others routes */}
                            </Switch>
                        </HashRouter>
                    </Suspense>
                )}
                <ThemeSwitcher />
            </ThemeProvider>
        </ErrorBoundary>
    )
}
