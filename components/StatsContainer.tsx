import styles from './StatsContainer.module.css';

const StatsContainer: React.FC = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.topSection}>
        <div className={styles.card}>

          <h2>WITH US, IT&apos;S ALWAYS HELP OTEHRS.</h2>
          <p>We are dedicated to providing support and resources, whether through blood donation or personalized care, making a positive impact on the community we serve.</p>
        </div>
        <div className={styles.card}>
          <h2>DONATE BLOOD. HELP OTHERS.</h2>
          <p>
          We have saved lives and given hope to many in need. Each donation helps secure the health of patients, supports surgeries, and strengthens our community. Together, we can make a real difference.</p>
        </div>
      </div>
      <div className={styles.topSection}>
        <div className={styles.card}>
          <h2>MILLION OF PATEINT SATISFIED, WITH OUR DOCTORS.</h2>
          <p>Millions of patients trust and are satisfied with our doctors expertise and compassionate care. Our dedicated medical team strives to provide the highest quality treatment, ensuring every patient receives the attention and support they deserve.</p>
        </div>
        <div className={styles.card}>
          <h2>COMPREHENSIVE HEALTH SERVICE,TREATMENTS.</h2>
          <p>We offer a wide range of comprehensive health services and treatments, ensuring personalized care for every patient. From routine check-ups to specialized treatments, our team is dedicated to supporting your health and well-being.</p>
        </div>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.stat}>
          <h1>1 Million+</h1>
          <p>Satisfied Patients</p>
        </div>
        <div className={styles.stat}>
          <h1>1679937+</h1>
          <p>Customers reviews</p>
        </div>
        <div className={styles.stat}>
          <h1>7347+</h1>
          <p>Blood Donations</p>
        </div>
        <div className={styles.stat}>
          <h1>1912+</h1>
          <p>Different Services</p>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
