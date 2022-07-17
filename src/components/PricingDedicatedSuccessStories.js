import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StoryPic from "../assets/fw-airlines.jpg";
import brandLogo from "../assets/6.png";

export function PricingDedicatedSuccessStories({ slidesPerView }) {
  return (
    <div className="pricing__fitted__team">
      <div
        className="pricing__fitted__team__header"
        id="pricing__success__stories__team__header"
      >
        <div className="pricing__fitted__team__header__heading">
          Success Stories
        </div>
      </div>
      <div className="pricing__fitted__team__content">
        <Swiper slidesPerView={slidesPerView} autoplay>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img src={StoryPic} alt="Story Image" />
              </div>
              <div className="pricing__success__stories__slide__logo">
                <img src={brandLogo} alt="Brand Logo" />
              </div>
              <div className="pricing__success__stories__slide__info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat exercitationem architecto error a sequi officiis nam
                excepturi repudiandae aliquid ipsam.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img src={StoryPic} alt="Story Image" />
              </div>
              <div className="pricing__success__stories__slide__logo">
                <img src={brandLogo} alt="Brand Logo" />
              </div>
              <div className="pricing__success__stories__slide__info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat exercitationem architecto error a sequi officiis nam
                excepturi repudiandae aliquid ipsam.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img src={StoryPic} alt="Story Image" />
              </div>
              <div className="pricing__success__stories__slide__logo">
                <img src={brandLogo} alt="Brand Logo" />
              </div>
              <div className="pricing__success__stories__slide__info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat exercitationem architecto error a sequi officiis nam
                excepturi repudiandae aliquid ipsam.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img src={StoryPic} alt="Story Image" />
              </div>
              <div className="pricing__success__stories__slide__logo">
                <img src={brandLogo} alt="Brand Logo" />
              </div>
              <div className="pricing__success__stories__slide__info">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat exercitationem architecto error a sequi officiis nam
                excepturi repudiandae aliquid ipsam.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
