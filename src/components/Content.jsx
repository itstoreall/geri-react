import React from 'react';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import HomeWorksPage from './pages/HomeWorksPage';
import AboutPage from './pages/AboutPage';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {pathname === '/' && <HomePage />}
      {pathname === '/user-page' && <UserPage />}
      {pathname === '/home-works' && <HomeWorksPage />}
      {pathname === '/about' && <AboutPage />}
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus autem, ea odio magni perferendis dolores magnam maiores praesentium, nam quae debitis dicta temporibus est? Harum eum velit facere labore!
      </p>
    </div>
  );
};

export default Content;