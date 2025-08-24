import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HomeSlider = () => {
    return (
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="sliderHome"
          >
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                  className="w-full"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
                  className="w-full"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
                  className="w-full"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg"
                  className="w-full"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
}

export default HomeSlider