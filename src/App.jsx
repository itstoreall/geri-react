import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content';
import useStyles from './AppStyles';

function App() {
  const s = useStyles();

  return (
    <div className={s.app}>
      <Navigation />
      <Content />
    </div>
  );
}

export default App;