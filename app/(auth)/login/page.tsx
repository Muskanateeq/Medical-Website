"use client";

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './login.module.css';

interface User {
  username: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const [showPasswordSentMessage, setShowPasswordSentMessage] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const signupSuccess = searchParams.get('signupSuccess');
    const passwordSent = searchParams.get('passwordSent');
    
    if (signupSuccess === 'true') {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timer);
    }
    
    if (passwordSent === 'true') {
      setShowPasswordSentMessage(true);
      const timer = setTimeout(() => setShowPasswordSentMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      setIsLoading(false);
      return;
    }

    const usersData = localStorage.getItem('users');
    const users: User[] = usersData ? JSON.parse(usersData) : [];
    
    const user = users.find((user: User) => user.email === email);
    
    if (!user) {
      setError('Invalid credentials. Please sign up first.');
      setIsLoading(false);
      return;
    }

    if (user.password !== password) {
      setError('Invalid password. Please try again.');
      setIsLoading(false);
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    router.push('/home');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Log In</h2>

      {showSuccessMessage && (
        <div className={styles.successMessage}>
          ✅ Successfully your account is created, please login.
        </div>
      )}
      
      {showPasswordSentMessage && (
        <div className={styles.successMessage}>
          ✅ Password recovery email sent! Please check your inbox.
        </div>
      )}

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
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
              className={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className={styles.showHideButton}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <Link href="/forgot-password" className={styles.forgotLink}>
            Forgot Password?
          </Link>
          <div className={styles.rememberMe}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
        </div>
        <button 
          type="submit" 
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <div className={styles.signupText}>
        <p>
          {"Don't have an account?"} <Link href="/signup" className={styles.signupLink}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;