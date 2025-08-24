import React from "react";
import HomeSlider from "../../Components/HomeSlider";
import HomeCatSlider from "../../Components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../Components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../Components/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../Components/BlogItem";
import Footer from "../../Components/Footer";
function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      {/* ......................Popular Products */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="font-[600] text-[20px]">Popular Products</h2>
              <p className="font-[400] text-[14px]">
                Do not miss the current offers until the end march
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electrinics" />
                <Tab label="Bags" />
                <Tab label="Footwere" />
                <Tab label="Groceries" />
                <Tab label="Jwelerry" />
                <Tab label="Beauty" />
                <Tab label="Item Eight" />
                <Tab label="Item Nine" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={6} />
        </div>
      </section>
      {/* .....Free Shipping */}
      <section className="py-4 pt-2 bg-white ">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            {/* . */}
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now on your first order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]"> Only-$200</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      {/* . Latest Products*/}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="font-[600] text-[20px]">Latest Products</h2>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      {/* .Featured products */}
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="font-[600] text-[20px]">Featured Products</h2>
          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* ...BlogItem */}
      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="font-[600] text-[20px] mb-4">From the Blog</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="smallbtn"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

          </Swiper>
        </div>
      </section>

     
    </>
  );
}

export default Home;
