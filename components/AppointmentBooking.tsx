import Image from "next/image"
import styles from "./AppointmentBooking.module.css"
import Link from "next/link"

const AppointmentPreparation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageSection}>
          <Image
            src="/Doctor-appoint.jpg"
            alt="Doctor consultation"
            width={600}
            height={500}
            className={styles.mainImage}
          />
          <Link href = "/book-appointment"><button className={styles.appointmentButton}>Book Your Appointment</button></Link>
        </div>

        <div className={styles.textSection}>
          <div className={styles.subtitle}>Enhancing Life, Excelling in Care</div>
          <h1 className={styles.mainTitle}>Prepare Yourself For Appointment to Our Clinic</h1>

          <div className={styles.preparationSteps}>
            <div className={styles.stepsRow}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>1. Prioritize your concerns</h3>
                  <p className={styles.stepDescription}>
                    Make a list of what you want to discuss. For example, do you have a new symptom you want to ask the
                    doctor about?
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>3. Keep your doctor up to date</h3>
                  <p className={styles.stepDescription}>
                    Let your doctor know what has happened since last visit. Mention any changes you have noticed in
                    your appetite, weight, sleep, or energy level.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.stepsRow}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>2. Take information with you to the doctor</h3>
                  <p className={styles.stepDescription}>
                    You should also take your insurance cards, names and phone numbers of other doctors you see, and
                    your medical records.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h6"></path>
                  </svg>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>4. Request an interpreter if you need one</h3>
                  <p className={styles.stepDescription}>
                    Always let the doctor, your interpreter, or the staff know if you do not understand diagnosis or the
                    instructions the doctor gives you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Banner */}
      <div className={styles.subscriptionBanner}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>NEVER MISS NEW LAUNCHES! SUBSCRIBE!</span>
      </div>
    </div>
  )
}

export default AppointmentPreparation
