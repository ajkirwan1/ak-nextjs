import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <>
      <h1 className={styles.pageTitle}>
        <span className={styles.title}>WHO WE ARE</span>
        <span className={styles.slash}></span>
        <span className={styles.whatWeDo}>WHAT WE DO</span>
      </h1>
      <div className={styles.headlineContainer}>
        <span className={styles.headline}>
          Full service web and app development
        </span>
      </div>
      <div className={styles.contactColumns}>
        <div className={styles.columnLeft}>
          <div className={styles.columnText}>
            <p>We are creative web developing studio based in the UK.</p>
            <p>Working with clients worldwide.</p>
            <p>
              We design and build modern websites that are fast, functional, and
              simple.
            </p>
            <p>
              Whether you are building a brand or reinventing one, we help you
              stand out — with style and clarity.
            </p>
          </div>
        </div>
        <div className={styles.columnRight}>
          <div className={styles.columnText}>
            <p>
              <span className={styles.arrow}>—</span>Graphic design
            </p>
            <p>
              <span className={styles.arrow}>—</span>Visual identification
            </p>
            <p>
              <span className={styles.arrow}>—</span>Front/backend development
            </p>
            <p>
              <span className={styles.arrow}>—</span>Animation
            </p>
            <p>
              <span className={styles.arrow}>—</span>UX/UI Design
            </p>
            <p>
              <span className={styles.arrow}>—</span>Branding strategy
            </p>
            <p>
              <span className={styles.arrow}>—</span>SEO Optimization
            </p>
          </div>
        </div>
      </div>

      <div className={styles.backButton}>
        <Link href="/">BACK</Link>
      </div>

      <div className={styles.corners}>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
      </div>
    </>
  );
}
