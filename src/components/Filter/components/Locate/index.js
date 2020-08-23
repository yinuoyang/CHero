import React, {  useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.scss'


const Locate = (props) => {

    // Retrieve the reference of filter input and children from the parent object for further use.
    const { FilterRef, children } = props;
    
    // Create the holder for the menu object
    let menu = null;

    if (!menu) {
        menu = document.createElement('div');
        menu.className = 'locatedPostion';
    }

    const locateDOMPostion = () => {
        const { top, left, height } = FilterRef.current.getBoundingClientRect();
        
        const style = {
            //Locate the absolute top postion for item
            top: document.documentElement.scrollTop + top + height + 'px',
            //Locate the absolute left item for the item
            left: document.documentElement.scrollLeft + left + 'px'
        }
        //locate the position for the absolute menu
        menu.style.top = style.top;
        menu.style.left = style.left;

    }

    useEffect(() => {
        locateDOMPostion();
        document.body.appendChild(menu);

    }, [FilterRef])
    //use create portal to add the menu to the real DOM tree
    return menu && ReactDOM.createPortal(children, menu);
}


export default Locate;
