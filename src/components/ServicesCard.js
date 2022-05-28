import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";

export default function ServicesCard({ data }) {
  return (
    <Link
      onClick={() => {
        window.localStorage.setItem("servicesData", JSON.stringify(data));
      }}
      to="/service-details"
      className="services__main__container__content__wrapper__card"
    >
      <div className="services__main__container__content__wrapper__card__svg__container">
        <Zoom>
          <img
            src={
              "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
              data.logo
            }
            alt="services__main__container__content__wrapper__card__svg"
            className="services__main__container__content__wrapper__card__svg"
          />
        </Zoom>
      </div>
      <Fade>{data.title}</Fade>
    </Link>
  );
}