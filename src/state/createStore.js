import {combineReducers, createStore as reduxCreateStore, applyMiddleware, bindActionCreators} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'

export const initState = {locale: 'ru'}

const appReducer = combineReducers({
  ...reducers,
})

const initialState = {
  locale: 'ru',
  locales: ['ru', 'en'],
}

const createStore = () => reduxCreateStore(
  appReducer,
  initialState,
  applyMiddleware(thunk)
)
export default createStore
