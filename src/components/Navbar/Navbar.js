import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from 'react-router-dom'; 
import Login  from '../Forms/LoginForm/Login'
import SignUp from'../Forms/SignUpForm/SignUp';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link className="nav-link " to="/" >Products</Link></li>
        <li><Link className="nav-link" to="/login">Login</Link></li>
        <li><Link className="nav-link" to="/signup">Signup</Link></li>
        <li><Link className="nav-link" to="/">Details</Link></li>
        <li><Link className="nav-link" to="/">Contact Us</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;