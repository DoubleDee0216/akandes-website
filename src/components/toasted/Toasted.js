import React from 'react';
import './toasted.css';

const Toasted = () => {
    return (
        <div className="toasted">
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-8 toasted__head ">
                        <h2>Wedding Toast</h2>
                        <p>Cheers to a happy home filled with God's unending joy,love and greatness....</p>
                    </div>
                </div>

                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-5 col-xl-5 toasted__img'>
                        <img src='/images/bride.jpg' alt='bride image' className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-xl-4 toasted__text'>
                        <p>We laugh and laugh, and nothing can ever be sad, no one can be lost, dead or far away. Right now we are here, and nothing can mar our perfection or steal the joy of this perfect moment.</p>
                    </div>
                </div>

                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6 col-xl-4 order-2 order-md-1 toasted__text'>
                        <p>They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for. I find myself lucky to have a partner that brings all form of happinness to me.</p>
                    </div>
                    <div className='col-md-5 col-xl-5 order-1 order-md-2 toasted__img'>
                        <img src='/images/groom.jpg' alt='groom image' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toasted;