import React, { useState, useEffect } from 'react';
import styles from '../styles/Content.module.css';
import Navigator from './Navigator';

function DaumContent({ daumNewsList }) {
  const [isDaumClicked, setIsDaumClicked] = useState(false);
  useEffect(() => {
    console.log('마운트 되었습니다.');
    setIsDaumClicked(true);
    return () => {
      console.log('언마운트 되었습니다.');
      setIsDaumClicked(false);
    };
  }, []);

  return (
    <div className={styles.content}>
      <Navigator isDaumClicked={isDaumClicked} />
      <div className={styles.content__items}>
        {daumNewsList &&
          daumNewsList.map((news, index) => {
            return (
              <div key={index} className={styles.contentitem}>
                <img
                  src={
                    news.img === 'No Image' ? '/static/noimage.png' : news.img
                  }
                  alt="news-img"
                />
                <div>
                  <h1 className={styles.contentitem__title}>{news.title}</h1>
                  <p className={styles.contentitem__desc}>{news.content}....</p>
                  <a href={news.link}>본문 보러가기</a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DaumContent;
