// import of React and needed components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap'


// Import of custom components
import AppNavBar from './components/layout/AppNavBar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import Login from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <AppNavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/client/add' component={AddClient} />
          <Route exact path='/client/:id' component={ClientDetails} />
          <Route exact path='/client/edit/:id' component={EditClient} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;