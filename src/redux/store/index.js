import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(/*reducer*/ applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

export {store}
