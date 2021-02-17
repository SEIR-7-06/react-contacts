import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';

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

  updateAuth = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <>
        <Navbar />
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
