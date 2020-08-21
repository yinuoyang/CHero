import React, { useEffect } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { actionCreator } from './store'


const Table = (props) => {

    useEffect( () => {
        const { getTableData } = props;
        getTableData();
    }, []);
    
    useEffect( () => {
        
        const { data } = props;
        console.log(data)
    }, [props.data]);
 
   
    return(
        <div className='TableSection'>
            <table className='Table'>
            <thead className='TableHead'>
                <tr className='HeaderRow'>
                    <th>STATUS</th>
                    <th>DELIVERY DAY</th>
                    <th>SUPPLIER</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
             {
                 props.data && props.data.map((data, key) => {
                     return (
                        <tr>
                        <td>{data.orderBuyerStatus}</td>
                        <td>{data.deliveryDay}</td>
                        <td>{data.vendorName}</td>
                        <td>$ {data.grandTotal}</td>
                        </tr>
                     )
                 })
             }   
                
            </tbody>
            </table>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTableData: () => {
            const action = actionCreator.getTableData();
            dispatch(action)
        }
    }
}


const mapStateToProps = (state) => {
    return ({
        data: state.table.data,
        totalCount: state.table.totalCount,
        limit: state.table.limit,
        offset: state.table.offset,
        showData: state.table.showData
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);