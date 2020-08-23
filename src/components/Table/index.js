import React, { useEffect,useState } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actionCreator'


const Table = (props) => {

    useEffect( () => {
        const { getTableData } = props;
        getTableData();
    }, []);
    
    const [filtered, setFilter] = useState(false);
    const { data, showData } = props;

    useEffect ( () => {
        if(showData.length > 0) {
            setFilter(true);
        } else {
            setFilter(false);
        }
    }, [showData])
   
   


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
             { filtered ?
                 (showData.map ((data, key) => {
                     console.log(data)
                     return (
                        <tr key={key}>
                            <td><label className={data.orderBuyerStatus === 'Paid'? 'paidLabel':'deliveredLabel'}>{data.orderBuyerStatus.toUpperCase()}</label></td>
                            <td>{data.deliveryDay}</td>
                            <td>
                                {data.vendorName}
                                {
                                    data.isPendingVendorOnboarding?
                                    <label className='firstLabel'>1st</label>
                                    : null
                                }

{
                                    data.isPendingVendorOnboarding?
                                    <label className='firstLabel'>1st</label> :
                                    null
                                
                                }
                            </td>
                            { !data.grandTotal > 0 ? <td></td> :
                                <td > $ {data.grandTotal}</td>
                            }
                        </tr>
                     )
                 }))
                 :
                 (data.map((data, key) => {
                     return (
                        <tr key={key}>
                            <td><label className={data.orderBuyerStatus === 'Paid'? 'paidLabel':'deliveredLabel'}>{data.orderBuyerStatus.toUpperCase()}</label></td>
                            <td>{data.deliveryDay}</td>
                            <td>
                                {data.vendorName}
                                
                                {
                                    data.isBYOS?
                                    <label className='marketLabel'>MARKET</label>
                                    : null
                                }
                                {
                                    data.isPendingVendorOnboarding?
                                    <label className='firstLabel'>1st</label> :
                                    null
                                
                                }
                            </td>
                            { !data.grandTotal > 0 ? <td></td> :
                                <td > $ {data.grandTotal}</td>
                            }
                        </tr>
                     )
                 }))
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
            console.log('getTableData')
            dispatch(action)
        }
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return ({
        data: state.data,
        totalCount: state.totalCount,
        limit: state.limit,
        offset: state.offset,
        showData: state.showData
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);