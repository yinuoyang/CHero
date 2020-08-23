import {
    createStore,
    applyMiddleware
} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// set up default state to avoid null or undefined exception
// load react thunk to load asychronous function call

const defaultState = {
    data: [],
    totalCount: 0,
    limit: 0,
    offset:0,
    supplierData: [],
    showData: []
}

export default createStore(
    reducer, 
    defaultState,
    applyMiddleware(thunk)
);