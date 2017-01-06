import { combineReducers } from 'redux'
import locationReducer from './location'
import user from './modules/user'
import report from './modules/report'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    user,
    report,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
