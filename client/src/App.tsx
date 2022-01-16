import React, { useContext } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { AUTH, HOME, NOT_AUTHORIZED, NOT_FOUND, TODO } from './routes';
import { NotAuthorized, NotFound, Todo, Login } from './pages';
import AuthContext from './contexts/auth';

interface LocationProps {
  pathname: string;
}

function App() {
  const location = useLocation<LocationProps>();
  const { signed } = useContext(AuthContext);

  if (signed && location.pathname === AUTH) {
    return <Redirect to={TODO} />;
  }

  if (signed && location.pathname === HOME) {
    return <Redirect to={TODO} />;
  }

  if (!signed && location.pathname === TODO) {
    return <Redirect to={NOT_AUTHORIZED} />;
  }

  if (!signed && location.pathname === HOME) {
    return <Redirect to={AUTH} />;
  }

  return (
    <Switch>
      <Route path={AUTH}>
        <Login />
      </Route>
      <Route path={TODO}>
        <Todo />
      </Route>
      <Route path={NOT_AUTHORIZED}>
        <NotAuthorized />
      </Route>
      <Route path={NOT_FOUND}>
        <NotFound />
      </Route>
      <Redirect to={NOT_FOUND} />
    </Switch>
  );
}

export default App;
