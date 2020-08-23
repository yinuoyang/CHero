import * as constants  from './constants'


export default(state, action) => {
    switch (action.type) {
        case constants.GET_TABLE_DATA:
            
            // create a copy of state and modify the data with payload return by dispatch
            return Object.assign({}, state, {
                data: action.payload.data,
                totalCount: action.payload.totalCount,
                limit: action.payload.limit,
                supplierData: action.supplierData
            })
            
        case constants.FILTER_DATA:

            // use the filter method to return a new array of filtered table data, return the copy of data
            const displayData = state.data.filter( (element) => {
                return element.vendorName === action.payload
            })

            return Object.assign({}, state, {
                showData:displayData
            })

        case constants.RESET_FILTER:

            //reset the showData by clear the showData array
            return Object.assign({}, state, {
                showData:[]
            })

        default:
                return state
        }
   
}
