import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/details">Details</a></li>
        <li><a href="/contact-us">Contact Us</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;