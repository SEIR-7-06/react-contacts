import React from 'react';
import { withRouter } from 'react-router-dom'

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
    this.props.history.push('/contacts');

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 offset-3">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              
              <div>
                <label className="form-label mb-3" htmlFor="email">Email</label>
                <input className='form-control' type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
              </div>

              <div>
                <label className="form-label" htmlFor="password">Password</label>
                <input className='form-control mb-3' type="password" id="password" name="password" value={this.state.name} onChange={this.handleInputChange} />
              </div>

              <button className="btn btn-primary float-end">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Login);
