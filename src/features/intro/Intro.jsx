import React from "react";
import { Container } from "reactstrap";

const Intro = () => {
  return (
    <Container style={{ marginTop: "3%" }}>
      <h2>Welcome to Complain Tracker.</h2>
      <p>
        Do you someone who complains a lot and gets on your ever last nerve? If
        so, feel free to use this responsive webapp to track how often people
        complain.
      </p>
      {/* TODO add login button */}
    </Container>
  );
};

export default Intro;
