import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content';
import userContext from './userContext';
import themeContext from './themeContext';
import useStyles from './AppStyles';
import 'react-toastify/dist/ReactToastify.css';

const contextStyles = {
  color: 'red',
};

function App() {
  const { app } = useStyles();
  const [user, setUser] = useState({
    firstName: 'Bobby',
    lastName: 'Potter',
    age: 25,
  });

  const addOneYear = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  return (
    <div className={app}>
      <themeContext.Provider value={contextStyles}>
        <userContext.Provider value={{ user, addOneYear }}>
          <Navigation />
          <Content />
          <ToastContainer autoClose={2000} />
        </userContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
