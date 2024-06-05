import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                exact
                to="/"
                className={({isActive})=>  ` hover:underline ${isActive ? "text-yellow-300" : " text-white"}`}
                activeClassName="text-yellow-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive})=>  ` hover:underline ${isActive ? "text-yellow-300" : " text-white"}`}

                activeClassName="text-yellow-300"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({isActive})=>  ` hover:underline ${isActive ? "text-yellow-300" : " text-white"}`}
              
                activeClassName="text-yellow-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
