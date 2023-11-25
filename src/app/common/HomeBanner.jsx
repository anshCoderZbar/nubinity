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
                <h1>{banner?.heading}</h1>
                <a href={banner?.slug} className="banner_btn">
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
