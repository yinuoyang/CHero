import React from 'react'
import './index.scss'
import bgImage from '../../static/image/chefhero_logo_white.png'

const Header = () => {
    /*use function component to render Header because it does not have state*/
    return(
        <div className='Header'>
            <img className='LogoImage' src={bgImage}></img>
        </div>
    )
}

export default Header;