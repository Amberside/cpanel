// import of React and needed components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap'

// Redux imports 
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './store';
import rrfProps from './components/config/rrfProps';

// Font awesome stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faQuestionCircle, faPencilAlt, faArrowCircleLeft, 
  faLock} from '@fortawesome/free-solid-svg-icons';

// Import of custom components
import AppNavBar from './components/layout/AppNavBar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';
import Login from './components/auth/Login';
import PrivateRoute from './components/Routes/PrivateRoute';

const App = (props) => {
  console.log(props)
  // Create the font awesome library
  // fa-users fa-question-circle fa-pencil-alt 
  // fa-arrow-circle-left fa-lock
  library.add(faUsers, faQuestionCircle, faPencilAlt, faArrowCircleLeft, faLock);
  
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <AppNavBar />
          <Container>
            <Switch>
              <PrivateRoute 
                exact path='/' component={Dashboard} 
              />
              <Route exact path='/client/add' component={AddClient} />
              <Route exact path='/client/:id' component={ClientDetails} />
              <Route exact path='/client/edit/:id' component={EditClient} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Container>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

// const enhance = compose(
//   withFirestore,
//   connect((state) => ({
//     auth: state.firebase.auth,
//   }))
// )
export default (App);