import 'normalize.css'
import React, { Suspense, lazy } from 'react'
import {
    Switch,
    Route,
    Redirect,
    HashRouter,
    RouteProps,
} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { Loader } from './components/common'
import { ErrorBoundary } from './components/error'
import { ThemeSwitcher } from './components/themes'
import {ITheme, IThemeContainer, THEMES} from './constants/themes'
import {ISession, ISessionReducer, setToken} from './redux/slices/session'
import { IThemeReducer } from './redux/slices/themes'
import JourneyScreen from './screens/Journey'

const Home = lazy(() => import('./screens/Home'))
const Maintenance = lazy(() => import('./screens/Maintenance'))
const SignIn = lazy(() => import('./screens/SignIn'))
const Dashboard = lazy(() => import('./screens/Dashboard'))
const NotFound = lazy(() => import('./screens/NotFound'))

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
  }
  
  @font-face {
      font-family: 'Roboto';
      src: url('/fonts/Roboto-Medium.ttf') format('truetype');
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
    font-family: 'Roboto';
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

    return <Redirect to='/' />
}

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
                    <Suspense fallback={<Loader full />}>
                        <HashRouter>
                            <Suspense fallback={<Loader full />}>
                                <Switch>
                                    <Route
                                      exact
                                      path="/journey/:id"
                                      component={JourneyScreen}
                                    />
                                    <Route
                                        exact
                                        path="/signin"
                                        component={SignIn}
                                    />
                                    <AuthenticatedRoute
                                        exact
                                        path="/dashboard"
                                        session={session}
                                        component={Dashboard}
                                    />
                                    <Route
                                        exact
                                        path="/authenticate/:token"
                                        component={Authenticator}
                                    />
                                    <Route
                                      exact
                                      path="/"
                                      component={Home}
                                    />
                                    <Route
                                      component={NotFound}
                                    />
                                    {/* fallback for all others routes */}
                                </Switch>
                            </Suspense>
                        </HashRouter>
                    </Suspense>
                )}
                <ThemeSwitcher />
            </ThemeProvider>
        </ErrorBoundary>
    )
}
