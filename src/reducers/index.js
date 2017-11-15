import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import todos from './todos'

// Add the reducer to your store on the `router` key
const todoApp = combineReducers({
  todos,
  router
})

export default todoApp
