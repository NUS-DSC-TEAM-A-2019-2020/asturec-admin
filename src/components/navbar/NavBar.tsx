import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'constants/routes';
import APP_LOGO from 'assets/images/app.png';
import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to={HOME} className="">
          <div className="bar__icon-left">
            <img src={APP_LOGO} alt="app" width="50" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
