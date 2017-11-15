import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import configureStore, { history } from '../store/configureStore'
import App from './App'
// Don't do this! You’re bringing DevTools into the production bundle.
import DevTools from '../containers/DevTools';

const store = configureStore();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/:filter?" component={App} />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default Root