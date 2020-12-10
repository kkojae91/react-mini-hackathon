import React, { useEffect, useState, useRef } from 'react';
import DaumContent from './DaumContent';
import NaverContent from './NaverContent';
import AiTimesContent from './AiTimesContent';
import axios from 'axios';
import { Route } from 'react-router-dom';

function Content() {
  const [naverNewsList, setNaverNewsList] = useState([]);
  const [daumNewsList, setDaumNewsList] = useState([]);
  const [timesNewsList, setTimesNewsList] = useState([]);
  const urls = ['naver', 'daum', 'times'];

  useEffect(() => {
    const getData = async () => {
      for (let i = 0; i < urls.length; i++) {
        try {
          const result = await axios.get(
            `http://h-project.eba-rbxw3km5.ap-northeast-2.elasticbeanstalk.com/${urls[i]}/`,
          );
          if (!result) {
            console.log('result is not defined');
          }
          switch (urls[i]) {
            case 'naver':
              setNaverNewsList(result.data.news_data);
              break;
            case 'daum':
              setDaumNewsList(result.data.news_data);
              break;
            case 'times':
              setTimesNewsList(result.data.news_data);
              break;
            default:
              break;
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Route
        path={['/timesNews']}
        render={() => <AiTimesContent timesNewsList={timesNewsList} />}
      />
      <Route
        path="/naverNews"
        render={() => <NaverContent naverNewsList={naverNewsList} />}
      />
      <Route
        path="/daumNews"
        render={() => <DaumContent daumNewsList={daumNewsList} />}
      />
    </div>
  );
}

export default Content;
