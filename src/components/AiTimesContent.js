import React, { useEffect, useState } from 'react';
import styles from '../styles/Content.module.css';
import Navigator from './Navigator';

function AiTimesContent({ timesNewsList }) {
  const [isTimesClicked, setIsTimesClicked] = useState(false);
  useEffect(() => {
    // console.log('마운트 되었습니다.');
    setIsTimesClicked(true);
    return () => {
      console.log('언마운트 되었습니다.');
      setIsTimesClicked(false);
    };
  }, []);

  return (
    <div className={styles.content}>
      <Navigator isTimesClicked={isTimesClicked} />
      <div className={styles.content__items}>
        {timesNewsList &&
          timesNewsList.map((news, index) => {
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

export default AiTimesContent;
