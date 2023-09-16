import './index.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { CgShapeTriangle } from 'react-icons/cg'

import { Link } from 'react-router-dom'

import Popup from 'reactjs-popup'

const Header = () => (
    <div className='header-container'>
        
            <button type="button" className='logo-button'>
                <CgShapeTriangle className='logo-image' />
            </button>
            <Popup
                modal
                trigger={
                    <button type="button" className='menu-button'>
                        <AiOutlineMenu className="menu-icon" />
                    </button>
                }
                className='popup-content'
            >
                {close => (
                    <div className='modal-container'>
                        <button
                            type="button"
                            className="close-button"
                            onClick={() => close()}
                        >
                            <AiOutlineClose className='close-icon' />
                        </button>
                        <ul className='nav-links-container'>
                            <li className='nav-link-item'><Link className="nav-link" to="/" onClick={() => close()}><p className='nav-link-content'>Home</p></Link></li>
                            <li className='nav-link-item'><Link className="nav-link" to="/about" onClick={() => close()}><p className='nav-link-content'>About</p></Link></li>
                            <li className='nav-link-item'><Link className="nav-link" to="/people" onClick={() => close()}><p className='nav-link-content'>People</p></Link></li>
                        </ul>

                    </div>
                )}
            </Popup>

       
    </div>
)

export default Header