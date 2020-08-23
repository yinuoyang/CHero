import React, {  useEffect} from 'react'
import ReactDOM from 'react-dom';
import './index.scss'


const Locate = (props) => {

    let menu = null;

    const { FilterRef, children } = props;
    
    if (!menu) {
        menu = document.createElement('div');
        menu.className = 'locatedPostion';
    }

    useEffect(() => {

         const locateDOMPostion = () => {
            const { top, left, height } = FilterRef.current.getBoundingClientRect();
            
            const style = {
                //Locate the absolute top postion for item
                top: document.documentElement.scrollTop + top + height + 'px',
                //Locate the absolute left item for the item
                left: document.documentElement.scrollLeft + left + 'px'
            }
    
            menu.style.top = style.top;
            menu.style.left = style.left;

        }

        locateDOMPostion();
        document.body.appendChild(menu);

    }, [FilterRef])

    return menu && ReactDOM.createPortal(children, menu);
}


export default Locate;
