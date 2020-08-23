import React from 'react'
import './index.scss'
import Menu from './components/Menu'
import SupplierMenuItem from './components/SupplierMenuItem'
import { connect } from 'react-redux'
import CaretDownOutlined from '@ant-design/icons'
import * as actionCreator from '../../store/actionCreator'

const Filter = (props) => {
    console.log(props)
    const { suppliers, filterSelectedSupplier, resetFilter } = props;
    
    return(
        <div className="FilterSection">
            <div className='FilterMenu'>
                <Menu resetFilter={resetFilter}>
                    {
                        suppliers && suppliers.map( (content, index) => {
                            return <SupplierMenuItem supplier={content} filter={ filterSelectedSupplier } key={index}/>
                        })
                    }
                
                </Menu>

                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        suppliers: state.supplierData,
        showData: state.showData
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        resetFilter: () => {
            const action = actionCreator.resetFilter();
            dispatch(action);
        },
        filterSelectedSupplier: ( name ) => {
            const action = actionCreator.filterSupplier(name);
            dispatch(action)
        }
    }) 
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);