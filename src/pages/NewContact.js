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
