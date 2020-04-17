// Modules.
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Custom Modules.
import sellerDashboard from './seller/views/sellerDashboard';
import sellerProducts from './seller/views/SellerProducts';
import Login from './seller/auth/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={sellerDashboard} />
        <Route exact path='/products' component={sellerProducts} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
};
export default Routes;
