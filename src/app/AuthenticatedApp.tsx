import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import Dashboard from 'routes/dashboard';

import AppLayout from 'layouts/AppLayout';

import { HOME } from 'constants/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AuthenticatedApp: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <ScrollToTop />
        <Switch>
          <Route exact path={HOME} component={Dashboard} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default AuthenticatedApp;
