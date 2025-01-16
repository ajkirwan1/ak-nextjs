/** @format */

import Image from "next/image";
import ContactForm from "../components/ui/contactForm";
import styles from "./page.module.css";
import envelope from "@/public/envelope.png";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>CONTACT</h1>
      <div className={styles.contactColumns}>
        <div className={styles.columnLeft}>
          <Image
            src={envelope}
            alt="mail contact icon"
            className={styles.envelope}
          />
          <div className={styles.letsTalk}>
            <p>LET&aposS DISCUSS YOUR PROJECT</p>
            <div className={styles.email}>akdevelopmentstudio@gmail.com</div>
          </div>
        </div>
        <div className={styles.columnRight}>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className={styles.backButton}>
        <span className={styles.arrowLeft}>⇦</span>
        <Link href="/">BACK</Link>
      </div>
      <div className={styles.copyright}>COPYRIGHT © AKDEVELOPMENT 2025</div>
    </>
  );
}
