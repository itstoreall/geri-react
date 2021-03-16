import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useStyles from './ContentStyles';
import { routes } from '../routes';

const Content = () => {
  const s = useStyles();

  return (
    <div className={s.content}>
      <Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route key={path} path={path} exact={exact} component={Component} />
        ))}
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default Content;
