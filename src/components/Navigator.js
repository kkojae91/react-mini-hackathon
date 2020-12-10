import React from 'react';
import styles from '../styles/Navigator.module.css';

function Navigator() {
  return (
    <div className={styles.navigator}>
      <div className={styles.navigator__box}>
        <img src="/static/aitimes.png" alt="aitimes-icon" />
        <span>Ai Times</span>
      </div>
      <div className={styles.navigator__box}>
        <img src="/static/naver.ico" alt="naver-icon" />
        <span>Naver</span>
      </div>
      <div className={styles.navigator__box}>
        <img src="/static/daum.ico" alt="daum-icon" />
        <span>Daum</span>
      </div>
    </div>
  );
}

export default Navigator;
