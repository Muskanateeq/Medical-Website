import React from 'react';
import styles from './DepartmentCard.module.css';

interface DepartmentCardProps {
  emoji: string;
  title: string;
  description: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ emoji, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{emoji}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DepartmentCard;
