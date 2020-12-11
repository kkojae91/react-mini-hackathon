import React from 'react';
import styles from '../styles/Navigator.module.css';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <div className={styles.navigator}>
      <div className={styles.navigator__box}>
        <Link to="/">
          <img src="/static/aitimes.png" alt="aitimes-icon" />
          <span>Ai Times</span>
        </Link>
      </div>
      <div className={styles.navigator__box}>
        <Link to="/navernews">
          <img src="/static/naver.ico" alt="naver-icon" />
          <span>Naver</span>
        </Link>
      </div>
      <div className={styles.navigator__box}>
        <Link to="/daumnews">
          <img src="/static/daum.ico" alt="daum-icon" />
          <span>Daum</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigator;
