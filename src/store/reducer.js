import * as constants  from './constants'



export default(state, action) => {
    switch (action.type) {
        case constants.GET_TABLE_DATA:
            
            return Object.assign({}, state, {
                data: action.payload.data,
                totalCount: action.payload.totalCount,
                limit: action.payload.limit,
                supplierData: action.supplierData
            })
            
        case constants.FILTER_DATA:

            const displayData = state.data.filter( (element) => {
                return element.vendorName === action.payload
            })

            return Object.assign({}, state, {
                showData:displayData
            })
        case constants.RESET_FILTER:

            return Object.assign({}, state, {
                showData:[]
            })

        default:
                return state
        }
   
}
