import React from 'react';
import DepartmentCard from './DepartmentCard';
import styles from './ChooseDepartment.module.css';

const ChooseDepartment: React.FC = () => {
  const departments = [
    {
      emoji: '🩺',
      title: 'Primary Health Care',
      description: 'Provides a wide range of services, including preventive care, diagnosis, treatment, and health education. Primary health care aims to provide accessible, affordable, and comprehensive healthcare, focusing on overall well-being and the management of chronic conditions.'
    },
    {
      emoji: '👁️',
      title: 'Ophthalmology',
      description: 'Specializes in the diagnosis, treatment, and prevention of eye disorders and diseases. Ophthalmologists provide comprehensive eye care, including vision correction, management of eye conditions such as glaucoma and cataracts, and surgical interventions.'
    },
    {
      emoji: '🧴',
      title: 'Dermatology',
      description: 'Specializes in diagnosing and treating skin, hair, and nail conditions, addressing a variety of issues from acne to skin cancer. Dermatologists utilize medical, surgical, and cosmetic interventions to improve skin health and appearance.'
    },
    {
      emoji: '🦷',
      title: 'Orthodontist',
      description: 'Specializes in the prevention, and treatment of dental and facial irregularities. They focus on correcting misaligned teeth and jaws, using braces, retainers, and other devices to achieve optimal oral health and improve smiles.'
    },
    {
      emoji: '🧑',
      title: 'Pediatrician',
      description: 'Specializes in the medical care of infants, children, and adolescents. They diagnose and treat a wide range of childhood illnesses, monitor development, and provide preventive care, including vaccinations and health education for parents.'
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Choose Department</h2>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur. Proin gravida nibh vel velit auctor aliquet.</p>
      <div className={styles.cardContainer}>
        {departments.map((dept, index) => (
          <DepartmentCard 
            key={index} 
            emoji={dept.emoji} 
            title={dept.title} 
            description={dept.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseDepartment;
