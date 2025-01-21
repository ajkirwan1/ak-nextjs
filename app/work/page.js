/** @format */

"use client";
import { useState } from "react";
import Image from "next/image";
import mockupIndigo from "@/public/indigo2mock.png";
import mockIcare from "@/public/mockIcare.png";
import mockSimlift from "@/public/mockupsimlift.png";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
register();

import Link from "next/link";

export default function Work() {
  const [firstSwiper, setFirstSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    if (!swiper.autoplay.paused) {
      swiper.autoplay.pause();
    } else {
      swiper.autoplay.resume();
    }
  };

  return (
    <>
      <h1 className={styles.pageTitle}>WORK</h1>

      <div className={styles.slider}>
        <Swiper
          className={styles.slider}
          onSwiper={firstSwiper}
          modules={{ Navigation, Autoplay }}
          centeredSlides
          scrollbar-clickable="true"
          mousewheel-invert="true"
          navigation
          autoplay
          loop="true"
          autoplay-delay="1900"
          autoplay-disable-on-interaction="false"
          center-slides="true"
          style={{
            "--swiper-theme-color": "#fff",
            "--swiper-inactive-scale": ".85",
            "--swiper-mobile-inactive-scale": ".95",
            "--swiper-navigation-size": "34px",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 3,
            },
          }}
          onClick={(swiper) => handleSwiper(swiper)}
        >
          <SwiperSlide>
            <Image
              className={styles.mockupIndigo}
              alt="mockup picture"
              src={mockupIndigo}
            ></Image>
            <p className={styles.slideText}>
              <strong>ROLE:</strong>
              <br />
              Front/backend development
              <br />
              Web design
              <br />
              Website:link
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.mockIcare}
              alt="mockup picture"
              src={mockIcare}
            ></Image>
            <p className={styles.slideText}>
              <strong>ROLE:</strong>
              <br />
              Front/backend development
              <br />
              Web design
              <br />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.mockSimlift}
              alt="mockup picture"
              src={mockSimlift}
            ></Image>
            <p className={styles.slideText}>
              <strong>ROLE:</strong>
              <br />
              Front/backend development
              <br />
              Web design
              <br />
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className={styles.mockSimlift}
              alt="mockup picture"
              src={mockSimlift}
            ></Image>
            <p className={styles.slideText}>
              <strong>ROLE:</strong>
              <br />
              Front/backend development
              <br />
              Web design
              <br />
            </p>
          </SwiperSlide>
          <div className={styles["swiper-button-prev"]}></div>
          <div className={styles["swiper-button-next"]}></div>
        </Swiper>
      </div>
      <div className={styles.backButton}>
        <span className={styles.arrowLeft}>⇦</span>
        <Link href="/"> BACK</Link>
      </div>
    </>
  );
}
