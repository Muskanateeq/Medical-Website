
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2>BOOK APPOINTMENT AND VISIT</h2>
      <hr className={styles.divider} />

      <div className={styles.footerContent}>
        {/* Left side */}
        <div className={styles.left}>
          <p>
            Health care | Health Insurance Marketplace® is a registered
            trademark of the Department of Health & Human Services.
            <br />
            An official website of the U.S. Centers for Medicare & Medicaid Services.
          </p>
        </div>

        {/* Vertical divider */}
        <div className={styles.pipe}></div>

        {/* Right side */}
        <div className={styles.right}>
          <h3>Connect with us</h3>
          <p>Questions? Call 1-800-318-2596</p>
          <p>Help with</p>
          <p>Visit the www.MEDCARE.com</p>
        </div>
      </div>
    </div>
  );
}