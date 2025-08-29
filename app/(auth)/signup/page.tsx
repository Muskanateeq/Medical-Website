"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';

// Define a type for user objects
interface User {
  username: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Retrieve existing users from localStorage with proper typing
    const usersData = localStorage.getItem('users');
    const users: User[] = usersData ? JSON.parse(usersData) : [];
    
    // Check if user already exists with proper typing
    if (users.some((user: User) => user.email === email)) {
      setError('Email already registered');
      return;
    }
    
    // Add new user
    const newUser: User = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Show success message
    setShowMessage(true);
    
    // Redirect to login page with success parameter
    setTimeout(() => {
      router.push('/login?signupSuccess=true');
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Sign Up</h2>
        
        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}
        
        {showMessage && <p className={styles.thanksMessage}>Thanks for joining!</p>}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Username" 
              className={styles.input} 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordInputGroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={togglePasswordVisibility} className={styles.showHideButton}>
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
        
        <div className={styles.signupText}>
          <p>
            Already have an account? <Link href="/login" className={styles.signupLink}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
