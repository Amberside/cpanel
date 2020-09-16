import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Row>
      <Col md={10}>
        <h1> Clients</h1>
      </Col>
      <Col md={2}>
        <h1> Sidebar</h1>
      </Col>
    </Row>
  )
}

export default Dashboard;
