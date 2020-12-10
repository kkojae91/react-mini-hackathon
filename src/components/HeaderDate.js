import React, { useEffect, useState } from 'react';
import styles from '../styles/HeaderDate.module.css';

function HeaderDate({ date }) {
  let getMonth = date.getMonth() + 1;
  let getDate = date.getDate();
  let getDay = date.getDay();

  let getHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  if (22 > getHours > 12) {
    getHours = `0${getHours - 12}`;
  } else {
    getHours = `${getHours - 12}`;
  }

  let getMinutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  let getSeconds =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return (
    <div className={styles.headerdate}>
      <div className={styles.headerdate__container}>
        <div className={styles.headerdate__month}>
          {getMonth === 1
            ? 'January'
            : getMonth === 2
            ? 'February'
            : getMonth === 3
            ? 'March'
            : getMonth === 4
            ? 'April'
            : getMonth === 5
            ? 'May'
            : getMonth === 6
            ? 'June'
            : getMonth === 7
            ? 'July'
            : getMonth === 8
            ? 'August'
            : getMonth === 9
            ? 'September'
            : getMonth === 10
            ? 'October'
            : getMonth === 11
            ? 'November'
            : 'December'}{' '}
          {getDate}
        </div>
        <div className={styles.headerdate__day}>
          {' '}
          {getDay === 0
            ? 'Sunday'
            : getDay === 1
            ? 'Monday'
            : getDay === 2
            ? 'Tuseday'
            : getDay === 3
            ? 'Wednesday'
            : getDay === 4
            ? 'Thursday'
            : getDay === 5
            ? 'Friday'
            : 'Saturday'}
        </div>
        <div className={styles.headerdate__time}>
          {getHours} : {getMinutes} : {getSeconds}
        </div>
      </div>
    </div>
  );
}

export default HeaderDate;
