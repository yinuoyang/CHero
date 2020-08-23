
import * as constants  from './constants'
import axios from 'axios'

const localhost = 'http://localhost:3000/api/fakeData.json'
const api = 'https://chefhero.free.beeceptor.com'

const loadTableData = (tableData, supplierData) => ({type:constants.GET_TABLE_DATA, payload:tableData, supplierData: supplierData})

export const getTableData = () => {
    return (dispatch) => {
        axios.get(localhost)
        .then((res) => {
            const suppliers = ['All Suppliers']
            res.data.data.forEach( (element) => {
                if(!suppliers.includes(element.vendorName)){
                    suppliers.push(element.vendorName)
                }
            })
            dispatch(loadTableData(res.data, suppliers))
        })
        .catch( (err) => {
            console.log(err)
        })
    }
}

const filteredTableData = (filterSupplierName) => ({type:constants.FILTER_DATA, payload:filterSupplierName})

export const filterSupplier = ( filterSupplierName ) => {
    return (dispatch) => {
        dispatch(filteredTableData(filterSupplierName))
    }
}


const resetTableData = () => ({type:constants.RESET_FILTER})

export const resetFilter = (  ) => {
    return (dispatch) => {
        dispatch(resetTableData())
    }
}



