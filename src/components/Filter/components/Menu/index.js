import React, {useRef, useState, useEffect} from 'react'
import Locate from '../Locate'

import './index.scss'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const DEFAULT_INPUT_TEXT = 'All Suppliers'



const Menu = (props) => {

   

    const inputRef = useRef(null);
    // show supplier options or not
    const [showSupplier, setShowSupplier] = useState(false);

    // selected Supplier
    const [selectedSupplier, setSelectedSupplier] = useState('All Suppliers');

    const handleselectsupplier = (supplier) => {
        setSelectedSupplier(supplier);
        setShowSupplier(false);
    }

    const onMenuBodyClick = (e) => {
        if (e.target === inputRef.current ) 
            return;
        setShowSupplier(false);
    }


    useEffect(() => {
        document.addEventListener('click', onMenuBodyClick, false);
        return() => {
            document.removeEventListener('click', onMenuBodyClick, false);
        }
    }, [showSupplier])


    return (<React.Fragment>
                <div className='inputBox'>
                    <input readOnly
                        className='FilterInput'
                        value={selectedSupplier}
                        onClick={
                            () => {
                                setShowSupplier(true)
                            }
                        }
                        ref={inputRef}
                        />
                     
                    
                    {
                        showSupplier ?    
                        <Locate FilterRef={inputRef}> {
                            React.Children.map(props.children, child => (React.cloneElement(child, {
                                        handleselectsupplier
                                    })
                                )
                            )
                        } 
                        </Locate> 
                        :  null
                     } 
           
         </div>
         <button 
            className='resetButton'
            onClick={() => {
                setSelectedSupplier(DEFAULT_INPUT_TEXT)
                props.resetFilter()
            }}>Reset Filter</button>
        </React.Fragment>
    )
    }
    
    export default Menu;
