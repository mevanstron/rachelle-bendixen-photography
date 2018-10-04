import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div>
      <ul>
      <li><Link to="/">HOME</Link></li>
      <li>COMMERCIAL & EDITORIAL</li>
      <li>PORTRAITS</li>
      <li>PHOTO STORIES</li>
      <li>VIDEO</li>
      <li>CONCEPTUAL & PERSONAL</li>
      </ul>
    </div>
  )
}

export default NavBar;
