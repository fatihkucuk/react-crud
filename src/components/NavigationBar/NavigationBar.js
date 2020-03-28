import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/item-list" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-new-item">Add New Item</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavigationBar;
