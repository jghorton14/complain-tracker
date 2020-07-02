import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { clientId } from "../../secrets.js";
import { saveLocalStorageObject } from "../../utils/localstorage";
import { useEffect } from "react";
import { addTodo } from "../../utils/actions/index";

const GLogin = ({ dispatch }) => {
  const history = useHistory();
  console.log("gLogin");

  useEffect(() => {
    console.log("Clearing user preferences");
    window.localStorage.clear();
  }, []);

  const responseGoogle = (response) => {
    console.log(response);

    // Test to see if this is successful returned object from google.... before pushing user to dashboard...
    if (response.hasOwnProperty("tokenObj")) {
      saveLocalStorageObject(response);
      history.push("/");
      console.log('dispatch', dispatch(addTodo('done')))
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default connect()(GLogin);
