import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function AboutEndeavors() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_endeavor`,
    fetcher
  );
  return (
    <div className="about__endeavors">
      <div className="about__endeavors__heading heading">Our Endeavors</div>
      <div className="about__endeavors__content">
        <Swiper>
          {data?.map((item) => (
            <SwiperSlide>
              <img
                src={import.meta.env.VITE_CLOUDNAIRY_API_URL + item.image}
                alt="endeavor"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}