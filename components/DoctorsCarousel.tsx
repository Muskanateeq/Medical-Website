// components/DoctorsCarousel.tsx
"use client";
import { useEffect, useState } from "react";
import styles from "./DoctorsCarousel.module.css";
import Image from 'next/image';

interface Doctor {
  name: string;
  specialty: string;
  imageUrl: string;
}

const doctorsData: Doctor[] = [
  { name: "Dr Catherine Castillo", specialty: "DERMATOLOGIST", imageUrl: "/dermatologist.jpeg" },
  { name: "Dr Alexander Burns", specialty: "ORTHODONTIST", imageUrl: "/orthodontics.jpeg" },
  { name: "Dr Evan Taller", specialty: "PRIMARY HEALTH CARE", imageUrl: "/primary doctor.jpeg" },
  { name: "Dr Jamie Brannon", specialty: "PEDIATRICIAN", imageUrl: "/pediatrician.jpg" },
  { name: "Dr Belly Doe", specialty: "Ophthalmology", imageUrl: "/opthamology.jpeg" },
];

const DoctorsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDoctor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctorsData.length);
  };

  const prevDoctor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctorsData.length) % doctorsData.length);
  };

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(nextDoctor, 2000); // Change the image every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.doctorCard}>
        <Image
          src={doctorsData[currentIndex].imageUrl}
          alt={doctorsData[currentIndex].name}
          className={styles.doctorImage}
          width={500}   // Aap width ko adjust kar sakte hain
          height={500}  // Aur height bhi
          objectFit="cover" // Image ka object-fit set karna
        />
        <div className={styles.overlay}>
          <div className={styles.icons}>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-skype"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <h3>{doctorsData[currentIndex].name}</h3>
        <p>{doctorsData[currentIndex].specialty}</p>
      </div>
      <div className={styles.arrows}>
        <button onClick={prevDoctor}>&lt;</button>
        <button onClick={nextDoctor}>&gt;</button>
      </div>
    </div>
  );
};

export default DoctorsCarousel;


