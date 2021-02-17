import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';

import './App.css';


/*

CREATE AN ABOUT PAGE COMPONENT
CREATE A ROUTE FOR THE ABOUT PAGE
ADD A LINK TO THE ABOUT PAGE IN NAVBAR

*/


class App extends React.Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          {/* <Route exact path='/'>
            <HomePage isLoggedIng={this.state.isLoggedIn} />
          </Route> */}
          <Route exact path='/' component={HomePage} />

          <Route path='/contacts' component={() => (
            <ContactsPage isLoggedIn={this.state.isLoggedIn} />)}
          />

          <Route path='/about' component={AboutPage} />
        </Switch>
      </>
    );
  }
  
}

export default App;
