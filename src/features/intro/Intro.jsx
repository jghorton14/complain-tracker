import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Container style={{ marginTop: "3%" }}>
      <h2>Welcome to Complain Tracker</h2>
      <p>
        Do you someone who complains a lot and gets on your ever last nerve? If
        so, feel free to use this responsive webapp to track how often people
        complain.
      </p>
      <p>
        Click here to <Link to="/login">Login</Link> and start tracking your
        complaints!
      </p>
    </Container>
  );
};

export default Intro;
