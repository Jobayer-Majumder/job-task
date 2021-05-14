import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';



const ReviewHeading = () => {
    return (
        <>
            <div className="container d-flex justify-content-between pt-5 mb-5">
                <h1 className='after-effect text-white'>Reviews</h1>
                <h6 className='mt-4 text-white nunito-font'>1/12 
                    <span className='fs-4 ms-4'><BsArrowLeft/> <BsArrowRight /></span>
                </h6>
            </div>
        </>
    );
};

export default ReviewHeading;