import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>{' '}
        <Link to='/contacts'>Contacts</Link>{' '}
        <Link to='/about'>About</Link>{' '}
        <Link to='/login'>Login</Link>
        <span className='btn btn-link'>Logout</span>
      </li>
    </ul>
  </nav>
);

export default Navbar;
