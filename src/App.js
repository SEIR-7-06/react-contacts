import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import NewContact from './pages/NewContact';

import './App.css';


/*

CREATE AN ABOUT PAGE COMPONENT
CREATE A ROUTE FOR THE ABOUT PAGE
ADD A LINK TO THE ABOUT PAGE IN NAVBAR

*/


class App extends React.Component {
  state = {
    isLoggedIn: true,
  }

  updateAuth = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        <Navbar logout={this.logout} />
        <div className='container'>
          <Switch>
            {/* <Route exact path='/'>
              <HomePage isLoggedIng={this.state.isLoggedIn} />
            </Route> */}
            <Route exact path='/' component={HomePage} />

            <Route path='/contacts' component={() => {
                if (this.state.isLoggedIn) {
                  return <ContactsPage isLoggedIn={this.state.isLoggedIn} />;
                } else {
                  return <Redirect to='/' />
                }
              }}
            />

            <Route path='/add-contact' component={NewContact} />

            <Route path='/login'>
              <Login updateAuth={this.updateAuth} />
            </Route>

            <Route path='/about' component={AboutPage} />
          </Switch>
        </div> 
      </>
    );
  }
  
}

export default App;
