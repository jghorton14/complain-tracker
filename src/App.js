import React from 'react'
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Container } from 'reactstrap'

import Dashboard from './features/dashboard/Dashboard';
import Login from './features/login/Login';
import Navbar from './features/navbar/Navbar';

const NoMatch = () => {
  let location = useLocation();
  return (
    <>
      <Container style={{marginTop: '3%'}}>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </Container>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
