import React from 'react';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <a className="link active-link" href="/">
      Home
    </a>
    <a className="link active-link" href="/user-page">
      Users
    </a>
    <a className="link active-link" href="/home-works">
      Home Works
    </a>
    <a className="link active-link" href="/about">
      About
    </a>
  </div>
);

export default Navigation;