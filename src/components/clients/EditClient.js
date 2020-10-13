import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col, Card, Form, Button} from 'react-bootstrap';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirestore, useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../layout/Spinner';

const EditClient = () => {
  return (
    <div>
      <h1>Edit Client</h1>
    </div>
  )
}

export default EditClient;
