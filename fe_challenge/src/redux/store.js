import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {jobsReducer} from './reducers/jobsReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const reducers = combineReducers({
    jobsData: jobsReducer,
})

const store = createStore(
    reducers,
    composedEnhancer // https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware
);

export default store;