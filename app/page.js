import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import logo from "@/public/a-k-logo.png";

export default function Home() {
  return (
    // <div className={styles.page}>

    // <button>
    //   <div className={styles.hamburger}>
    //  <span></span>
    //   <span></span>
    //  <span></span>
    // </div>
    //  </button>

    <>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          alt="image showing the a&k logo"
          src={logo}
        ></Image>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <Link href="/who-we-are">WHO WE ARE</Link>
          <div className={styles.slash}></div>
        </div>
        <div className={styles.menuItem}>
          <Link href="/work">WORK</Link>
          <div className={styles.slash}></div>
        </div>
        <div className={styles.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </>
  );
}
