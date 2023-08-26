import React from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";

const BottomNav = () => {

  const handleClick = () => {}
  
  return (
    <div className={`${styles.bottomNavMainContainer}`}>
      <div className={`${styles.bottomNavContainer}`}>
        <div className={styles.bottomNav}>
          <Image src="/logo.png" alt="logo" width="163" height="54" />
          <p className={`${styles.compBrief}`}>
            Let our network of high performing affiliates help you connect with
            millions of paying customers.
          </p>
        </div>
        <div className={styles.bottomNav}>
          <h3 className={`${styles.bottomNavHeader}`}>Contact Us</h3>
          <p className={`${styles.bottomNavSection}`}>
            34 Ekanem Street, Uyo, Akwa Ibom State.
            <br />
            Call Us: 08065805999.
            <br />
            help@moniearners.com
          </p>
        </div>
        <div className={styles.bottomNav}>
          <h3 className={`${styles.bottomNavHeader}`}>
            Sign Up for Updates
          </h3>
          <div className={styles.customSearch}>
            <input
              type="text"
              className={styles.customSearchInput}
              placeholder="Your email address"
            />
            <button
              className={styles.customSearchBotton}
              type="submit"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
          <p className={`${styles.bottomNavSection}`}>
            Sign up with your email address to <br />
            recieve news and updates
          </p>
        </div>
      </div>

      <div className={`${styles.bottomNavCopyrightContainer}`}>
        <div className={`${styles.rowContainer}`}>
          <div className={`${styles.bottomNavMain}`}>
            <p>Copyright@2023 Moniearners.</p>
          </div>

          <div className={`${styles.navArea}`} id="bottomNav">
            <ul>
              <li>
                <Link href="/home"> Home </Link>{" "}
              </li>
              <li>
                <Link href="/support"> Support </Link>
              </li>
              <li>
                <Link href="/affiliates"> Affiliate </Link>
              </li>
              <li>
                {" "}
                <Link href="/vendor"> Vendors </Link>
              </li>
              <li>
                <Link href="/">FAQs</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
