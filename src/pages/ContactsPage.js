// Container | Presentational

// Container - Has state, shares that state with presentational components

// Presentational - Do not always state, they return the actual UI

import React from 'react';
import ContactsList from '../components/ContactsList';

//  {name: '', email: '', id: 1}

class ContactsPage extends React.Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    // const data = [
    //   {id: 1, name: 'John Doe', email: 'jdoe@gmail.com'},
    //   {id: 2, name: 'Sara Doe', email: 'sdoe@gmail.com'},
    // ];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        // console.log(result);
        // Result is not yet JSON data
        // We have to convert it to JSON
        return result.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
          contacts: jsonData
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }  

  render() {
    console.log('Contacts State = ', this.state);
  
    return <ContactsList contacts={this.state.contacts} />;
  }
}

export default ContactsPage;
