
import * as constants  from './constants'
import axios from 'axios'

const localhost = 'http://localhost:3000/api/fakeData.json'
const api = 'https://chefhero.free.beeceptor.com'

const loadTableData = (result) => ({type:constants.GET_TABLE_DATA, payload:result})

export const getTableData = () => {
    return (dispatch) => {
        axios.get(localhost)
        .then((res) => {
            //dispatch(res)
            dispatch(loadTableData(res.data))
        })
        .catch( (err) => {
            console.log(err)
        })
    }
}