import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    GraphQLRequest,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ApolloProvider } from '@apollo/react-hooks'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import '../styles/globals.css'
import { store, persistor } from '../redux/store'
import { BACKEND_URL } from '../constants'
import { Loader } from '../components/common'
import { ISessionReducer, ISession, setToken } from '../redux/slices/session'
import { ErrorBoundary } from '../components/error'
import { ThemeSwitcher } from '../components/themes'
import { ITheme, IThemeContainer, THEMES } from '../constants/themes'

const defaultApolloClient = new ApolloClient({
    uri: `${BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
})

const App = ({ Component, pageProps }: AppProps) => {
    const [client, setClient] = useState(defaultApolloClient)
    const { theme, session } = useSelector(
        ({ theme, session }: { theme: string; session: ISession }) => ({
            theme,
            session,
        })
    )
    const selectedTheme = THEMES[theme]

    useEffect(() => {
        const WebFont = require('webfontloader')
        WebFont.load({
            google: {
                families: ['Ubuntu:200,400', 'sans-serif'],
            },
        })
    }, [])

    useEffect(() => {
        const httpLink = createHttpLink({
            uri: `${BACKEND_URL}/graphql`,
        })

        const authLink = setContext((_: GraphQLRequest, { headers }: any) => {
            const token = session.token
            return {
                headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : '',
                },
            }
        })

        const newClient = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache(),
        })

        setClient(newClient)
    }, [session])

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

    return (
        <ApolloProvider client={client}>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <ThemeProvider theme={selectedTheme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                    <ThemeSwitcher />
                </ThemeProvider>
            </PersistGate>
        </ApolloProvider>
    )
}

export const ProvidedApp = ({ Component, pageProps, router }: AppProps) => {
    return (
        <ReduxProvider store={store}>
            <StylesProvider injectFirst>
                <Head>
                    <title>Jason Van Malder</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                </Head>
                <App
                    Component={Component}
                    pageProps={pageProps}
                    router={router}
                />
            </StylesProvider>
        </ReduxProvider>
    )
}

export default ProvidedApp
