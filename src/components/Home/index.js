import './index.css'

import Header from '../Header'

import Footer from '../Footer'

const Home = () => {

    return (
        <div className='home-container'>
            <div className='classpass-container'>
                <Header />
                <h1 className='classpass-heading'>classpass</h1>
            </div>
            <div className='main-container'>

                <h1 className='sub-heading'>CLASSPASS</h1>
                <p className='para center-aligned-para'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                    fringilla vel, aliquet nec, vulputate
                </p>
                <br />
                <h1 className='sub-heading'>WE WORKED TOGETHER ON</h1>
                <p className='para'>A campaign to text to go here</p>
                <br />
                <img className="worked-together-img" src="https://res.cloudinary.com/my-cloud123/image/upload/v1694769139/Creative%20skills/ClassPass_Press_Image17_1_ugulrx.png" alt="worked-together-img" />
                <br />
                <h1 className='sub-heading'>THE CHALLENGE</h1>
                <p className='para challenge-para'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                </p>
                <p className='para challenge-para'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                </p>
                <div className='challenge-image-container'>
                    <img className="challenge-image" src="https://res.cloudinary.com/my-cloud123/image/upload/v1694777141/Creative%20skills/ClassPass_Press_Image32_1_hpayeh.png" alt="image1" />
                    <img className="challenge-image" src="https://res.cloudinary.com/my-cloud123/image/upload/v1694769137/Creative%20skills/ClassPass_Press_Image46_1_kyn29d.png" alt="image2" />
                </div>
                <br />
                <h1 className='sub-heading'>THE RESULTS</h1>
                <div className='results-container'>
                    <div className='result-detail-container'>
                        <h1 className='result-detail-heading'>347</h1>
                        <p className='result-detail-para'>pieces of coverage</p>
                    </div>
                    <div className='result-detail-container'>
                        <h1 className='result-detail-heading'>2bn</h1>
                        <p className='result-detail-para'>pieces of coverage</p>
                    </div>
                    <div className='result-detail-container'>
                        <h1 className='result-detail-heading'>2.2bn</h1>
                        <p className='result-detail-para'>pieces of coverage</p>
                    </div>
                </div>
                <img className="result-image" src="https://res.cloudinary.com/my-cloud123/image/upload/v1694769143/Creative%20skills/ClassPass_Press_Image48_1_qhfogu.png" alt="results-img" />
                <br />
                <p className='para center-aligned-para'>"R just knocked it out of the park. They conceptualised brilliant campaigns
                    that took us to the next level, engaging new audiences and driving our business strategy forward."</p>

                <h2 className='name-title-company-heading'>NAME</h2>
                <h2 className='name-title-company-heading'>TITLE AND COMPANY NAME</h2>


            </div>
            <Footer/>
        </div>
    )
}

export default Home