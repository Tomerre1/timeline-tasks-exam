import React from 'react';
import { Route } from 'react-router';
import routes from './routes';
import { AppHeader } from './cmps/Header/AppHeader';
import { Popup } from './cmps/Popup/Popup';

export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.isExact}
            component={route.component}
            path={route.path}
          />
        ))}
      </main>
    </div>
  );
}
