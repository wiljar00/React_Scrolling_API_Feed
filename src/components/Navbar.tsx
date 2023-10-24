import React from 'react';

type NavbarProps = {
  setActiveFeed: (feed: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ setActiveFeed }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-brand btn btn-link" onClick={() => setActiveFeed('')}>
          Food Feed App
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Added ms-auto class to align items to the right */}
            <li className="nav-item ms-auto">
              <button className="nav-link" onClick={() => setActiveFeed('coffee')}>
                Coffee Collection
              </button>
            </li>
            <li className="nav-item ms-auto">
              <button className="nav-link" onClick={() => setActiveFeed('wine')}>
                Wine Collection
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
