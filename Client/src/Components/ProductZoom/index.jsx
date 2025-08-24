import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlidersmall = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlidersmall.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSlidersmall}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "opacity-10" : "opacity-90"
                }  `}
                onClick={() => goto(0)}
              >
                <img
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2bmZ6cfEv1ewopqAquoVvLgCYjfp9PCD1Kiiff4aZe1FjpB2LtzgBy7izjZYWqwic4G7oquGyassKYVkq1-WVQtwSA6HIBopxCpf8ypyC0PtHZyvtiX2Oqw"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "opacity-10" : "opacity-90"
                }  `}
                onClick={() => goto(1)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? "opacity-10" : "opacity-90"
                }  `}
                onClick={() => goto(2)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-1-202505291109.jpg?im=Resize=(600,750)"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 3 ? "opacity-10" : "opacity-90"
                }  `}
                onClick={() => goto(3)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-2-202505291109.jpg?im=Resize=(600,750)"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 4 ? "opacity-10" : "opacity-90"
                }  `}
                onClick={() => goto(4)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-3-202505291109.jpg?im=Resize=(600,750)"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 5 ? "opacity-10" : "opacity-90"
                }  `}
                onClick={() => goto(5)}
              >
                <img
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2bmZ6cfEv1ewopqAquoVvLgCYjfp9PCD1Kiiff4aZe1FjpB2LtzgBy7izjZYWqwic4G7oquGyassKYVkq1-WVQtwSA6HIBopxCpf8ypyC0PtHZyvtiX2Oqw"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        {/* .............. */}
        <div className="zoomContainer !w-[85%] !h-[500px] overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            // navigation={true}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2bmZ6cfEv1ewopqAquoVvLgCYjfp9PCD1Kiiff4aZe1FjpB2LtzgBy7izjZYWqwic4G7oquGyassKYVkq1-WVQtwSA6HIBopxCpf8ypyC0PtHZyvtiX2Oqw"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-0-202505291109.jpg?im=Resize=(600,750)"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-1-202505291109.jpg?im=Resize=(600,750)"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-2-202505291109.jpg?im=Resize=(600,750)"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.jiomart.com/images/product/original/rvvlz1bmy5/1stop-fashion-kurti-for-women-product-images-rvvlz1bmy5-3-202505291109.jpg?im=Resize=(600,750)"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2bmZ6cfEv1ewopqAquoVvLgCYjfp9PCD1Kiiff4aZe1FjpB2LtzgBy7izjZYWqwic4G7oquGyassKYVkq1-WVQtwSA6HIBopxCpf8ypyC0PtHZyvtiX2Oqw"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
