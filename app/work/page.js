"use client";
import styles from "./page.module.css";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
register();

// const swiper = new Swiper(".swiper", {
//   modules: [Navigation],
// });

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
          autoplay-delay="3000"
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
            <img
              className={styles.mockupIndigo}
              alt="mockup picture"
              src="/indigo2mock.png"
              width={884}
              height={1776}
            />
            <p className={styles.slideText}>
              <br />
              <Link
                className={styles.indigo}
                href="https://indigo-consulting.gr/"
              >
                INDIGO CONSULTING
              </Link>
              <br />
              Front/backend development
              <br />
              Web design
              <br />
              deployment/maintenance
            </p>
          </swiper-slide>

          <swiper-slide>
            <img
              className={styles.mockSimlift}
              alt="mockup picture"
              src="/mockIcare.png"
              width={884}
              height={1776}
            />
            <p className={styles.slideText}>
              <br />
              <Link className={styles.indigo} href="#">
                ICARE (app under construction)
              </Link>
              <br />
              Front/backend development
              <br />
              Web design
              <br />
            </p>
          </swiper-slide>
          <swiper-slide>
            <img
              className={styles.mKruk}
              alt="mockup picture"
              src="/mkruk.png"
              width={884}
              height={1776}
            />
            <p className={styles.slideText}>
              <br />
              <Link className={styles.indigo} href="https://magdalenakruk.com/">
                MAGDALENA KRUK
              </Link>
              <br />
              Frontend development
              <br />
              Web design
              <br />
            </p>
          </swiper-slide>
          <swiper-slide>
            <img
              className={styles.mockIcare}
              alt="mockup picture"
              src="/mockupsimlift.png"
              width={884}
              height={1776}
            />
            <p className={styles.slideText}>
              <br />
              <Link className={styles.indigo} href="https://simlift.eu">
                SIMLIFT
              </Link>
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
        <Link href="/"> BACK</Link>
      </div>
    </>
  );
}
