import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { BannerData } from "mock/Home";
import { Link } from "react-router-dom";

export const HomeBanner = () => {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="banner_swiper"
      speed={4000}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {BannerData?.map((banner) => {
        return (
          <SwiperSlide key={banner?.id}>
            <div className="banner_layout">
              {banner.video ? (
                <iframe src="https://www.youtube.com/embed/6EE8Ar3ywQk?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=6EE8Ar3ywQk"></iframe>
              ) : null}
              {banner.video ? null : <img src={banner?.bgImg} alt="banners" />}
              <div className="banner_content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                  {banner?.heading}
                </h1>
                <Link
                  to={banner?.slug}
                  className="banner_btn"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                >
                  {banner?.linkTxt}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
