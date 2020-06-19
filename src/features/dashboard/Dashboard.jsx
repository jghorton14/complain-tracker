import React, {useState, useReducer} from "react";

import NavigationBar from "../navbar/Navbar";
import { getLocalStorageObject } from '../../utils/localstorage';
import { useEffect } from "react";

/**
 * We have two states....
 * 
 * 1) unAuthorized..
 * 2) aUTHORIZED...
 */
const Dashboard = () => {
  console.log('Dashboard')
  const [userObj, setUserObj] = useState();

  useEffect(() => {
    console.log(getLocalStorageObject())
  }, [])

  return (
    <>
      <p>Dashboard</p>
    </>
  );
}

export default Dashboard;