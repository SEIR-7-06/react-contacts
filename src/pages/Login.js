import React from 'react';

class Login extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // Update isLoggedIn state in App
    this.props.updateAuth();
    // Redirect to the Contacts page
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 offset-3">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label className="form-label" htmlFor="name">Name</label>
                <input className='form-control' type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} />
              </div>
              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input className='form-control' type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <div>
                <label className="form-label" htmlFor="email">Phone</label>
                <input className='form-control' type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
              </div>

              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>

        
        
        
      </div>
    );
  }
}


export default Login;
