"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      {/* Logo centered within the navbar */}
      <span className={styles.logo}>
        Med<span className={styles.highlight}>C</span>are
      </span>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <Link href="/home"><li>Home</li></Link>
        <Link href="/about-us"><li>About</li></Link>
        <Link href="/department"><li>Department</li></Link>
        <Link href="/find-docter"><li>Doctor</li></Link>
        <Link href="/book-appointment"><li>Book Appointment</li></Link>
        <Link href="/login"><button>Log In</button></Link>
      </ul>
    </div>
  );
}








