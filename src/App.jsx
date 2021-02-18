import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content';
import './app.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Content />
    </div>
  );
}

export default App;