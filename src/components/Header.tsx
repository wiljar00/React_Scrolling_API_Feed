import React from 'react';

const Header = () => {
  return (
    <div className="row mb-4">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="header-container p-3 custom-shadow custom-border" style={{ backgroundColor: 'lightseagreen' }}>
          <h2 className="text-white shadow-sm">My Card Collection</h2>
          <p className="text-white mt-3">Welcome to my collection of cards. This project demonstrates...</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
