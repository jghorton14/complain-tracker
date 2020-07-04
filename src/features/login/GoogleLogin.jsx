import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { clientId } from "../../secrets.js";
import { saveLocalStorageObject } from "../../utils/localstorage";
import { useEffect } from "react";
import { saveGoogleUser } from "../../utils/actions/index";
import Navbar from "../navbar/Navbar";

const GLogin = ({ dispatch }) => {
  const history = useHistory();

  useEffect(() => {
    window.localStorage.clear();
  }, []); 

  const responseGoogle = (response) => {
    if (response.hasOwnProperty("tokenObj")) {
      saveLocalStorageObject(response);
      dispatch(saveGoogleUser(response));
      history.push("/dashboard");
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
