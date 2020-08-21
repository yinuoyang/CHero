
import { combineReducers } from 'redux'
import { reducer as TableReducer } from '../components/Table/store'
import { reducer as FilterReducer } from '../components/Filter/store'

const reducers = combineReducers(
    {
        table: TableReducer
    }
)


export default reducers;