import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            alert('SignOut Successful')
        })
        .catch((error) => {
            alert(error);
        })
    }

    const navLinks = (
        <>
            <NavLink to={'/'} className='mr-2'>Home</NavLink>
            <NavLink to={'/add-coffee'} className='mr-2'>Add Coffee</NavLink>
            <NavLink to={'/users'} className='mr-2'>Users</NavLink>
        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        navLinks
                    }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='text-red-700 mr-2'>
                    { user && (
                        <div className='text-red-700 mr-2'>{user.email}</div>
                    )}
                </div>
                <div className='mr-2'>
                    {
                         user ? (<button onClick={handleSignOut} className='btn'>SignOut</button>) : (<Link to={'/signin'} className="btn">SignIn</Link>)
                    }
                </div>
                <Link to={'/signup'} className="btn">SignUp</Link>
            </div>
        </div>
    );
};

export default Navbar;