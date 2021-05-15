import React from 'react';
import './ShowReviewData.css';


const ShowReviewData = ({ review }) => {
    const { img, flag, name, address, description } = review;

    return (
        <>
            <div className="col mb-3">
                <div className="review-card-radius">
                    <div className="card-bg review-card text-white p-4">
                        <div className="d-flex">
                            <div className="left">
                                <img src={img} alt="" />
                            </div>
                            <div className="ms-4">
                                <h6>{name}</h6>
                                <img src={flag} alt="" />
                                <p className='nunito-font d-inline-block ms-2'>{address}</p>
                            </div>
                        </div>
                        <div className="body">
                            <small className='nunito-font'>{description}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowReviewData;