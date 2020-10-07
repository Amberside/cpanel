// rafcp
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';
// Import redux fuctions 
import { compose } from 'redux';
import { withFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../layout/Spinner';

const Clients = ({ clients }) => {
  
  // Database listener pass in the collection we are listening to
  useFirestoreConnect('clients');
  
  useEffect(() => {
    
  });
  
  if (clients) {
    return (
      <Fragment>
        <Row>
          <Col md={6}>
            <h2>
              <FontAwesomeIcon icon='users' size='lg' />
              {' '}Clients
            </h2>
          </Col>
          <Col md={6}>
            <h5 className='text-right text-secondary'>
              Total Owed: $274
            </h5>
          </Col>
        </Row>
        <Table striped>
          <thead className='thead-inverse'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { clients.map(client => (
              <tr key={client.id}>
                <td>{client.firstName}{' '}{client.lastName}</td>
                <td>{client.email}</td>
                <td>{client.balance}</td>
                <td>
                  <Link to={`/client/${client.id}`}
                    className="btn btn-secondary text-light">
                    <FontAwesomeIcon icon='question-circle' size='lg' />
                    {' '}Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    )
  } else {
    return <Spinner />
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
}

const enhance = compose(
  withFirestore,
  connect((state) => ({
    clients: state.firestore.ordered.clients
  }))
);

export default enhance(Clients);
