import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CardList from './components/CardList';
import FeedMe from './components/FeedMe';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const App: React.FC = () => {
  const [activeFeed, setActiveFeed] = useState('coffee');
  const [coffeeData, setCoffeeData] = useState<any[]>([]);
  const [wineData, setWineData] = useState<any[]>([]);
  const [coffeeLoading, setCoffeeLoading] = useState(false);
  const [wineLoading, setWineLoading] = useState(false);

  useEffect(() => {
    const fetchCoffeeData = async () => {
      setCoffeeLoading(true);
      try {
        const response = await axios.get(`https://api.sampleapis.com/coffee/hot`);
        setCoffeeData((prevData) => [...prevData, ...response.data]);
      } catch (error) {
        console.error('Error fetching coffee data: ', error);
      }
      setCoffeeLoading(false);
    };
    fetchCoffeeData();
  }, []);

  useEffect(() => {
    const fetchWineData = async () => {
      setWineLoading(true);
      try {
        const response = await axios.get(`https://api.sampleapis.com/wines/reds`);
        setWineData((prevData) => [...prevData, ...response.data]);
      } catch (error) {
        console.error('Error fetching wine data: ', error);
      }
      setWineLoading(false);
    };
    fetchWineData();
  }, []);

  const handleSetActiveFeed = (feed: string) => {
    setActiveFeed(feed);
  };

  const getRandomItem = () => {
    const randomFeedData = activeFeed === 'coffee' ? coffeeData : wineData;
    const randomItem =
      randomFeedData[Math.floor(Math.random() * randomFeedData.length)];
    alert(`Random Item: ${JSON.stringify(randomItem)}`);
  };

  return (
    <div style={{ backgroundColor: 'lightseagreen' }}>
      <Navbar setActiveFeed={handleSetActiveFeed} />
      <div className="container mt-4">
        {activeFeed === 'coffee' && (
          <>
            <Header />
            <CardList data={coffeeData} loading={coffeeLoading} />
          </>
        )}
        {activeFeed === 'wine' && (
          <>
            <Header />
            <CardList data={wineData} loading={wineLoading} />
          </>
        )}
        {activeFeed === 'newPage' && <FeedMe getRandomItem={getRandomItem} />}
      </div>
    </div>
  );
};

export default App;
