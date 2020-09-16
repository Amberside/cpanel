// import of React and needed components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap'


// Import of custom components
import AppNavBar from './components/layout/AppNavBar';
import Dashboard from './components/layout/Dashboard';

const App = () => {
  return (
    <Router>
      <AppNavBar />
      <Container>
        <Route exact path='/' component={Dashboard} />
      </Container>
    </Router>
  );
}

export default App;