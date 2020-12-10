import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Header,
  Navigator,
  Content,
  NaverContent,
  DaumContent,
  AiTimesContent,
} from './components';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  // const [naverNewsList, setNaverNewsList] = useState([]);
  // const [daumNewsList, setDaumNewsList] = useState([]);
  // const [timesNewsList, setTimesNewsList] = useState([]);
  // const urls = ['naver', 'daum', 'times'];

  // useEffect(() => {
  //   const getData = async () => {
  //     for (let i = 0; i < urls.length; i++) {
  //       try {
  //         const result = await axios.get(
  //           `http://h-project.eba-rbxw3km5.ap-northeast-2.elasticbeanstalk.com/${urls[i]}/`,
  //         );
  //         if (!result) {
  //           console.log('result is not defined');
  //         }
  //         switch (urls[i]) {
  //           case 'naver':
  //             setNaverNewsList(result.data.news_data);
  //             break;
  //           case 'daum':
  //             setDaumNewsList(result.data.news_data);
  //             break;
  //           case 'times':
  //             setTimesNewsList(result.data.news_data);
  //             break;
  //           default:
  //             break;
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <div className="section">
      <Route
        path={['/', 'naverNews', 'daumNews', 'timesNews']}
        component={Header}
      />
      <Route
        path={['/', 'naverNews', 'daumNews', 'timesNews']}
        component={Navigator}
      />
      {/* <AiTimesContent timesNewsList={timesNewsList} />
      <Route
        path="/daumNews"
        render={() => <DaumContent daumNewsList={daumNewsList} />}
      />
      <Route
        path="/naverNews"
        render={() => <NaverContent naverNewsList={naverNewsList} />}
      /> */}
      <Content />
    </div>
  );
}

export default App;
