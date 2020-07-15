import React, {useState} from 'react';
import { connect } from "react-redux";
import { Container, Card, Input, Button } from 'reactstrap';

import { saveComplaintPerson } from '../../utils/actions/index'
/**
 * TODO 
 * 1) make sure value not blank
 * 2) make sure value is valid name
 */
const AddCompalint = ({complaint, dispatch}) => {
  console.log('complaint', complaint.person)
  const [person, setPerson] = useState(0);

  return (
    <Container>
      <h2 style={{textAlign: 'center', marginTop: '3%', marginBottom: '3%'}}>Would You like to Add a Complaint?</h2>
      <Card>
        <p style={{textAlign: 'center', marginTop: '5%'}}>Who Complained?</p>
          <div style={{marginRight: '15%', marginLeft: '15%', marginTop: '5%'}}>
            <Input type="text" name="text" placeholder="Add Person..." onChange={(e) => setPerson(e.target.value)} />
          </div>
          <Button onClick={() => dispatch(saveComplaintPerson(person))}>Submit</Button>
      </Card>
    </Container>
  )
}

const mapStateToProps = (state) => ({ complaint: state.complaint.complaint });

export default connect(mapStateToProps, )(AddCompalint);