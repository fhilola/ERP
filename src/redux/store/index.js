import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReedcuer from '../reducers'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReedcuer, composeEnhancer(applyMiddleware(thunk)))

export {store}
