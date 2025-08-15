import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

import usericon from "../../assets/user.png"
import logo from "/logo.png"

const Navbar = () => {
  const links = <>
    <li>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-medium transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-green-700 to-green-500 text-white shadow-lg'
              : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-400 hover:to-green-500 hover:text-white hover:shadow-md'
          }`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/profile'
        className={({ isActive }) =>
          `px-3 py-2 rounded-md font-medium transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-green-700 to-green-500 text-white shadow-lg'
              : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 hover:from-green-400 hover:to-green-500 hover:text-white hover:shadow-md'
          }`
        }
      >
        My Profile
      </NavLink>
    </li>
  </>

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-white shadow-lg px-6 py-3 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 w-52 p-2 text-green-800"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold text-green-800 tracking-wide">PathMentor</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-green-800">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <div className="relative group">
          {user && user?.photoURL ? (
            <img
              className='w-10 h-10 rounded-full border-2 border-green-800 object-cover transition-transform duration-200 group-hover:scale-110'
              src={user.photoURL}
              alt=""
              title={user.displayName}
            />
          ) : (
            <img className='w-10 h-10' src={usericon} alt="" />
          )}
        </div>

        {user && user?.email ? (
          <button
            onClick={logOut}
            className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-green-700 to-green-500 shadow-lg hover:from-green-600 hover:to-green-400 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to='/auth/login'
            className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-green-700 to-green-500 shadow-lg hover:from-green-600 hover:to-green-400 transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
