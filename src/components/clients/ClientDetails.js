import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, InputGroup, Button, FormControl, Row, Col, ButtonGroup, Card, ListGroup } from 'react-bootstrap';
// Redux imports 
import {compose} from 'redux';
import { withFirestore, useFirestoreConnect, useFirestore} from 'react-redux-firebase';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClientDetails = (props) => {
  const [ balDetails, setBalDetails ] = useState({
    showBalanceUpdate: false,
    balanceUpdateAmount: ''
  });
  
  const { showBalanceUpdate, balanceUpdateAmount } = balDetails;
  
  const id = props.match.params.id;
  const firestore = useFirestore();
  const history = useHistory();
  
  useFirestoreConnect(props => [
    { collection: 'clients', doc: id},
    ], connect((state, props) => ({
    clients: state.firestore.data.clients
    }))
  );
  
  const { clients } = props;
  
  const onChange = e => setBalDetails({
    ...balDetails, [e.target.name]: e.target.value
  });
  
  const balanceSubmit = e => {
    e.preventDefault();
    console.log('Submit')
  }
  
  let balanceForm = null;
  
  if(showBalanceUpdate){
    balanceForm = (
      <Form onSubmit={e => balanceSubmit(e)}>
        <InputGroup>
          <FormControl
            type='text'
            placeholder='Add new balance'
            name='balanceUpdateAmount'
            value={balanceUpdateAmount}
            onChange={e => onChange(e)}
          />
        </InputGroup>
        <InputGroup.Append>
          <Button type='submit' className='btn btn-outline-dark'>
            Update
          </Button>
        </InputGroup.Append>
      </Form>
    )
  }
  
  <Fragment>
    <Row>
      <Col md={6}>
        <Link to='/' className='btn btn-secondary mb-2'>
          <FontAwesomeIcon icon='arrow-circle-left' size='lg' />
          {' '}Go to Dashboard
        </Link>
      </Col>
      <Col md={6}>
        <ButtonGroup className='btn-group float-right'>
          <Button className='btn btn-info px-3'>
            <Link to={`/client/edit/${client.id}`} className='btn text-light'>Edit</Link>
          </Button>
          <Button className='btn btn-danger ml-1'>
            Delete
          </Button>
        </ButtonGroup>
      </Col>
      <hr />
      <Card>
        <Card.Header>
          <h3>{client.firstName}{' '}{client.lastName}</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={8} sm={6}>
              <h4>
                Client ID:{' '}
                <span className='text-secondary'>
                  {client.id}
                </span>
              </h4>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  </Fragment>
  )
}

const enhance = compose(
  withFirestore,
  connect((state) => ({
    clients: state.firestore.ordered.clients
  }))
);

export default enhance(ClientDetails)
