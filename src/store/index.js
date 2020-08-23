import {
    createStore,
    applyMiddleware
} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';


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