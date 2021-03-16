import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useStyles from './ContentStyles';
import { routes } from '../routes';

const Content = () => {
  const s = useStyles();

  return (
    <div className={s.content}>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
