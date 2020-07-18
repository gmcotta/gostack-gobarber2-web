import React from 'react';
import { Switch } from 'react-router-dom';

import CustomRoute from './CustomRoute';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignIn} />
      <CustomRoute path="/signup" component={SignUp} />
      <CustomRoute path="/forgot-password" component={ForgotPassword} />
      <CustomRoute path="/reset-password" component={ResetPassword} />
      <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
