import React from 'react';
import './App.css';

import Contacts from './components/Contacts/Contacts';
import Navbar from './components/Navbar/Navbar';
import AddContact from './components/Contacts/AddContact';
import EditContact from './components/Contacts/EditContact';
import { Provider } from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import About from './components/pages/About'
import PageNotFound from './components/pages/PageNotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar name="yasweb"/>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about/:id/:name" component={About} />
              <Route  component={PageNotFound} />
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
