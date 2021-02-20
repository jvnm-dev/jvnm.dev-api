import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store } from './redux/store'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'

import { BACKEND_URL } from './constants'
import { Router } from './Router'
import { persistor } from './redux/store'
import { Loader } from './components/common'

const client = new ApolloClient({
    uri: `${BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
})

const App = (): JSX.Element => {
    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <PersistGate loading={<Loader />} persistor={persistor}>
                    <Helmet
                        titleTemplate="%s | Jason Van Malder"
                    >
                        <title>Home</title>
                        <meta name="description" content="A software engineer personal website/lab" />
                        <meta charSet="utf-8" />
                        <link rel="canonical" href="https://jvnm.dev" />
                    </Helmet>
                    <Router />
                </PersistGate>
            </ReduxProvider>
        </ApolloProvider>
    )
}

render(<App />, document.getElementById('root'))