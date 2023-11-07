import React from 'react';
import CardList from './CardList';

type FeedMeProps = {
  getRandomItem: () => void;
  randomItem: any;
};

const FeedMe: React.FC<FeedMeProps> = ({ getRandomItem, randomItem }) => {
  return (
    <div className="feed-me-container">
      <h2 className="feed-me-title">Can't Decide? Let me pick something for you!</h2>
      <button className="btn btn-primary mt-3" onClick={getRandomItem}>
        Get Recommendation
      </button>
      {randomItem && (
        <div className="random-item-container">
          <h3 className="random-item-title">How about this?</h3>
          <CardList data={[randomItem]} loading={false} />
        </div>
      )}
    </div>
  );
};

export default FeedMe;
