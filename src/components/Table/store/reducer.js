import * as constants  from './constants'

const defaultState = {
    data: [],
    totalCount: 0,
    limit: 0,
    offset:0
}

export default(state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_TABLE_DATA:
            
            return Object.assign({}, state, {
                data: action.payload.data,
                totalCount: action.payload.totalCount,
                limit: action.payload.limit
            })
            
            default:
                return state
        }

       
    
}
