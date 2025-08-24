import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox";
const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full ">
      {" "}
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smallbtn"
      >
        <SwiperSlide>
          <BannerBox img={"/Banner1.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner2.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner3.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner4.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner5.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner6.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner1.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner2.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/Banner3.webp"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
