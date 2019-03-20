import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
  return (
    <div>
      <nav className="nav-extended">
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">Gotcha</Link>
  </div>
  <div className="nav-content">
    <ul className="tabs tabs-transparent">
      <li className="tab"><Link to="/">home</Link></li>
    <li className="tab"><Link className="active" to="/login">login</Link></li>
    </ul>
  </div>
</nav>

<ul className="sidenav" id="mobile-demo">
  <li><Link to="sass.html">Sass</Link></li>
  <li><Link to="badges.html">Components</Link></li>
  <li><Link to="collapsible.html">JavaScript</Link></li>
</ul>

    </div>
  )
}

export default Navbar;
