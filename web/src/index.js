import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import ApolloClient from 'apollo-boost';

import { BACKEND_URL } from './constants'
import { ApolloProvider } from '@apollo/react-hooks';
import { HomeScreen } from './screens/Home'

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
});

const Router = () => {
  return (
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
          <Route exact path='/' component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))
serviceWorker.unregister()
