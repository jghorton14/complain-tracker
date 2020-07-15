import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap'

import GLogin from '../login/GoogleLogin'

const Login = () => {
  return (
    <div>
      <div>
        <Container style={{ marginTop: '5%' }}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card >
                <h3 className="permanent-marker" style={{ textAlign: 'center', color: '#E39774', marginTop: '2%' }}>
                  Complain Tracker
                </h3>
                <Card style={{ margin: '10%' }}>
                  <GLogin />
                </Card>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Login;