import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';


export default createStore(
    combineReducers(reducer), 
    {},
    applyMiddleware(thunk)
);