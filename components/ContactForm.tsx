// components/ContactForm.tsx
import styles from "./ContactForm.module.css";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.tagline}>You Deserve The Best Healthcare</p>
          <h1 className={styles.title}>Let&apos;s Get In Touch</h1>
          <p className={styles.description}>
            Contact us through our contact form and we&apos;ll get back to you
            as soon as we can. Please bear in mind a reasonable reply time is
            required to respond.
          </p>

          <form className={styles.form}>
            <div className={styles.row}>
              <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                <label htmlFor="name" className={styles.label}>
                  First and Family name *
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  placeholder="First and Family name *"
                  required
                />
              </div>

              <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                <label htmlFor="email" className={styles.label}>
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="Your Email Address *"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Submit Your Message
              </label>
              <textarea
                id="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Submit Your Message"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/contact.jpg"
            alt="Healthcare"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
