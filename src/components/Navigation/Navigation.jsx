import React from 'react';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <a className="link active-link" href="/">
      Home
    </a>
    <a className="link active-link" href="/users-page">
      Users
    </a>
    <a className="link active-link" href="/home-works">
      Home Works
    </a>
    <a className="link active-link" href="/books">
      Books
    </a>
    <a className="link active-link" href="/tests">
      Tests
    </a>
    <a className="link active-link" href="/about">
      About
    </a>
  </div>
);

export default Navigation;