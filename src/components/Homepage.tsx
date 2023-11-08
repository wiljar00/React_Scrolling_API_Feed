import React from 'react';

const Homepage: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to the Food Feed App</h1>
      <p>This is the homepage of the Food Feed App. Click on the links in the navbar to explore different collections.</p>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Coffee Collection</h5>
              <p className="card-text">Explore our collection of the finest coffee.</p>
              <a href="/coffee" className="btn btn-primary">View Coffee Collection</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wine Collection</h5>
              <p className="card-text">Discover our carefully curated wine selection.</p>
              <a href="/wine" className="btn btn-primary">View Wine Collection</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">FeedMe</h5>
              <p className="card-text">Get the latest updates from FeedMe.</p>
              <a href="/newPage" className="btn btn-primary">View FeedMe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
