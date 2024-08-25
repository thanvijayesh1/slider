"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { BREAKPOINTS, getSwiperBreakpoints, slides } from "@/utils";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/customHooks";
import "../styles/_swiper.scss";
interface MySwiperProps {
  title: string;
  linkText: string;
  linkHref: string;
}

const MySwiper: React.FC<MySwiperProps> = ({ title, linkText, linkHref }) => {
  const isMobile = useIsMobile(BREAKPOINTS.xs);
  const breakpoints = getSwiperBreakpoints();

  return (
    <>
      <div className="carousel">
        <div className="carousel__header">
          <div className="pb-2 carousel__title">{title}</div>
          {!isMobile && (
            <div className="carousel__controls">
              <div className="swiper-pagination carousel__pagination"></div>
              <div className="carousel__navigation">
                <button className="image-swiper-button-prev">
                  <FaCircleArrowLeft />
                </button>
                <button className="image-swiper-button-next">
                  <FaCircleArrowRight />
                </button>
              </div>
            </div>
          )}

          <Link
            href={linkHref}
            className="carousel__link"
          >
            {linkText}
            <FaCircleArrowRight  className="carousel__linkIcon"/>
          </Link>
        </div>
      </div>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        breakpoints={breakpoints}
        modules={!isMobile ? [Pagination, Navigation] : [Navigation]}
        className="mySwiper"
        navigation={
          !isMobile && {
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }
        }
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <Image
                src={slide.url}
                width={300}
                className="card__image"
                height={300}
                alt={slide.alternativeText}
                priority
              />
              <div className="card__details">
                <div className="card__icon">{slide.icon}</div>
                <span className="card__name">{slide.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MySwiper;
