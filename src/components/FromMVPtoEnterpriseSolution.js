import React from "react";
import { CheckCircle } from "react-feather";
import angular from "../assets/technologies/angular-icon-logo.png";
import react from "../assets/technologies/react.png";
import sql from "../assets/technologies/sql-server-logo.png";
import nodejs from "../assets/technologies/node js.png";
import mysql from "../assets/technologies/MySQL-Logo.wine.png";
import xml from "../assets/technologies/Group 847.png";
import typescript from "../assets/technologies/Image 5.png";

export function FromMVPtoEnterpriseSolution() {
  return (
    <div className="container__web__dev__solution">
      <div className="container__web__dev__solution__left">
        <div className="container__web__dev__solution__left__heading">
          From MVP's to Enterprise Solution
        </div>
        <div className="container__web__dev__solution__left__info">
          For us an MVP is a solution with limited features that is detailed
          enough to get you an the most accurate market feedback yet economical
          enough to fit your pocket.
        </div>
        <div className="container__web__dev__solution__left__info">
          Everything we build meets and exceed industry standards
        </div>
        <div className="container__web__dev__solution__left__row">
          <img
            src="https://www.codedistrict.com/assets/images/mvp-img-1.svg"
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={angular}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={react}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={sql}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={nodejs}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={mysql}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={xml}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
          <img
            src={typescript}
            alt=""
            className="container__web__dev__solution__left__row__img"
          />
        </div>
      </div>
      <div className="container__web__dev__solution__right">
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Fast & Responsive
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Highly Scalable
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Appealing UI
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Secure Architecture
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Cross-Platform Compatibility
        </div>
      </div>
    </div>
  );
}