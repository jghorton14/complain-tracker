import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = (login) => login.user !== undefined;

/**
 * Make sure that the user is authenticated before giving access to route
 * @param {*} props
 */
const SecuredRoute = ({ login, component, path, location }) => (
  <Route
    path={path}
    render={() => {
      if (isAuthenticated(login)) {
        return <Route path={location.pathname} component={component} />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({ login: state.login });

export default connect(mapStateToProps)(SecuredRoute);
