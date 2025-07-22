import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { BsListNested } from 'react-icons/bs';
import usericon from "../../assets/user.png"

const Navbar = () => {
    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/profile'>My Profile</NavLink></li>
    </>
    const {user,logOut} = useContext(AuthContext);
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-green-800">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl text-green-800">PathMentor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-green-800">
      {links}
    </ul>
  </div>
  <div>
     <h2>{user && user.name}</h2>
  </div>
  <div className="navbar-end gap-2">
    <div>
      {
        user && user?.email? (<div>
          <img className='w-10 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} />
        </div>) : (<img src={usericon} alt="" />)
      }
    </div>
    {
    user && user?.email? (
      <button onClick={logOut} className="btn bg-green-800 text-white">Logout</button>
    )  : ( <Link to='/auth/login' className="btn bg-green-800 text-white">Login</Link> )
  }
  </div>
  
</div>
    );
};

export default Navbar;