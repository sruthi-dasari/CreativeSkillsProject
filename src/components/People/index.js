import './index.css'

import Header from '../Header'

import Footer from '../Footer'

const People = () =>(
    <>
    <div className='people-container'>
        <div className='people-main-container'>
            <Header/>
            <h1 className='people-main-heading'>people</h1>
            <div className='people-heading-para-container'>
            <h1 className='people-heading'>WE'RE A BLEND OF LEFT AND RIGHT BRAIN PEOPLE</h1>
            <p className='people-para'>
                We blend celebral thought and creativity, strategy and ideas, expertise and curiosity. It is one of the reasons that brilliant people 
                love working here. And reflecting the diversity of the world in which we live and work is key to our essence and our success.
            </p>
            </div>
            <br/>
            <div className='founder-coo-container'>
                <img className = "founder-coo-img" src = "https://res.cloudinary.com/my-cloud123/image/upload/v1694769133/Creative%20skills/Gabriella-Scardaccione-1367x2048_1_gqaunn.png" alt = "founder-img"/>
                <div className='founder-details-container'>
                    <h1 className='people-heading'>REBECCA RIDGE</h1>
                    <h1 className='people-heading'>FOUNDER</h1>
                    <p className='people-para founder-para'>
                        R was founded in 2007 by Rebecca.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
                    </p>
                    <p className='founder-coo-contact'>CONTACT REBECCA</p>
                </div>
            </div>
            <br/>
            <div className='founder-coo-container'>
                <div className='founder-details-container'>
                    <h1 className='people-heading'>LAURA JONES</h1>
                    <h1 className='people-heading'>COO</h1>
                    <p className='people-para founder-para'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
                    </p>
                    <p className='founder-coo-contact'>CONTACT LAURA</p>
                </div>
                <img className = "founder-coo-img" src = "https://res.cloudinary.com/my-cloud123/image/upload/v1694769128/Creative%20skills/Amy-Moughton_4-768x1158_1_cyqwgs.png" alt = "coo-img"/>
            </div>
            <br/>
            <h1 className='people-heading'>ARE YOU AN AMBITIOUS PIONEER?</h1>
            <p className='people-para'>
                We are interested in and invested in talented individuals; those who think creatively, have a stretegic mindset and want to deliver award
                winning, ground breaking results. We empower our people to do their best work in an open environment
                where they are free to express themselves fully.
            </p>
            <h1 className='people-heading'>
                DO YOU WANT TO PUSH BEYOND THE NOW? JOIN US
            </h1>
            <br/>
            <form className='people-form'>
                <div className='form-field-container'>
                    <label for = "name" className='form-title'>NAME</label>
                    <input type = "text" id = "name" className='form-input-box'/>
                </div>
                <div className='form-field-container'>
                    <label for = "name"className='form-title'>SURNAME</label>
                    <input type = "text" id = "name" className='form-input-box'/>
                </div>
                <div className='form-field-container'>
                    <label for = "name"className='form-title'>UPLOAD CV</label>
                    <input type = "text" id = "name" className='form-input-box'/>
                </div>
                <div className='form-field-container'>
                    <label for = "name"className='form-title'>EMAIL</label>
                    <input type = "text" id = "name" className='form-input-box'/>
                </div>
                <button type = "submit" className='submit-button'>SUBMIT</button>
            </form>
            <br/><br/>
            <img className='people-last-image' src = "https://res.cloudinary.com/my-cloud123/image/upload/v1694768951/Creative%20skills/1_1_bgaz5a.png" alt = "people last img"/>
        </div>
       
    </div>
     <Footer/>
     </>
)

export default People