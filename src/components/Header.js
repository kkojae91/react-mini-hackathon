import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import HeaderDate from './HeaderDate';

function Header({ title }) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.header}>
      <HeaderDate date={date} />
      <div className={styles.header__title}>
        <h1>Today's Headline News</h1>
      </div>
    </div>
  );
}

export default Header;
