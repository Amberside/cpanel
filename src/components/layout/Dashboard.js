import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Import custom components 
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <Row>
      <Col md={10}>
        <h1> Clients</h1>
      </Col>
      <Col md={2}>
        <Sidebar />
      </Col>
    </Row>
  )
}

export default Dashboard;
