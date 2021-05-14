import React from 'react';
import './ShowReviewData.css';


const ShowReviewData = ({ review }) => {
    const { img, name, address, description } = review;

    return (
        <>
            <div className="col">
                <div className="review-card-radius">
                    <div className="card-bg review-card text-white p-4">
                        <div className="d-flex">
                            <div className="left">
                                <img src={img} alt="" />
                            </div>
                            <div className="ms-4">
                                <h5>{name}</h5>
                                <p className='nunito-font'>{address}</p>
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