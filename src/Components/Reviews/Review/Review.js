import React from 'react';
import ReviewData from '../ReviewData/ReviewData';
import ReviewHeading from '../ReviewHeading/ReviewHeading';
import ShowReviewData from '../ShowReviewData/ShowReviewData';


const Review = () => {
    return (
        <section style={{ background: '#0A0B1A', padding: '80px 0'}}>
            <ReviewHeading />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        ReviewData.map((review, index) => <ShowReviewData key={index++} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;