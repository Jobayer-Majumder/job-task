import React, { useState } from 'react';
import UpcomingShowsContent from '../ShowUpcomingShows/UpcomingShowsContent';
import ShowsData from './ShowsCardData';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



const ShowsCard = () => {
    const [width, setWidth] = useState(null);

    window.addEventListener('resize', (e) => {
        setWidth(e.target.outerWidth);
    });

    return (
        <section>
            <div className="container">
            <Swiper
                    spaceBetween={15}
                    slidesPerView={width < 600 ? 2 : 4}
                >
                    {
                        ShowsData.map((shows, index) => <SwiperSlide key={index++} >
                            <UpcomingShowsContent shows={shows} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default ShowsCard;