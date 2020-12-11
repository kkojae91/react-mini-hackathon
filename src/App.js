import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Header,
  Navigator,
  NaverContent,
  DaumContent,
  AiTimesContent,
} from './components';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [naverNewsList, setNaverNewsList] = useState([]);
  const [daumNewsList, setDaumNewsList] = useState([]);
  const [timesNewsList, setTimesNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const urls = ['naver', 'daum', 'times'];

  useEffect(() => {
    const getData = async () => {
      for (let i = 0; i < urls.length; i++) {
        try {
          const result = await axios.get(`https://likenews.ga/${urls[i]}/`);
          if (!result) {
            console.log('result is not defined');
          }
          switch (urls[i]) {
            case 'naver':
              setNaverNewsList(result.data.news_data);
              setIsLoading(true);
              break;
            case 'daum':
              setDaumNewsList(result.data.news_data);
              setIsLoading(true);
              break;
            case 'times':
              setTimesNewsList(result.data.news_data);
              setIsLoading(true);
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

  // const [title, setTitle] = useState('Ai Times');

  // const onClick = (event) => {
  //   setTitle(event.target.textContent);
  // };

  // const [change, setChange] = useState(false);
  // const addClass = () => {
  //   this.
  // }

  // const onClickHandler = (event) => {
  //   if (event.target.textContent || event.target.nextSibling.textContent) {
  //     console.log('와우');
  //   }
  // };

  if (!isLoading) {
    return (
      <div>
        <Header />
        <Navigator />
        <div className="loading__animation">
          <div className="loader loader--style2" title="1">
            <svg
              version="1.1"
              id="loader-1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="90px"
              height="90px"
              viewBox="0 0 50 50"
              style={{ enableBackground: 'new 0 0 50 50' }}
              xmlSpace="preserve"
            >
              <path
                fill="#000"
                d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <Header />
      {/* <Navigator /> */}
      <Route
        path="/"
        exact={true}
        render={() => <AiTimesContent timesNewsList={timesNewsList} />}
      />
      <Route
        path="/navernews"
        render={() => <NaverContent naverNewsList={naverNewsList} />}
      />
      <Route
        path="/daumnews"
        render={() => <DaumContent daumNewsList={daumNewsList} />}
      />
    </div>
  );
}

export default App;
