import React, { useEffect, useState } from 'react';
import UpcomingShowsContent from '../ShowUpcomingShows/UpcomingShowsContent';
import ShowsData from './ShowsCardData';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



const ShowsCard = () => {
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
        <section>
            <div className="container">
            <Swiper
                    spaceBetween={15}
                    slidesPerView={isPhone ? 1.5 : 4}
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