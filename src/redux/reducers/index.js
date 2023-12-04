import { combineReducers } from 'redux'
import { authreducer } from './auth-reducer'

const rootReedcuer = combineReducers({
    auth:  authreducer,
})

export default rootReedcuer