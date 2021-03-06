import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../screens/Landing';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Landing} />
    </Switch>
  </BrowserRouter>
);
