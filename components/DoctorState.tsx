
"use client";

import React, { useState } from 'react';
import styles from './DoctorState.module.css';
import { useRouter } from 'next/navigation';
import Image from "next/image"

// Doctor data with image URLs
const doctors = [
  {
    name: "Dr Catherine Castillo",
    specialty: "Dermatologist",
    imageUrl: "/dermatologist.jpeg"
  },
  {
    name: "Dr Alexander Burns",
    specialty: "Orthodontist",
    imageUrl: "/orthodontics.jpeg"
  },
  {
    name: "Dr Evan Taller",
    specialty: "Primary Health Care",
    imageUrl: "/primary doctor.jpeg"
  },
  {
    name: "Dr Jamie Brannon",
    specialty: "Pediatrician",
    imageUrl: "/pediatrician.jpg"
  },
  {
    name: "Dr Belly Doe",
    specialty: "Ophthalmology",
    imageUrl: "/opthamology.jpeg"
  }
];

const DoctorsSection: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const router = useRouter();
  
  const handleBookAppointment = () => {
    if (selectedDoctor) {
      // Navigate to booking page with selected doctor
      router.push(`/book-appointment?doctor=${encodeURIComponent(selectedDoctor)}`);
    } else {
      alert("Please select a doctor first");
    }
  };

  const getDoctorImage = (name: string) => {
    const doctor = doctors.find(d => d.name === name);
    return doctor ? doctor.imageUrl : '/doctor-placeholder.jpg';
  };

  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        {/* Left Column - Content */}
        <div className={styles.contentColumn}>
          <h1 className={styles.heading}>People You Know, <span className={styles.highlight}>Extraordinary Care</span></h1>
          <h2 className={styles.subheading}>Committed To The Best Possible Care.</h2>
          
          <p className={styles.description}>
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
          
          <div className={styles.divider}></div>
          
          <div className={styles.feature}>
            <span className={styles.featureBadge}>Book Within Minutes</span>
            <h3 className={styles.featureTitle}>Consult Our Doctors</h3>
            <p className={styles.featureDescription}>
              Select the doctor you prefer to get a checkup and book a visit with them in a matter of minutes. 
              Simply select from the list below.
            </p>
          </div>
        </div>
        
        {/* Right Column - Booking Container */}
        <div className={styles.bookingColumn}>
          <div className={styles.bookingCard}>
            <h3 className={styles.bookingTitle}>Select Your Doctor</h3>
            
            <div className={styles.doctorSelector}>
              <select 
                className={styles.doctorDropdown}
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
              >
                <option value="">Choose a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.name} value={doctor.name}>
                    {doctor.name} ({doctor.specialty})
                  </option>
                ))}
              </select>
              
              {selectedDoctor && (
                <div className={styles.selectedDoctor}>
                  <div className={styles.selectedBadge}>Selected Doctor</div>
                  <div className={styles.doctorInfo}>
                    <div className={styles.avatarContainer}>
                      <Image
                        src={getDoctorImage(selectedDoctor)} 
                        alt={selectedDoctor}
                        className={styles.doctorAvatar}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <div className={styles.doctorName}>{selectedDoctor}</div>
                      <div className={styles.doctorSpecialty}>
                        {doctors.find(d => d.name === selectedDoctor)?.specialty}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              className={styles.bookButton}
              onClick={handleBookAppointment}
              disabled={!selectedDoctor}
            >
              Book Appointment
            </button>
            
            <div className={styles.bookingBenefits}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>Same-day appointments available</div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>No waiting time guarantee</div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>Online consultation options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;