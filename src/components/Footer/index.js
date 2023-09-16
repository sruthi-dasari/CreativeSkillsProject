import './index.css'

import '../Footer'

import { CgShapeTriangle } from 'react-icons/cg'


const Footer = () => (
    <div className='footer-container'>
        <div className='logo-container'>
            <CgShapeTriangle className='footer-logo-image' />
        </div>
        <div className='footer-sections-container'>
            <div className='footer-section-container'>
                <h1 className='footer-section-heading'>WHERE WE ARE</h1>
                <p className='footer-section-para'>Floor 3, 129 Oxford Street London W1D 2HZ</p>
            </div>
            <div className='footer-section-container'>
                <h1 className='footer-section-heading'>FOLLOW US</h1>
                <p className='footer-section-para'>On Instagram On Twitter On LinkedIn</p>
            </div>
            <div className='footer-section-container'>
                <h1 className='footer-section-heading'>EMAIL US</h1>
                <p className='footer-section-para'>hello@creativeskills.com</p>
            </div>
            <div className='footer-section-container'>
                <h1 className='footer-section-heading'>SIGN UP</h1>
                <p className='footer-section-para'>Sign up for news and updates</p>
            </div>
        </div>
    </div>
)

export default Footer