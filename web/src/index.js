import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'

import { BACKEND_URL } from './constants'
import { ErrorBoundary } from './components/error'
import { Home, Maintenance } from './screens'

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
});

const Router = () => {
  if (process.env.REACT_APP_MAINTENANCE_MODE === "yes") {
    return <Maintenance />
  }

  return (
    <ErrorBoundary>
      <Helmet
        titleTemplate="%s | Jason Van Malder"
      >
        <title>Home</title>
        <meta name="description" content="A software engineer personal website/lab" />
        <meta charset="utf-8" />
        <link rel="canonical" href="https://jvnm.dev" />
      </Helmet>
      <ApolloProvider client={client}>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Montserrat',
              weights: [400, 600]
            }
          ]}
        />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

render(<Router />, document.getElementById('root'))
serviceWorker.register()
