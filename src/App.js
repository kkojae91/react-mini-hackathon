import './App.css';
import React, { useEffect, useState } from 'react';
import { Header, Navigator, Content } from './components';
import axios from 'axios';

function App() {
  const [newsList, setNewsList] = useState([]);
  const urls = ['naver', 'daum', 'times'];
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://h-project.eba-rbxw3km5.ap-northeast-2.elasticbeanstalk.com/naver/`,
        );
        if (!result) {
          console.log('result is not defined');
        }
        setNewsList(result.data.news_data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="section">
      <Header />
      <Navigator />
      <Content newsList={newsList} />
    </div>
  );
}

export default App;
