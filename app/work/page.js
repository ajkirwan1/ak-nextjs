"use client";
import Image from "next/image";
import mockupIndigo from "@/public/indigomock.png";
import mockIcare from "@/public/mockIcare.png";
import mockSimlift from "@/public/mockupsimlift.png";
import styles from "./page.module.css";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
register();

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
});

import Link from "next/link";

export default function Work() {
  return (
    <>
      <h1 className={styles.pageTitle}>WORK</h1>

      <div className={styles.slider}>
        <swiper-container
          class="slider"
          centeredSlides
          scrollbar-clickable="true"
          mousewheel-invert="true"
          navigation="true"
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
        >
          <swiper-slide>
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
          </swiper-slide>
          <swiper-slide>
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
          </swiper-slide>
          <swiper-slide>
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
          </swiper-slide>
          <swiper-slide>
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
          </swiper-slide>
          <div className={styles["swiper-button-prev"]}></div>
          <div className={styles["swiper-button-next"]}></div>
        </swiper-container>
      </div>
      <div className={styles.backButton}>
        <span className={styles.arrowLeft}>⇦</span>
        <Link href="/"> BACK</Link>
      </div>
    </>
  );
}
