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

import { HomeScreen } from './screens/Home'

const Router = () => {
  return (
    <>
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
    </>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))
serviceWorker.unregister()
