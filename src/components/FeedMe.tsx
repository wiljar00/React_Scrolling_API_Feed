import React from 'react';
import CardList from './CardList';

type FeedMeProps = {
  getRandomItem: () => void;
  randomItem: any;
};

const FeedMe: React.FC<FeedMeProps> = ({ getRandomItem, randomItem }) => {
  return (
    <div>
      <h2>New Page Content</h2>
      <button className="btn btn-primary mt-3" onClick={getRandomItem}>
        Get Random Item
      </button>
      {randomItem && (
        <div>
          <h3>Random Item</h3>
          <CardList data={[randomItem]} loading={false} />
        </div>
      )}
    </div>
  );
};

export default FeedMe;
