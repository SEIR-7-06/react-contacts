import { Link } from "react-router-dom";

const Navbar = (props) => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>{' '}
        <Link to='/contacts'>Contacts</Link>{' '}
        <Link to='/add-contact'>Add Contact</Link>{' '}
        <Link to='/about'>About</Link>{' '}
        <Link to='/login'>Login</Link>
        <span onClick={props.logout} className='btn btn-link'>Logout</span>
      </li>
    </ul>
  </nav>
);

export default Navbar;
