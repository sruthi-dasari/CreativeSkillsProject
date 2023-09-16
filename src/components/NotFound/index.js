import './index.css'

import Header from '../Header'

const NotFound = () =>(
    <div className='not-found-container'>
        <Header/>
        <p className='notfound-text'>Sorry, we cannot find the page</p>
    </div>
)

export default NotFound