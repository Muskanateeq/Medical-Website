// components/MedicalExperience.jsx
import React from "react";
import Image from "next/image";
import styles from "../components/Aboutus.module.css";

const MedicalExperience = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <div className={styles.header}>
            <h1 className={styles.heading}>
              People You Know.{" "}
              <span className={styles.highlight}>Extraordinary care</span>
            </h1>
            <h2 className={styles.subheading}>
              Providing an Exceptional Medical Experience
            </h2>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Proactively envisioned multimedia based expertise and cross-media
              growth strategies. Seamlessly visualize quality intellectual
              capital without superior collaboration and pontificate installed
              base portals after maintainable products.
            </p>

            <p className={styles.paragraph}>
              Phoethorescently engage worldwide healthcare with enabled
              technology. Internetively coordinate proactive e-commerce via
              process centric outside the low thinking. Completely pursue
              scalable customer service through potential sources. Dramatically
              disseminate standardized metrics after resource-leveling
              processes.
            </p>

            <p className={styles.paragraph}>
              Distinctively exploit optimal alignments for intuitive bandwidth.
              Quickly coordinate e-business applications through revolutionary
              catalysis for change. Seamlessly underwhelm optimal testing
              procedures whereas bricks-and-clicks processes.
            </p>

            <button className={styles.aboutButton}>More About MedCare</button>
          </div>
        </div>

        <div className={styles.imageColumn}>
            <div>
          <Image
            src="/docterteam3.jpeg"
            alt="Exceptional Medical Experience"
            width={900}
            height={1000}
            className={styles.image}
          />
          <div className={styles.testimonial}>
            <p className={styles.quote}>
              &apos;Medical science begin to notice for good health, peace of mind,
              self-confidence, optimism is something very important.&apos;
            </p>
            <div className={styles.author}>
              <div className={styles.authorName}>Authors O&apos;Neil</div>
              <div className={styles.authorTitle}>MedCare Clinic Founder</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalExperience;
