import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'normalize.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import { HomeScreen } from './screens/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Router />, document.getElementById('root'))
serviceWorker.unregister()
