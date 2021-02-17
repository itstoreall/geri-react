import React from 'react';
// import BookList from './components/BookList';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content';
import './app.css';

// const books = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
//   { id: 'id-4', name: 'Redux in depth' },
//   { id: 'id-5', name: 'Harry Potter' },
// ];

function App() {
  return (
    <div className="app">
      <Navigation />
      <Content />
      {/* <BookList books={books} /> */}
    </div>
  );
}

export default App;