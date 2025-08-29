"use client"

import { useEffect, useState } from "react"
import { Phone, Calendar } from "lucide-react"
import styles from "../components/HospitalLanding.module.css"
import Link from "next/link"

interface ProgressCircleProps {
  percentage: number
  label: string
  delay: number
}

const ProgressCircle = ({ percentage, label, delay }: ProgressCircleProps) => {
  const [currentPercentage, setCurrentPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentPercentage((prev) => {
          if (prev >= percentage) {
            clearInterval(interval)
            return percentage
          }
          return prev + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference

  return (
    <div className={styles.progressContainer}>
      <div className={styles.circleWrapper}>
        <svg className={styles.progressCircle} width="120" height="120">
          <circle cx="60" cy="60" r="45" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" fill="transparent" />
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#ffffff"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={styles.progressBar}
          />
        </svg>
        <div className={styles.percentageText}>{currentPercentage}%</div>
      </div>
      <p className={styles.progressLabel}>{label}</p>
    </div>
  )
}

export default function HospitalLanding() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <p className={styles.tagline}>Research, Education, Treatment</p>
          <h1 className={styles.mainHeading}>
            New York&apos;s Highest
            <br />
            Standard Hospital
          </h1>

          <div className={styles.descriptionGrid}>
            <div className={styles.descriptionColumn}>
              <p className={styles.description}>
                Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly
                visualize quality intellectual capital without superior collaboration and pontificate installed base
                portals after maintainable products.
              </p>
            </div>
            <div className={styles.descriptionColumn}>
              <p className={styles.description}>
                Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business
                applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing
                procedures whereas outside the box thinking.
              </p>
            </div>
          </div>

          <div className={styles.statsSection}>
            <ProgressCircle percentage={75} label="Patients Recovered" delay={500} />
            <ProgressCircle percentage={83} label="Situation Respond" delay={800} />
            <ProgressCircle percentage={68} label="Patient Monitoring" delay={1100} />
            <ProgressCircle percentage={92} label="Disease Diagnostics" delay={1400} />
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.emergencyButton}>
              <Phone className={styles.buttonIcon} />
              <div className={styles.buttonText}>
                <span className={styles.buttonLabel}>24/7 Emergency Line</span>
                <span className={styles.buttonValue}>0-800-433-5788</span>
              </div>
            </button>

            <button className={styles.bookingButton}>
              <Calendar className={styles.buttonIcon} />
              <div className={styles.buttonText}>
                <span className={styles.buttonLabel}>Online Booking</span>
                <Link href = "/book-appointment"><span className={styles.buttonValue}>Book Appointment</span></Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
