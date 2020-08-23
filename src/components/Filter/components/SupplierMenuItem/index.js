import React, {useState, useEffect} from 'react'
import './index.scss'


const SupplierMenuItem = (props) => {

    const [ supplierSelected, setSelectedSupplier ] = useState(false);
    const { supplier , handleselectsupplier, filter } = props;

    useEffect(() => {
        setSelectedSupplier(true);
    }, [])

    return (
        <div 
            onClick={() => {
                handleselectsupplier(supplier);
                filter(supplier);
            }} 
            className={`${supplierSelected ? 'LabelSelected': ''}`}>
                <div className='WrapItem'>
                    {supplier}
                </div>
            </div>
    )
}


export default SupplierMenuItem;
