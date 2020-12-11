import React from 'react';
// import ContentItem from './ContentItem';
import styles from '../styles/Content.module.css';

function AiTimesContent({ timesNewsList }) {
  return (
    <div className={styles.content}>
      {timesNewsList &&
        timesNewsList.map((news, index) => {
          return (
            <div key={index} className={styles.contentitem}>
              <img
                src={news.img === 'No Image' ? '/static/noimage.png' : news.img}
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
  );
}

export default AiTimesContent;
