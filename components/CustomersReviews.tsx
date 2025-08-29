import styles from './CustomersReviews.module.css';
import Image from "next/image"

const CustomerReviews: React.FC = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h2>CUSTOMER REVIEWS</h2>

      <div className={styles.review}>
        <div className={styles.quoteIcon}>“</div>
        <p className={styles.reviewText}>
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Lorem ipsum dolor sit amet, consectetur. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Proin gravida nibh vel velit auctor aliquet.
        </p>
        <div className={styles.reviewerInfo}>
          <Image 
          src="/review image.jpeg" 
          alt="Andrew Myers" 
          width={300}
          height={300}
          className={styles.reviewerImage} />
          <div className={styles.reviewerDetails}>
            <h4>Andrew Myers</h4>
            <p>Cardiovascular Deseases</p>
          </div>
        </div>
      </div>

      <div className={styles.review}>
        <div className={styles.quoteIcon}>“</div>
        <p className={styles.reviewText}>
          Lorem ipsum dolor sit amet, consectetur. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
        </p>
        <div className={styles.reviewerInfo}>
          <Image 
          src="/review image2.jpeg"
          alt="Melissa Hudges" 
          width={300}
          height={300}
          className={styles.reviewerImage} />

          <div className={styles.reviewerDetails}>
            <h4>Melissa Hudges</h4>
            <p>Pediatric Center</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomerReviews;
