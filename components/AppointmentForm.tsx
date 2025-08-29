"use client"

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import styles from "../components/AppointmentForm.module.css";

const departments = ["Dermatologist", "Orthodontist", "Primary Health Care", "Pediatrician", "Ophthalmology"];

const doctors = {
  Dermatologist: ["Dr Catherine Castillo (Dermatologist)"],
  Orthodontist: ["Dr Alexander Burns (Orthodontist)"],
  "Primary Health Care": ["Dr Evan Taller (Primary Health Care)"],
  Pediatrician: ["Dr Jamie Brannon (Pediatrician)"],
  Ophthalmology: ["Dr Belly Doe (Ophthalmology)"],
};

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  visitDate: string;
  address: string;
  department: string;
  doctor: string;
  notes: string;
}

const BookingForm: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    visitDate: "",
    address: "",
    department: "",
    doctor: "",
    notes: "",
  });

  // Reset form after 60 seconds
  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 60000); // 60 seconds
      
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setSelectedDoctor("");
    setFormData(prev => ({
      ...prev,
      department: department,
      doctor: "",
    }));
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const doctor = e.target.value;
    setSelectedDoctor(doctor);
    setFormData(prev => ({
      ...prev,
      doctor: doctor,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show confirmation message and hide form
    setShowConfirmation(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      visitDate: "",
      address: "",
      department: "",
      doctor: "",
      notes: "",
    });
    setSelectedDepartment("");
    setSelectedDoctor("");
    setShowConfirmation(false);
  };

  return (
    <div className={styles.bookingPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Book Your Appointment</h1>
          <p>From annual physicals to lab work and vaccinations, and all steps in between, MedCare Clinic patients can get all their needs cared for in few easy steps.</p>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          {/* Left Column - Booking Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <p className={styles.formTagline}>Just a few easy steps</p>
              <h1 className={styles.formTitle}>
                {showConfirmation ? "Appointment Confirmed!" : "Fill Out the Booking Form"}
              </h1>
            </div>

            {showConfirmation ? (
              <div className={styles.fullScreenConfirmation}>
                <div className={styles.confirmationContent}>
                  <h2>Your Appointment is Confirmed!</h2>
                  <div className={styles.confirmationDetails}>
                    <p>
                      <strong>Date:</strong> {formData.visitDate}
                    </p>
                    <p>
                      <strong>With:</strong> {formData.doctor}
                    </p>
                    <p>
                      <strong>For:</strong> {formData.department}
                    </p>
                    <p>
                      <strong>Patient:</strong> {formData.firstName}
                    </p>
                  </div>
                  <p className={styles.confirmationMessage}>
                    We&apos;ll contact you at <strong>{formData.email}</strong> to finalize the details.
                  </p>
                  <div className={styles.timerContainer}>
                    <div className={styles.timerCircle}>
                      <div className={styles.timerText}>60s</div>
                    </div>
                    <p>Returning to booking form...</p>
                  </div>
                  <button 
                    onClick={resetForm} 
                    className={styles.returnButton}
                  >
                    Return to Form Now
                  </button>
                </div>
              </div>
            ) : (
              <form className={styles.bookingForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.formLabel}>
                      First and Family Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your Name"
                      className={styles.formInput}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      Your Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="visitDate" className={styles.formLabel}>
                      Visit Date
                    </label>
                    <input
                      id="visitDate"
                      name="visitDate"
                      type="date"
                      className={styles.formInput}
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address" className={styles.formLabel}>
                    Your Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Where you're from?"
                    className={styles.formInput}
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="department" className={styles.formLabel}>
                      Select Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className={styles.formSelect}
                      value={selectedDepartment}
                      onChange={handleDepartmentChange}
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="doctor" className={styles.formLabel}>
                      Select Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      className={styles.formSelect}
                      value={selectedDoctor}
                      onChange={handleDoctorChange}
                      disabled={!selectedDepartment}
                      required
                    >
                      <option value="">Select Your Doctor</option>
                      {selectedDepartment &&
                        doctors[selectedDepartment as keyof typeof doctors]?.map((doctor) => (
                          <option key={doctor} value={doctor}>
                            {doctor}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="notes" className={styles.formLabel}>
                    Any Additional Notes To Doctor
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Additional Notes"
                    rows={6}
                    className={styles.formTextarea}
                    value={formData.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Book Appointment
                </button>
              </form>
            )}

          </div>

          {/* Right Column - Contact Information */}
          <div className={styles.infoSection}>
            <div className={styles.infoContent}>
              <p className={styles.infoParagraph}>
                Our professionals have made a promise to put your health first and to be there for you before, during
                and after the treatment. You can be sure that our specialists will guide you through the medical journey
                from start to finish!
              </p>
              <p className={styles.infoParagraph}>
                For affordable prices, clinics in our country offer high standard stomatology services, and we will
                provide you with travel arrangements and accommodation.
              </p>
              <p className={styles.infoParagraph}>
                You can fill in this contact form, write the requirements and details related to your problem and you
                will get an answer from our professionals within 24 hours and get a free consultation. If you have any
                additional questions about our work, we will be happy to send you our answers. We welcome all our
                clients in need of any information from our experts.
              </p>
            </div>

            {/* Contact Cards */}
            <div className={styles.contactGrid}>
              {/* Phone */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <Phone className={styles.contactIcon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={styles.contactTitle}>0-800-433-578</h3>
                  <p className={styles.contactText}>24/7 Emergency Phone</p>
                  <p className={styles.contactText}>Call us Anytime</p>
                </div>
              </div>

              {/* Address */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <MapPin className={styles.contactIcon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={styles.contactTitle}>Address</h3>
                  <p className={styles.contactText}>68 First St, Jersey City,</p>
                  <p className={styles.contactText}>New Jersey, United States</p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <Mail className={styles.contactIcon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={styles.contactTitle}>Email Us</h3>
                  <a href="mailto:info@vivomedic.com" className={styles.contactLink}>
                    info@vivomedic.com
                  </a>
                  <a href="mailto:office@vivomedic.com" className={styles.contactLink}>
                    office@vivomedic.com
                  </a>
                </div>
              </div>

              {/* Directions */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <Navigation className={styles.contactIcon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={styles.contactTitle}>Get Directions</h3>
                  <a href="#" className={styles.contactLink}>
                    Get Directions to our Office via Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;