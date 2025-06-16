/** @format */

import Image from "next/image";
import ContactForm from "../components/ui/contactForm";
import styles from "./page.module.css";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>CONTACT</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.contactColumns}>
          <div className={styles.columnLeft}>
            <Image
              src="/envelope.png"
              width={100}
              height={100}
              alt="mail contact icon"
              className={styles.envelope}
            />
            <div className={styles.letsTalk}>
              <div className={styles.header}>
                <h1>
                  Have questions?
                  <br />
                  We have answers – contact us
                </h1>
              </div>
              <div className={styles.email}>akdevelopmentstudio@gmail.com</div>
            </div>
          </div>
          <div className={styles.columnRight}>
            <div className={styles.contactForm}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backButton}>
        <Link href="/">BACK</Link>
      </div>
      <div className={styles.copyright}>COPYRIGHT © AKDEVELOPMENT 2025</div>
    </>
  );
}
