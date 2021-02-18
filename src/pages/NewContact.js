import React from 'react';

class NewContact extends React.component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  handleInputChange = () => {

  };

  handleSubmit = () => {
    // 1) Fix the retun error below on line 21. How do we return JSX from a class component?

    // 2) Make your API call here to submit POST request to JSON placeholder API (make sure your method is set to POST). If the request is successful, you get back a 201 status and the ID of the new contact record (this API does not actually create your data in the database, but will give you appropriate responses to valid requests);

    // 3) On success, redirect to Contacts page (withRouter HOC component or use a hook if that's the solution you find on your own)

    // SUPER CHALLENGE - Create a function in the ContactsPage component to update the "contacts" state with the new contact object, including the ID you get back from the API. Call that function inside this handleSubmit method before the redirect on the line just above.
  };

  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-label" htmlFor="name">Name</label>
              <input className='form-control' type="text" id="name" name="name" value={state.name} onChange={handleInputChange} />
            </div>
            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <input className='form-control' type="email" id="email" name="email" value={state.email} onChange={handleInputChange} />
            </div>
            <div>
              <label className="form-label" htmlFor="email">Phone</label>
              <input className='form-control' type="text" id="phone" name="phone" value={state.phone} onChange={handleInputChange} />
            </div>

            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
