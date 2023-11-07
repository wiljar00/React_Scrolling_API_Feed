import React from 'react';

type FeedMeProps = {
  getRandomItem: () => void;
};

const FeedMe: React.FC<FeedMeProps> = ({ getRandomItem }) => {
  return (
    <div>
      <h2>New Page Content</h2>
      <button className="btn btn-primary mt-3" onClick={getRandomItem}>
        Get Random Item
      </button>
    </div>
  );
};

export default FeedMe;