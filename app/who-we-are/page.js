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
        <span className={styles.headline}>Full Service Web Development</span>
      </div>
      <div className={styles.contactColumns}>
        <div className={styles.columnLeft}>
          <div className={styles.columnText}>
            We are young creative studio based in the UK.
            <br />
            <br />
            We operate worldwide.
            <br />
            <br />
            We are here to help develop
            <br />
            <br />
            your personal branding.
          </div>
        </div>
        <div className={styles.columnRight}>
          <div className={styles.columnText}>
            <span className={styles.arrow}> ↗</span>Graphic design
            <br />
            <br />
            <span className={styles.arrow}>↗ </span> Visual identification
            <br />
            <br />
            <span className={styles.arrow}>↗</span> Front/backend development
            <br />
            <br />
            <span className={styles.arrow}>↗</span>Animation
          </div>
        </div>
      </div>

      <div className={styles.backButton}>
        <span className={styles.arrowLeft}>⇦</span>
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
