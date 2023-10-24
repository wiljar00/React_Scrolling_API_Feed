import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.sampleapis.com/coffee/hot');
      setData((prevData) => [...prevData, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  return (
    <div>
    {data.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Ingredients: {item.ingredients.join(", ")}</p>
        <img src={item.image} alt={item.title} style={{ width: '200px', height: '200px' }} />
      </div>
    ))}
    {loading && <div>Loading...</div>}
  </div>
  );
}

export default App;
