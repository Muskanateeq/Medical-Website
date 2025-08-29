import React from 'react'
import styles from './HomeContent.module.css'

const HomeContent = () => {
  return (
    <div className={styles.container}>
    <div className={styles.section}>
      <h3>Qualified Doctors</h3>
      <h2>WHERE PEOPLE COME FIRST</h2>
      <p>Our patient-centered approach ensures that every individual&apos;s needs and preferences guide our care. We foster an environment of respect, empathy, and support, making sure everyone feels valued and heard throughout their healthcare journey.</p>
    </div>
    <div className={styles.divider}></div> {/* Vertical Divider */}
    <div className={styles.section}>
      <h3>24 Hour Service</h3>
      <h2>HIGHEST QUALITY CARE</h2>
      <p>Our commitment to the highest quality care ensures that every patient receives exceptional treatment backed by the latest medical advancements. We prioritize safety, compassion, and effectiveness, striving to exceed industry standards and enhance patient outcomes at every step.</p>
    </div>
    <div className={styles.divider}></div> {/* Vertical Divider */}
    <div className={styles.section}>
      <h3>We Are Here For You</h3>
      <h2>EMERGENCY DEPARTMENT</h2>
      <p>The Emergency Department (ED) offers immediate care for acute illnesses and injuries, operating 24/7 with a team of skilled medical professionals. It prioritizes quick assessment and treatment of life-threatening conditions, ensuring patient safety and effective care in critical situations.</p>
    </div>
  </div>
  )
}

export default HomeContent