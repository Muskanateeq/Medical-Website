import styles from './ProgressBarContainer.module.css';
import DoctorsCarousel from './DoctorsCarousel';

const ProgressBarContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2>CHOOSE CONFIDENTLY</h2>
        <p>
         Choose confidently with us, knowing that you are making informed decisions about your health and well-being. Our experienced professionals are committed to providing you with the best guidance and care, ensuring that you feel supported every step of the way. Whether you&apos;re seeking treatment or advice, we empower you to make choices that enhance your quality of life.
        </p>
        <div>
            <DoctorsCarousel />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.skill}>
          <label>Dermatologist Experience</label>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '96%' }}></div>
          </div>
          <span>96%</span>
        </div>
        <div className={styles.skill}>
          <label>Orthodontist Experience</label>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '85%' }}></div>
          </div>
          <span>85%</span>
        </div>
        <div className={styles.skill}>
          <label>Primary Health Care Experience</label>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '77%' }}></div>
          </div>
          <span>77%</span>
        </div>
        <div className={styles.skill}>
          <label>Pediatrician Experience</label>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '98%' }}></div>
          </div>
          <span>98%</span>
        </div>
        <div className={styles.skill}>
          <label>Ophthalmology Experience</label>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '65%' }}></div>
          </div>
          <span>65%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarContainer;
