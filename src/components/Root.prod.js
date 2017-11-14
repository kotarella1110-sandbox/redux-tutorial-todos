import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import configureStore from '../store/configureStore'
import App from './App'

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:filter?" component={App} />
      </div>
    </Router>
  </Provider>
)

export default Root