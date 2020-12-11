import React, { useEffect, useState } from 'react';
import styles from '../styles/Navigator.module.css';
import { Link } from 'react-router-dom';

function Navigator({ isTimesClicked, isNaverClicked, isDaumClicked }) {
  if (isTimesClicked) {
    console.log('times');
  } else {
    console.log('times-');
  }

  if (isNaverClicked) {
    console.log('naver');
  } else {
    console.log('naver-');
  }

  if (isDaumClicked) {
    console.log('daum');
  } else {
    console.log('daum-');
  }

  return (
    <div className={styles.navigator}>
      <div
        className={
          isTimesClicked ? styles.navigator__box__times : styles.navigator__box
        }
      >
        <Link to="/">
          <img src="/static/aitimes.png" alt="aitimes-icon" />
          <span>Ai Times</span>
        </Link>
      </div>
      <div
        className={
          isNaverClicked ? styles.navigator__box__naver : styles.navigator__box
        }
      >
        <Link to="/navernews">
          <img src="/static/naver.ico" alt="naver-icon" />
          <span>Naver</span>
        </Link>
      </div>
      <div
        className={
          isDaumClicked ? styles.navigator__box__daum : styles.navigator__box
        }
      >
        <Link to="/daumnews">
          <img src="/static/daum.ico" alt="daum-icon" />
          <span>Daum</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigator;
