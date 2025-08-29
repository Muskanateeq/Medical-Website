
"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SliderComponent.module.css';

interface SliderProps {
  images: string[];
  texts: { heading: string; paragraph: string }[];
}

const SliderComponent: React.FC<SliderProps> = ({ images, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className={styles.sliderWrapper}>
      {/* Left Side Text */}
      <div className={styles.textContainer}>
        <h2 className={styles.sliderHeading}>{texts[currentIndex].heading}</h2>
        <p className={styles.sliderParagraph}>
          {texts[currentIndex].paragraph}
        </p>
      </div>

      {/* Slider Images */}
      <div className={styles.slider}>
        <Image
          src={images[currentIndex]}
          alt={`Slider image ${currentIndex + 1}`}
          width={800}
          height={400}
          className={styles.sliderImage}
        />
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;









