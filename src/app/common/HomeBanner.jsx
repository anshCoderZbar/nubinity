import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
 
import { BannerData } from "mock/Home";

export const HomeBanner = () => {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="banner_swiper"
    >
      {BannerData?.map((banner) => {
        return (
          <SwiperSlide key={banner?.id}>
            <div className="banner_layout">
              <img src={banner?.bgImg} alt="banners" />
              <div className="banner_content">
                <h1 data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">{banner?.heading}</h1>
                <a href={banner?.slug} className="banner_btn" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="800" data-aos-duration="1200">
                  {banner?.linkTxt}
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
