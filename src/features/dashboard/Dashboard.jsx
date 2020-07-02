import React, { useState, useReducer } from "react";
import { connect } from "react-redux";

import NavigationBar from "../navbar/Navbar";
import { getLocalStorageObject } from "../../utils/localstorage";
import { useEffect } from "react";

/**
 * We have two states....
 *
 * 1) unAuthorized..
 * 2) aUTHORIZED...
 */
const Dashboard = ({ login }) => {
  console.log("Dashboard login", login);

  useEffect(() => {
    console.log(getLocalStorageObject());
  }, []);

  return (
    <>
      <p>Dashboard</p>
    </>
  );
};

const mapStateToProps = (state) => ({ login: state.login });

export default connect(mapStateToProps)(Dashboard);
