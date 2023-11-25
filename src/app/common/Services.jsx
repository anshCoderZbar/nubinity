import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ServicesData } from "mock/Home";

export const Services = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      loop={true}
      modules={[Pagination]}
      pagination={true}
      slidesPerGroup={1}
      className="serrvices"
      breakpoints={{
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        991: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1400: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }}
    >
      {ServicesData?.map((data) => {
        return (
          <SwiperSlide key={data?.id}>
            <div className="service_card">
              <div className="service-card-body">
                <img src={data.icon1} alt="service icons" />
                <p>{data?.heading1}</p>
              </div>
              <div className="service-card-body">
                <img src={data.icon2} alt="service icons" />
                <p>{data?.heading2}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
