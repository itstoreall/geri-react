import React from 'react';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UserPage';
import HomeWorksPage from '../pages/HomeWorksPage';
import BooksPage from '../pages/BooksPage';
import TestPage from '../pages/TestPage';
import AboutPage from '../pages/AboutPage';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {pathname === '/' && <HomePage />}
      {pathname === '/users-page' && <UsersPage />}
      {pathname === '/home-works' && <HomeWorksPage />}
      {pathname === '/books' && <BooksPage />}
      {pathname === '/tests' && <TestPage />}
      {pathname === '/about' && <AboutPage />}
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus autem, ea odio magni perferendis dolores magnam maiores praesentium, nam quae debitis dicta temporibus est? Harum eum velit facere labore!
      </p>
    </div>
  );
};

export default Content;