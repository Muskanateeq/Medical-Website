import Header from "@/components/Header"
import React from 'react';
import MainSlider from '@/components/MainSlider'
import styles from "./page.module.css";
import HospitalLanding from '@/components/HospitalLanding';
import DoctorsDetails from "@/components/DoctorsDetails";
import AppointmentBooking from "@/components/AppointmentBooking"
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm"
import HomeContent from '@/components/HomeContent';
import Footer from "@/components/Footer"

const mainsliderimages = [
  '/teamlead2.avif',
  '/teamleadmain.avif',
];

const mainslidertext = [
  { heading: 'Welcome To Medcare', paragraph: 'Welcome to our medical website! Your health is our priority. Explore trusted resources, expert advice, and personalized care all in one place.' },
  { heading: 'The Best Doctors', paragraph: 'Our team of top doctors is dedicated to providing exceptional care with expertise you can trust, ensuring the best possible outcomes for your health.' },
];

export default function HomePage() {
  return (
    <>
    <div>
    <Header/>
    </div>

    {/* Slider Section - Added this at the top */}
    <div className={styles.sliderSection}>
      <MainSlider images={mainsliderimages} texts={mainslidertext} />
    </div>

    <div>
      <HomeContent/>
    </div>

    <div>
      <AppointmentBooking/>
    </div>

    <div>
      <DoctorsDetails/>
    </div>


    <div>
      <HospitalLanding/>
    </div>

    <div>
      <Location/>
    </div>

    <div>
      <ContactForm/>
    </div>

    <div>
        <Footer/>
    </div>
    </>
  );
}
