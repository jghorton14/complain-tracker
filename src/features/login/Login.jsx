import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'

import NavigationBar from '../navbar/Navbar';
import GLogin from '../login/GoogleLogin'

const Login = ({ dispatch }) => {
  console.log('login props', dispatch);
  return (
    <div>
      <div style={{ background: '#5C9EAD' }}>
        <Container>
          <Row>
            <Col xs="6" sm="4"></Col>
            <Col xs="6" sm="4" style={{ background: '#E39774', }}>
              <h1>Login</h1>
              <GLogin />
            </Col>
            <Col sm="4"></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Login;