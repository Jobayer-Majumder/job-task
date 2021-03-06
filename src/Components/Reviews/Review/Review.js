import React, { useEffect, useState } from 'react';
import ReviewData from '../ReviewData/ReviewData';
import ReviewHeading from '../ReviewHeading/ReviewHeading';
import ShowReviewContent from '../ShowReviewContent/ShowReviewContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";



const Review = () => {
    const [isPhone, setIsPhone] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 750) {
            setIsPhone(true)
        } else {
            setIsPhone(false)
        }
      }
      
      useEffect(() => {
        window.addEventListener("resize", handleResize)
      });


    return (
        <section style={{ background: '#0A0B1A', padding: '80px 0'}}>
            <ReviewHeading />
            <div className="container">
            <Swiper
                    spaceBetween={15}
                    slidesPerView={isPhone ? 1 : 3}
                >
                    {
                        ReviewData.map((review, index) => <SwiperSlide key={index++} >
                            <ShowReviewContent review={review} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Review;