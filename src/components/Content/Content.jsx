import React from 'react';
import { routes } from '../routes';
import useStyles from './ContentStyles';

const Content = () => {
  const { pathname } = window.location;
  const s = useStyles();

  return (
    <div className={s.content}>
      {routes.map(({ path, component: Component }) =>
        pathname === path && <Component key={path} />
      )}
    </div>
  );
};

export default Content;