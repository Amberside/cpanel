// rafcp
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../layout/Spinner';

const Clients = props => {
  
  const clients = [
    { id: '1', firstName: 'Harry', lastName: 'Riney', email: 'harry@test.com', balance: 45 },
    { id: '2', firstName: 'Jill', lastName: 'Bloggs', email: 'bloggys@test.com', balance: 87 },
    { id: '3', firstName: 'Patrick', lastName: 'McNee', email: 'neey@test.com', balance: 93 }
  ]
  
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
}

Clients.propTypes = {
  clients: PropTypes.array,
}

export default Clients;
