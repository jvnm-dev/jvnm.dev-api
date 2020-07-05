import React from 'react'
import ApolloClient from 'apollo-boost'
import GoogleFontLoader from 'react-google-font-loader'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/store'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'

import * as serviceWorker from './serviceWorker'
import { BACKEND_URL } from './constants'
import { Router } from './Router'
import { persistor } from './redux/store'
import { Loader } from './components/common/Loader'

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Helmet
            titleTemplate="%s | Jason Van Malder"
          >
            <title>Home</title>
            <meta name="description" content="A software engineer personal website/lab" />
            <meta charset="utf-8" />
            <link rel="canonical" href="https://jvnm.dev" />
          </Helmet>
          <GoogleFontLoader
            fonts={[
              {
                font: 'Montserrat',
                weights: [400, 600]
              }
            ]}
          />
          <Router />
        </PersistGate>
      </ReduxProvider>
    </ApolloProvider>
  )
}

render(<App />, document.getElementById('root'))
serviceWorker.register()
