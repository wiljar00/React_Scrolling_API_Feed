import React from 'react';
import CardList from './CardList';

type FeedMeProps = {
    getRandomItem: () => void;
    randomItem: any;
  };

const FeedMe: React.FC<FeedMeProps> = ({ getRandomItem, randomItem }) => {
    const handleClick = () => {
        getRandomItem();
        const container = document.querySelector('.random-item-container');
        if (container) {
          container.classList.add('active');
        }
      };
  
    return (
    <div className="feed-me-container">
      <h2 className="feed-me-title">Can't Decide? Let me pick for you!</h2>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Get Recommendation
      </button>
      {randomItem && (
        <div className={`random-item-container active`}>
          <h3 className="random-item-title">How about this?</h3>
          {randomItem.image && ( // Add a conditional check here
            <CardList data={[randomItem]} loading={false} />
          )}
        </div>
      )}
    </div>
  );
};

export default FeedMe;
