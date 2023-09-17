import './index.css'

import Header from '../Header'

const NotFound = () =>(
    <div className='not-found-container'>
        <Header/>
        <div className='not-found-content-container'>
        <h1 className='notfound-heading'>Sorry, we cannot find the page</h1>
        </div>
    </div>
)

export default NotFound