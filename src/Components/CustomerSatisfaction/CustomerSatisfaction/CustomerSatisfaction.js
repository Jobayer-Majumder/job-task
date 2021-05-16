import React, { useState } from 'react';
import data from '../SatisfactionData/SatisfactionData';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import ShowSatisfyContent from '../ShowSatisfyContent/ShowSatisfyContent';





const CustomerSatisfaction = () => {
    const [width, setWidth] = useState(null);

    window.addEventListener('resize', (e) => {
        setWidth(e.target.outerWidth);
    });
    
    return (
        <section style={{ background: '#0A0B1A', paddingBottom: '50px' }}>
            <div className="container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={width < 600 ? 2 : 4}
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