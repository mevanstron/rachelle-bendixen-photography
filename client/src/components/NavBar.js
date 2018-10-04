import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/commercial_editorial">COMMERCIAL & EDITORIAL</Link></li>
        <li><Link to="/portraits">PORTRAITS</Link></li>
        <li><Link to="/photo_series">PHOTO STORIES</Link></li>
        <li><Link to="/videos">VIDEO</Link></li>
        <li><Link to="/conceptual_personal">CONCEPTUAL & PERSONAL</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;
