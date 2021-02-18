import React from 'react';

class NewContact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('This is the object being sent in the API call below - ', this.state);

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state), // We need to turn the JavaScript object into JSON when we send it. Notice the ContactsPage API call converts the reponse (an array of contact objects) from JSON back to JavaScript.
    })
      .then((result) => {
        console.log('This is the response from the JSON placeholder API - ', result);
        // Result is not yet JSON data
        // We have to convert it to JSON
        // But before we do, we should make sure the request was successful
        if (result.status === 201) {
          // This returned JSON data will get picked up by the next .then() statement below.
          return result.json();
        } else {
          // If there was an error, stop here do not proceed
          // We will handle this more gracefully in the future
          console.log('API error');
        }
      })
      .then((jsonData) => {
        console.log('This is the response data converted to JSON  = ', jsonData);
        // The request was successful if we make it to this block of code. Now we just need to redirct back to the contacts page
        this.props.history.push('/contacts');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 offset-3">
            <h1>New Contact</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input className='form-control' type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
              </div>
              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input className='form-control' type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <div className='mb-3'>
                <label className="form-label" htmlFor="email">Phone</label>
                <input className='form-control' type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
              </div>
  
              <button className="btn btn-primary float-end">Add Contact</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default NewContact;
