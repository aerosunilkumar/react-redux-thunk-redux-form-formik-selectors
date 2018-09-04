import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
let initialState={};
let middleware=[thunk];

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);