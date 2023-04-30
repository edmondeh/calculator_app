import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faHouse, faFile } from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="app_sidebar">
      <div className="app_sidebar__logo">
        <h1>Admin</h1>
      </div>
      <div className="app_sidebar__linksList">
        <Link
          className={`app_sidebar__linksItem ${
            location.pathname === '/' ? 'app_sidebar__linksItem--active' : ''
          }`}
          to="/"
        >
          <div className="app_sidebar__linksItem__svg">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="app_sidebar_linksItem__text">
            <p>Dashboard</p>
          </div>
        </Link>
        <Link
          className={`app_sidebar__linksItem ${
            location.pathname === '/calculate' ? 'app_sidebar__linksItem--active' : ''
          }`}
          to="/calculate"
        >
          <div className="app_sidebar__linksItem__svg">
            <FontAwesomeIcon icon={faCalculator} />
          </div>
          <div className="app_sidebar_linksItem__text">
            <p>Calculate</p>
          </div>
        </Link>
        <Link
          className={`app_sidebar__linksItem ${
            location.pathname === '/calculation_history'
              ? 'app_sidebar__linksItem--active'
              : ''
          }`}
          to="/calculation_history"
        >
          <div className="app_sidebar__linksItem__svg">
            <FontAwesomeIcon icon={faFile} />
          </div>
          <div className="app_sidebar_linksItem__text">
            <p>Calculations history</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
