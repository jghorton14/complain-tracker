import React from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap"
import { Link } from "react-router-dom";

const Dashboard = ({ login }) => {
  console.log('Dashboard login', login)

  return (
    <Container style={{ marginTop: '2%' }}>
      {/* Charts and graphs */}
      <Link to="/add-complaint" style={{textDecoration: 'none', color: 'black', }}>
        <Card style={{ cursor: 'pointer', borderRadius: '.5rem' }} className="box-shadow">
          <CardBody>
            <CardTitle style={{fontSize:"1.5rem"}}>Add a Complaint</CardTitle>
            <CardText>Someone urking you or really getting on your nerves? Indulge by tracking how often they piss you off. </CardText>
          </CardBody>
        </Card>
      </Link>

    </Container>
  );
};

const mapStateToProps = (state) => ({ login: state.login });

export default connect(mapStateToProps)(Dashboard);
