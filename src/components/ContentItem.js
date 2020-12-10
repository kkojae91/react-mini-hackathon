import React from 'react';
import styles from '../styles/ContentItem.module.css';

function ContentItem({ news }) {
  console.log(news);
  return (
    <div className={styles.contentitem}>
      <img src="/static/naverNews-image.jpg" alt="news" />
      <div>
        <h1 className={styles.contentitem__title}>
          ‘원조친문’ 전해철 “15억 차익 도곡동 아파트 갭투자 아냐”…아들은
          병역면제(종합)
        </h1>
        <p className={styles.contentitem__desc}>{news.title}</p>
        <a href="https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=100&oid=081&aid=0003146662">
          본문 보러 가기
        </a>
      </div>
    </div>
  );
}

export default ContentItem;
