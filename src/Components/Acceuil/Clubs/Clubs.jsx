import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Clubs.scss";
import { Autoplay } from "swiper";

// import required modules

export default function CLubs() {
    return (
        <>
            <div className="solution-title">
                <h2 className="title">Nos Références</h2>
            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={-120}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://www.myteam.ma/wp-content/uploads/2020/10/MAS-Logo-1.png" /></SwiperSlide>
                <SwiperSlide><img src="https://www.myteam.ma/wp-content/uploads/2020/10/sccm.png" /></SwiperSlide>
                <SwiperSlide><img src="https://www.myteam.ma/wp-content/uploads/2020/10/1200px-FUS_Rabat_logo.svg-600x725.png" /></SwiperSlide>
                <SwiperSlide><img src="https://www.myteam.ma/wp-content/uploads/2020/10/SCC.png" /></SwiperSlide>
                <SwiperSlide><img src="https://www.myteam.ma/wp-content/uploads/2020/10/RCAZ.png" /></SwiperSlide>
                <SwiperSlide><img src="https://www.myteam.ma/wp-content/uploads/2020/10/Objet-dynamique-vectoriel.png" /></SwiperSlide>
            </Swiper>
        </>
    );
}
