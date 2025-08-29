"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MainSlider.module.css';

interface SliderProps {
  images: string[];
  texts: { heading: string; paragraph: string }[];
}

const SliderComponent: React.FC<SliderProps> = ({ images, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const textContainer = document.querySelector(`.${styles.textContainer}`) as HTMLElement;
    if (textContainer) {
      textContainer.style.animation = 'none';
      setTimeout(() => {
        textContainer.style.animation = '';
      }, 20);
    }
  }, [currentIndex]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <Image
          src={images[currentIndex]}
          alt={`Slider image ${currentIndex + 1}`}
          width={800}
          height={400}
          className={styles.sliderImage}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.sliderHeading}>{texts[currentIndex].heading}</h2>
          <p className={styles.sliderParagraph}>{texts[currentIndex].paragraph}</p>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;


