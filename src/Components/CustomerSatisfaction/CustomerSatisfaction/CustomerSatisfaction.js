import React, { useEffect, useState } from 'react';
import data from '../SatisfactionData/SatisfactionData';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import ShowSatisfyContent from '../ShowSatisfyContent/ShowSatisfyContent';





const CustomerSatisfaction = () => {
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
        <section style={{ background: '#0A0B1A', paddingBottom: '50px' }}>
            <div className="container">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={isPhone ? 1.5 : 4}
                >
                    {
                        data.map((data, index) => <SwiperSlide key={index++} >
                            <ShowSatisfyContent data={data} />
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default CustomerSatisfaction;