import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";

import Dashboard from "./features/dashboard/Dashboard";
import Login from "./features/login/Login";
import Navbar from "./features/navbar/Navbar";
import Intro from "./features/intro/Intro";
import AddComplaint from './features/add-complaint/AddComplaint'
import SecuredRoute from "./utils/components/SecuredRoute";

const NoMatch = () => {
  let location = useLocation();
  return (
    <>
      <Container style={{ marginTop: "3%" }}>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </Container>
    </>
  );
};

const App = ({ login }) => {
  console.log('app', login)
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/login" component={Login} />
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute exact path="/add-complaint" component={AddComplaint} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({ login: state.login });

export default connect(mapStateToProps)(App);
