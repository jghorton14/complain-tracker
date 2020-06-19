import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";


import { clientId } from '../../secrets.js'
import { saveLocalStorageObject } from '../../utils/localstorage'
import { useEffect } from 'react';

const GLogin = () => {
  const history = useHistory();
  console.log('gLogin')

  useEffect(() => {
    console.log('Clearing user preferences')
    window.localStorage.clear()
  }, [])

  const responseGoogle = (response) => {
    console.log(response);

    // Test to see if this is successful returned object from google.... before pushing user to dashboard...
    if (response.hasOwnProperty('tokenObj')) {
      saveLocalStorageObject(response);
      history.push("/");
    }
  }

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GLogin;