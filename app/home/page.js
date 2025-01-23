/** @format */

"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import logo from "@/public/a-k-logo.png";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function Home() {
  console.log(process.env.REACT_APP_BASE_URL);
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
      <AnimatePresence mode="wait">
        <motion.div
          // key={router.route}
          exit={{ opacity: 0 }}
          transition={{
            type: "easeInOut",
            duration: 2,
          }}
          className={styles.menu}
        >
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
        </motion.div>
      </AnimatePresence>
    </>
  );
}
