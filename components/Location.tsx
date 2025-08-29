import React from 'react';
import styles from './Location.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const LocationSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.755924829462!2d-74.03791178459457!3d40.72187837933045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25761e7aa55a3%3A0x4c7fd4bffefc7637!2s68%20Erie%20St%2C%20Jersey%20City%2C%20NJ%2007302%2C%20USA!5e0!3m2!1sen!2sin!4v1711111111111"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.info}>
        <div className={styles.subtitle}>Enhancing Life, Excelling in Care</div>
        <h2>Working Hours</h2>
        <p>Let’s get together and discuss how you can get a better health care.</p>

        <ul className={styles.hours}>
          <li><span>Monday - Thursday</span><span>8AM – 7PM</span><button>Book</button></li>
          <li><span>Friday</span><span>8AM – 5PM</span><button>Book</button></li>
          <li><span>Saturday</span><span>8AM – 4PM</span><button>Book</button></li>
          <li><span>Sunday</span><span>Closed</span></li>
        </ul>

        <div className={styles.contact}>
          <FaMapMarkerAlt className={styles.icon} />
          <p><strong>Visit us in person:</strong><br />68 Erie St, Jersey City</p>
          <FaPhoneAlt className={styles.icon} />
          <p><strong>Call Us:</strong><br />0-800-400-6556</p>
          <FaEnvelope className={styles.icon} />
          <p><strong>Email Us:</strong><br />info@vivomedic.com</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
