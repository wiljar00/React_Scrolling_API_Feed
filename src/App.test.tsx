import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CardList from './components/CardList';
import axios from 'axios';

const InfiniteScrollApp: React.FC = () => {
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
    // handle setActiveFeed logic here
  };

  return (
    <div>
      <Navbar setActiveFeed={handleSetActiveFeed} />
      <div className="container mt-4">
        <Header />
        <CardList data={coffeeData} loading={coffeeLoading} />
        <Header />
        <CardList data={wineData} loading={wineLoading} />
      </div>
    </div>
  );
};

export default InfiniteScrollApp;
