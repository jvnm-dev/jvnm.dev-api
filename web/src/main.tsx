import React, { useEffect, useState } from 'react'
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    GraphQLRequest,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store } from './redux/store'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'
import { StylesProvider } from '@material-ui/core/styles'

import { BACKEND_URL } from './constants'
import { Router } from './Router'
import { persistor } from './redux/store'
import { Loader } from './components/common'
import { ISessionReducer } from './redux/slices/session'

const defaultApolloClient = new ApolloClient({
    uri: `${BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
})

const App = (): JSX.Element => {
    const [client, setClient] = useState(defaultApolloClient)
    const session = useSelector(({ session }: ISessionReducer) => session)

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

    return (
        <StylesProvider injectFirst>
            <ApolloProvider client={client}>
                <PersistGate loading={<Loader />} persistor={persistor}>
                    <Helmet titleTemplate="%s | Jason Van Malder">
                        <title>Home</title>
                        <meta
                            name="description"
                            content="A software engineer personal website/lab"
                        />
                        <meta charSet="utf-8" />
                        <link rel="canonical" href="https://jvnm.dev" />
                    </Helmet>
                    <Router />
                </PersistGate>
            </ApolloProvider>
        </StylesProvider>
    )
}

render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById('root')
)
